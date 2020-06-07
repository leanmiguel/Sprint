const { client } = require("./client")

client.connect()

module.exports = {
  getUsers: async () => {
    const info = await client.query("SELECT * FROM users")
    return info.rows
  },
  addUser: async (_, args) => {
    const pgQuery = {
      text: "INSERT INTO users(name) VALUES($1) RETURNING *",
      values: [args.name],
    }
    const info = await client.query(pgQuery)
    return info.rows[0]
  },
  updateUser: async (_, args) => {
    const pgQuery = {
      text: `UPDATE users SET "name" = '${args.name}' WHERE "id" = ${args.id} RETURNING *`,
    }
    const info = await client.query(pgQuery)
    return info.rows[0]
  },
  deleteUser: async (_, args) => {
    const pgQuery = {
      text: `DELETE FROM users WHERE ("id" = ${args.id}) RETURNING *`,
    }
    const info = await client.query(pgQuery)
    return info.rows[0]
  },
}

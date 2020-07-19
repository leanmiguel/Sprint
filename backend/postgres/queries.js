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
  getProjects: async () => {
    // TODO: modify the query to be just one call
    // TODO: modify it to take in the user id
    // TODO: get it to properly return data
    const tasksQuery = {
      text: `SELECT task, completed
             FROM users 
             JOIN user_projects on users.id = user_id
                JOIN projects on projects.id = project_id
                JOIN tasks on tasks.id = projects.id
             WHERE users.id = 1`,
    }

    const projectQuery = {
      text: `SELECT projects.name
             FROM users 
               JOIN user_projects on users.id = user_id
               JOIN projects on projects.id = project_id
             WHERE users.id = 1`,
    }

    const workSessionQuery = {
      text: `SELECT work_sessions.name,duration
             FROM users 
               JOIN user_projects on users.id = user_id
               JOIN projects on projects.id = project_id
               JOIN work_sessions on projects.id = work_sessions.project_id
             WHERE users.id = 1
      `,
    }

    const userProjects = await client.query(projectQuery)
    const workSessions = await client.query(workSessionQuery)
    const tasks = await client.query(tasksQuery)

    const projects = [
      {
        name: userProjects.rows[0].name,
        tasks: [tasks.rows[0]],
        workSessions: [workSessions.rows[0]],
      },
    ]

    return projects
  },
}

// postgres setup
const { Client } = require("pg")

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
})

exports.client = client

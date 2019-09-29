module.exports =  {

  "development": {
    "username": process.env.USER,
    "password": process.env.KEY,
    "database": process.env.DB,
    "host": process.env.HOST,
    "port": process.env.PORT,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql"
  }
}

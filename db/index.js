/*
* Global Sequelize Instance
*
* sequelize config for app usage
*/
const Sequelize = require('sequelize');

let sequelize;

if(process.env.NODE_ENV != 'development'){
  sequelize = new Sequelize('chillo_db', 'admin', 'chilloroot', {
    host: 'chillo-db.cd0hm6kwxekz.us-west-1.rds.amazonaws.com',
    port: 3306,
    dialect: 'mysql',
  });
  
}else{
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
  });

}

module.exports = sequelize;

global.sequelize = sequelize;

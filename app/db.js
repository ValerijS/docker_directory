
const Sequelize = require('sequelize'); 
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  // SQLite only
  storage: './database.sqlite'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
 .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const Groups = require(process.cwd()+'/'+'models/groups')(sequelize, Sequelize);
const Users = require('./models/users')(sequelize, Sequelize);
const Administrator = require('./models/administrator')(sequelize, Sequelize);

module.exports = {
  Groups: Groups,
  Users: Users,
  Administrator: Administrator
}
module.exports.sequelize = sequelize
module.exports.Sequelize = Sequelize    


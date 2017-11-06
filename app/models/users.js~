module.exports = function(sequelize, Sequelize){
    //TODO discription
    const Users = sequelize.define('Users', {
      firstName: {
        type: Sequelize.STRING,
        allowNull: false ,
        unique: 'compositeIndex' 
      },
      lastName: {
        type: Sequelize.STRING,
        unique: 'compositeIndex',
        allowNull: false,  
      },
      averageScore: {
       type: Sequelize.DECIMAL(2, 2),
        allowNull: true
      },
     group: {
        type: Sequelize.STRING,
        allowNull: false                           
      }                      
    });     
    Users.belongsTo(sequelize.models.Groups, {foreignKey: 'group', targetKey: 'id'}); 
    return Users;
}

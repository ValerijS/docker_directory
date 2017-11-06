module.exports = function(sequelize, Sequelize){
    //TODO discription
    const Groups = sequelize.define('Groups', {
      nameOrNumber: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false  
      },
      numberOfUsers: {
        type: Sequelize.INTEGER,
        allowNull: true  
      },
      averageScore: {
        type: Sequelize.DECIMAL(2, 2),
        allowNull: true
      }                         
    });
    return Groups;
}

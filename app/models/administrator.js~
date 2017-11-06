module.exports = function(sequelize, Sequelize){    
    const Administrator = sequelize.define('Administrator', {
            email: {
                type: Sequelize.STRING,
                validate: {isEmail: true},
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true   
            }                               
    });
    return Administrator;
}

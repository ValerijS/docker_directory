const {sequelize, Administrator} = require('./db');

sequelize.sync({force:true})
.then(() => {
    const promises = [
    
         Administrator.create({ 
                    email: 'ab@cd.com',
                    password: 'abcd'
        }) 
    
    ];
    return Promise.all(promises);
})

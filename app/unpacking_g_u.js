
var faker = require('faker');

//var randomName = faker.name.findName(); // Rowan Nikolaus
//var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
//var randomCard = faker.helpers.createCard(); // random contact card containing many 
//console.log(randomEmail);
//console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
//console.log(faker.fake(" {{name.firstName}}"));
//console.log(faker.fake(" {{random.number}}") % 13);//parseInt
const {sequelize, Groups, Users} = require('./db');

sequelize.sync({force:true})
.then(() => {
    const promises = [];
    for (let i = 0; i<10; i++) {
        promises.push(
            Groups.create({
                nameOrNumber: faker.fake(" {{random.number}}")%200,
                numberOfUsers: faker.fake(" {{random.number}}")%1000,
                averageScore: faker.fake(" {{random.number}}")%12
            })
            .then((group) => {
               const promises1 = [];
                 for (let j = 0; j<10; j++) {
                     
                   promises1.push( 
                    Users.create({ 
                    firstName: faker.fake(" {{name.firstName}}"),
                    lastName: faker.fake(" {{name.lastName}}"),                    
                    group: group.id,
                    averageScore: faker.fake(" {{random.number}}")%12 
                    
                })
                )
                }
                return Promise.all(promises1);
            })
            
        )
    }
    return Promise.all(promises)
})

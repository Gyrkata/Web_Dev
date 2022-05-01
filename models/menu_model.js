const nedb = require('nedb');



class Menu {

    constructor(dbFilePath) {
    if (dbFilePath)   {
        this.db = new nedb({ filename: dbFilePath, autoload: true});
        console.log('DB is connected to ' + dbFilePath);
    
    }   else {
          this.db = new nedb();
    }
}

    init() {
        this.db.insert({
            id:1,
            name: "Shopska Salata",
            description: "Salata koqto e shopska",
            ingredients: "Krastavica, Mlqko",
            allergies: "nqma alergii",
            price: "12,99 $",
            _id: "LwugiCuxD3IGdtYY"
        });
        
        console.log("db entry Shopska Salata inserted");

        this.db.insert({
            id:2,
            name: "Kiufte",
            description: 'Mesen delikates',
            ingredients: 'Meso i chubrica',
            allergies: 'Ne go qj brat',
            price: "200,00 $",
            _id: "oNf8Y7F5gJlvlGZN"
        })
        
        console.log('db entry Kiufte inserted');



    }
    
    getAllEntries() {
        
        return new Promise((resolve, reject) => {
    
            this.db.find({}, function(err, entries) {
                
                if (err) {
                    reject(err);
                
                } else {
                    resolve(entries);
                   
                    console.log('function all() returns: ', entries);
                }
            })
        })
    }

}

module.exports = Menu;



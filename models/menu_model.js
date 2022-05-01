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
            name: "Shopska Salata",
            description: "Salata koqto e shopska",
            ingredients: "Krastavica, Mlqko",
            allergies: "nqma alergii",
            price: "12,99 $"
            
        });
        
        console.log('db entry Shopska Salata inserted');

        this.db.insert({
            name: "Kiufte",
            description: "Mesen delikates",
            ingredients: "Meso i chubrica",
            allergies: "Ne go qj brat",
            price: "200,00 $",
        })
        
        console.log('db entry Kiufte inserted');



    }


}

module.exports = GuestBook;



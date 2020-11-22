const {createPool} = require('mysql'); 

const pool = createPool({  
    host: "localhost", // IP/domain name 
    user: "root", // username 
    password: "123456", // password 
    database: "mega_shop_updated",
    connectionLimit: 10
}); 

pool.query('select * from products',(err,result) => {
    if(err) {
      return console.log(err);
    }
    return console.log(result);
})
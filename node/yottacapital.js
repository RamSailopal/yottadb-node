var dbx = require('mg-dbx').dbx;
var db = new dbx();
var open = db.open({ type: "YottaDB", host: "yottadb", tcp_port: 7041, });
var capital = db.mglobal("CAPITAL");
var result = capital.set("England", "London");
var city=capital.get("England");
console.log("The capital of England is " + city);

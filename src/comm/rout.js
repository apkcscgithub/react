const expx = require("express");
const db = require("../db/db");
const cofg = require("../confg/confg");

const glossary_Db = cofg.dbs.glossary_Db; 
const operation_Db = cofg.dbs.operation_Db; 
var r1 = expx.Router();

r1.use((rq,rs,nxt) =>{
	rs.header('Access-Control-Allow-Origin', "*");
	rs.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    rs.header('Access-Control-Allow-Headers', 'Content-Type');
	nxt();
});
r1.post("/login",(rq,rs)=>{
	console.log("Login Start");
	rs.json({"OK":1,"Tst" :"done"});
	//rs.send("fffff")
});
r1.get("/loadBkData/:id",(rq,rs)=>{
	//console.log(rq.params.id);
	console.log("loadBkData Start");
	
	
});
r1.get("/loadSrvData/:bk/:accid/:srvlst",(rq,rs)=>{
	//console.log(rq.params.accid);
	console.log("loadSrvData Start");
	
	
});
r1.get("/loadMBkData/:bk",(rq,rs)=>{
	console.log("load Main Bk Data Start"+rq.params.bk);
				
});	
r1.get("/getUpdateDetails/:bk",(rq,rs)=>{
	console.log("load  Update Details Data Start"+rq.params.bk);
	
});	
r1.get("/getBookingReleaseDetails/:bk",(rq,rs)=>{
	console.log("load Booking Release Details Data Start"+rq.params.bk);
	
});	

module.exports = r1;
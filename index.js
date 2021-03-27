const expx = require("express");
var app = expx();
const port = 3001;

app.use(expx.json());

app.listen(port,()=>{
	console.log("Server Start");
});

app.use((rq,rs,nxt)=>{
	console.log("this is middleware Start");
	nxt();
});
app.use("/",require("./src/comm/rout"));
app.get("/",(rq,rs)=>{
	console.log("get OK");
	
});


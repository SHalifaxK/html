const express = require('express');
const app = express();

app.use(express.urlencoded());

let id = 0;
let customers = [];

function Cust(id, fname,sname,lname, HETU=1){
	this.id = id;
	this.fname = fname;
	this.sname = sname;
	this.lname = lname;
	this.HETU = HETU;
}

app.post('/submit-form', (req,res) => {
	id++;
	Custo = new Cust(id, req.body.fname, req.body.sname, req.body.lname);
	const tiedot = req.body.fname + ' ' + req.body.sname + ' ' + req.body.lname;
	customers.push(Custo);
	console.log(tiedot);
	console.log(customers);
	res.json(customers);
	res.end();
});

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/form.html');
});

app.listen(8084);
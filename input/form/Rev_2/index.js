const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));



const fs = require('fs');

let customers = [];

function Cust(id, fname,sname,lname, HETU=1){
	this.id = id;
	this.fname = fname;
	this.sname = sname;
	this.lname = lname;
	this.HETU = HETU;
};
filePath = __dirname + '/custData.txt';
let data = fs.readFileSync(filePath, 'utf8').toString().split('{'); 
for (i in data){
	console.log(data[i]);
	customers.push(data[i]);
}

app.post('/user', (req,res) => {
	let id = customers.length;
	id++;
	Custo = new Cust(id, req.body.fname, req.body.sname, req.body.lname, req.body.hetu);
	
	const tiedot = req.body.fname + ' ' + req.body.sname + ' ' + req.body.lname;
	customers.push(Custo);
	//console.log(tiedot);
	//console.log(customers);
	res.json(customers);
	
	filePath = __dirname + '/custData.txt';
	fs.appendFile(filePath, JSON.stringify(Custo), function () {
		res.end();
	});
	
});

app.post('/search', (req, res) => {
	console.log('Searching for...');
	const val = '' + req.body.shetu;
	console.log(val);
	res.json(val);
	//console.log(customers[customers.length-1]);
	console.log(customers.length);
	customers.forEach(function (item) {
		let x = item.includes(req.body.shetu);
			if (x) {
				console.log(item);
		}
	});
	
});

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/form.html');
});

app.listen(8084);


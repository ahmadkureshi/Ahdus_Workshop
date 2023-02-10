const express = require('express');
const app = express();
const port = 5000;
const people = require('./data');
const authenticate = require('./authenticate')

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/people', (req, res) =>{
	res.json(people)
});

app.get('/api/people/:id', authenticate, (req, res) =>{

	const { id } = req.params

	const person = people.find((person) => person.id === Number(id))

	if(!person){
		return res.status(404).send("no person found");
	}else{
		return res.json(person);
	}
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
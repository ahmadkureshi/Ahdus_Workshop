const people = require('./data')

const authenticate = (req,resp, next) =>{
	const { token } = req.query;
	if(!token){
		return resp.status(404).send("token is required")
	}

	if(token != "ahdus"){
		return resp.status(404).send("Invalid Token")
	}	

	const { id } = req.params

	const person = people.find((person) => person.id === Number(id))
	console.log(person)
	return next();
}
module.exports  = authenticate;
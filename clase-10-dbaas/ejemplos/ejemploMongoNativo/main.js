import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://coderhouse:coderhouse@cluster0.o0eqf.mongodb.net/coderhouse?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

await client.connect()

const dbUsuarios = client.db("coderhouse").collection("usuarios");

await dbUsuarios.insertOne({ nombre: 'jacinta' })

const usuarios = await dbUsuarios.find().toArray()

console.log(usuarios)

await client.close();

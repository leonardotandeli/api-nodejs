import mongoose from "mongoose";

mongoose.connect("mongodb+srv://leonardo:linkppl1@calculadorasalario.g3b9jfk.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;


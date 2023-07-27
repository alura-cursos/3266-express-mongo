import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect("mongodb+srv://admin:<password>@cluster0.uvmwiwx.mongodb.net/livraria?retryWrites=true&w=majority");

  return mongoose.connection;
};

export default conectaNaDatabase;

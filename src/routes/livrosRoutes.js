import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);

export default routes;

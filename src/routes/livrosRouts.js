import express from "express";
import livroController from "../controllers/livrosController.js";
import ListCollectionsCursor from "mongodb";

const router = express.Router();

router
    .get("/livros", livroController.listarLivros)
    .get("/livros/busca", livroController.listarLivrosPorEditora)
    .get("/livros/:id", livroController.listarLivrosPorId)
    .post("/livros", livroController.cadastrarLivro)
    .put("/livros/:id", livroController.atualizarLivro)
    .delete("/livros/:id", livroController.deletarLivros);

export default router;
import express from "express";
import autorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/autores", autorController.listarAutors)
    .get("/autores/:id", autorController.listarAutorsPorId)
    .post("/autores", autorController.cadastrarAutor)
    .put("/autores/:id", autorController.atualizarAutor)
    .delete("/autores/:id", autorController.deletarAutors);

export default router;
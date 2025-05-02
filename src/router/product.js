import express from "express";
import { addProducts, deleteProducts, getProductById, getProducts, updateProducts } from "../controllers/product";

const router = express.Router();
router.get(`/products`,getProducts);
router.get(`/products/:id`,getProductById);
router.post(`/products`,addProducts);
router.put(`/products/:id`,updateProducts);
router.delete(`/products/:id`,deleteProducts);
export default router;
import express from "express";
import UserController from "./controller/userController.js";
import authenticate from "./middleware/autenticate.js";
import axios from "axios";
import ParkirController from "./controller/parkirController.js";

const router = express.Router();

router.get("/user", UserController.get);
router.get("/user/me", authenticate, UserController.me);
router.get("/user/:id", UserController.detail);
router.post("/user", UserController.store);
router.post("/user/login", UserController.login);
router.post("/user/register", UserController.register);
router.put("/user/:id", UserController.update);
router.delete("/user/:id", UserController.delete);


router.get("/parkir", authenticate, ParkirController.get);
router.post("/parkir", authenticate, ParkirController.order);
router.put("/parkir/:id", authenticate, ParkirController.update);
router.delete("/parkir/:id", authenticate, ParkirController.cancel);

// router.get("/cat-fact", async (req, res) => {
//     try {
//       const response = await axios.get("https://catfact.ninja/fact");
//       res.json(response.data); // kirim ke client
//     } catch (error) {
//       console.error("Gagal ambil fakta kucing:", error.message);
//       res.status(500).json({ error: "Gagal ambil data" });
//     }
//   });

export default router;

import { Router } from "express";
import ProvinceService from "../services/province-service.js";

const router = Router();
const service = new ProvinceService();

router.get("/", async (req, res) => {

    const provinces = await service.getAll();

    res.status(200).json(provinces);
});

router.get("/:id", async (req, res) => {

    const province = await service.getById(req.params.id);

    if (!province) {
        return res.sendStatus(404);
    }

    res.status(200).json(province);
});

router.post("/", async (req, res) => {

    try {

        await service.insert(req.body);

        res.sendStatus(201);

    } catch (error) {

        res.status(400).send(error.message);
    }
});

router.put("/", async (req, res) => {

    try {

        const rows = await service.update(req.body);

        if (rows === 0) {
            return res.sendStatus(404);
        }

        res.sendStatus(201);

    } catch (error) {

        res.status(400).send(error.message);
    }
});

router.delete("/:id", async (req, res) => {

    const rows = await service.delete(req.params.id);

    if (rows === 0) {
        return res.sendStatus(404);
    }

    res.sendStatus(200);
});

export default router;
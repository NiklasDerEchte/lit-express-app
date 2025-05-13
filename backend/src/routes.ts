import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'Example response from controller' });
});

export default router;
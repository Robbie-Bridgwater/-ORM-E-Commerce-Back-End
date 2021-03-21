const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async(req, res) => {
    try {
        const catUpdate = await Category.findAll({
            include: [{ model: Product }],
        });

        res.status(200).json(catUpdate);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async(req, res) => {
    try {
        const catUpdate = await Category.findByPk(req.params.id, {
            include: [{ model: Product }],
        });

        if (!catUpdate) {
            res.status(404).json({ message: 'This category ID does not exist.' });
            return;
        }

        res.status(200).json(catUpdate);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', async(req, res) => {
    try {
        const catUpdate = await Category.create(req.body);

        res.status(200).json(catUpdate);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async(req, res) => {
    try {
        const catUpdate = Category.update(req.body, {
            where: {
                id: req.params.id,
            },
        })

        if (!catUpdate) {
            res.status(404).json({ message: 'No category found with this id!' });
            return;
        }
        res.status(200).json(catUpdate);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const catUpdate = await Category.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!catUpdate) {
            res.status(404).json({ message: 'No category found with this id!' });
            return;
        }

        res.status(200).json(catUpdate);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
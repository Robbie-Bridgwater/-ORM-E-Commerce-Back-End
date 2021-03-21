const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', async(req, res) => {
    try {
        const tagUpdate = await Tag.findAll({
            indlude: [{
                model: Product
            }, ]
        });
        res.status(200).json(tagUpdate);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async(req, res) => {
    try {
        const tagUpdate = await Tag.findByPk(req.params.id, {
            include: [{
                model: Product
            }, ]
        });

        if (!tagUpdate) {
            res.status(404).json({ message: 'There is no tag with this ID.' });
            return;
        }

        res.status(200).json(tagUpdate);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async(req, res) => {
    try {
        const tagUpdate = await Tag.create(req.body);
        res.status(200).json(tagUpdate);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async(req, res) => {
    try {
        const tagUpdate = await Tag.update(req.body, {
            where: {
                id: req.params.id
            },
        });

        if (!tagUpdate[0]) {
            res.status(404).json({ message: 'There is no tag with this ID.' });
            return;
        }
        res.status(200).json(tagUpdate);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const tagUpdate = await Tag.destroy({
            where: {
                id: req.params.id
            },
        });

        if (!tagUpdate) {
            res.status(404).json({ message: 'There is no tag with this ID.' });
            return;
        }
        res.status(200).json(tagUpdate);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
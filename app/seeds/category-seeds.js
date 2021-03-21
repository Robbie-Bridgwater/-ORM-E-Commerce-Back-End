const { Category } = require('../models');

const catUpdate = [{
        category_name: 'Shirts',
    },
    {
        category_name: 'Shorts',
    },
    {
        category_name: 'Music',
    },
    {
        category_name: 'Hats',
    },
    {
        category_name: 'Shoes',
    },
];

const seedCategories = () => Category.bulkCreate(catUpdate);

module.exports = seedCategories;
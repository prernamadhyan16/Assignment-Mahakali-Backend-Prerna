const { PageBanner } = require('../models');
exports.create = async (req, res) => {
    try {
        const { bannerName, redirectingPage } = req.body;
        if (!req.file) {
            return res.status(400).json({ message: 'Image is required' });
        }
        const imageUrl = req.file.path;
        const newBanner = await PageBanner.create({
            bannerName,
            redirectingPage,
            imageUrl
        });
        res.status(201).json(newBanner);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAll = async (req, res) => {
    try {
        const data = await PageBanner.findAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await PageBanner.findByPk(id);
        if (!item) return res.status(404).json({ message: 'Not found' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { bannerName, redirectingPage } = req.body;
        const item = await PageBanner.findByPk(id);
        if (!item) {
            return res.status(404).json({ message: 'Not found' });
        }
        let updatedData = { bannerName, redirectingPage };
        if (req.file) {
            updatedData.imageUrl = req.file.path;
        }
        await item.update(updatedData);
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await PageBanner.findByPk(id);
        if (!item) {
            return res.status(404).json({ message: 'Not found' });
        }
        await item.destroy();
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
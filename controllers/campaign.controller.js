const { Campaign } = require('../models');
exports.create = async (req, res) => {
    try {
        const { campaignName, redirectLink } = req.body;
        if (!req.file) {
            return res.status(400).json({ message: 'Image is required' });
        }
        const imageUrl = req.file.path;
        const newCampaign = await Campaign.create({
            campaignName,
            redirectLink,
            imageUrl
        });
        res.status(201).json(newCampaign);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAll = async (req, res) => {
    try {
        const data = await Campaign.findAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Campaign.findByPk(id);
        if (!item) return res.status(404).json({ message: 'Not found' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { campaignName, redirectLink } = req.body;
        const item = await Campaign.findByPk(id);
        if (!item) {
            return res.status(404).json({ message: 'Not found' });
        }
        let updatedData = { campaignName, redirectLink };
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
        const item = await Campaign.findByPk(id);
        if (!item) {
            return res.status(404).json({ message: 'Not found' });
        }
        await item.destroy();
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

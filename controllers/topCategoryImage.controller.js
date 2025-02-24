const { TopCategoryImage } = require('../models');
exports.create = async (req, res) => {
  try {
    const { categoryName, displayName } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' });
    }
    const imageUrl = req.file.path;
    const newImage = await TopCategoryImage.create({
      categoryName,
      displayName,
      imageUrl
    });
    res.status(201).json(newImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getAll = async (req, res) => {
  try {
    const data = await TopCategoryImage.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await TopCategoryImage.findByPk(id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryName, displayName } = req.body;
    const item = await TopCategoryImage.findByPk(id);
    if (!item) {
      return res.status(404).json({ message: 'Not found' });
    }
    let updatedData = { categoryName, displayName };
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
    const item = await TopCategoryImage.findByPk(id);
    if (!item) {
      return res.status(404).json({ message: 'Not found' });
    }
    await item.destroy();
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

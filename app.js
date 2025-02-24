require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const topCategoryImageRoutes = require('./routes/topCategoryImage.routes');
const pageBannerRoutes = require('./routes/pageBanner.routes');
const campaignRoutes = require('./routes/campaign.routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/top-category-images', topCategoryImageRoutes);
app.use('/api/page-banners', pageBannerRoutes);
app.use('/api/campaigns', campaignRoutes);
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
});
sequelize.sync();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

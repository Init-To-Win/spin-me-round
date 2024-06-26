const sequelize = require("../config/connection");
const seedArtists = require("./artistData");
const seedForSales = require("./forSaleData");
const seedRecords = require("./recordData");
const seedReviews = require("./reviewData");
const seedUsers = require("./userData");
const seedRecordData = require("./user_recordData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedArtists();
  await seedRecords();
  await seedUsers();
  await seedForSales();
  await seedReviews();
  await seedRecordData();
  console.log("All Seeds Planted!");
  process.exit(0);
};

seedAll();

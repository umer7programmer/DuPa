const mongoose = require("mongoose");
const CATEGORY = require("../models/Category.js");
const categoryData = async (req, resp) => {

    try {
        const categoryData = await CATEGORY.find();
  resp.send(categoryData);
} catch (error) {
        resp.send(error)
 }
}

module.exports = categoryData;
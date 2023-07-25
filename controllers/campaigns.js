const mongoose = require("mongoose");
const CAMPAIGN = require("../models/campaigns.js");
const getData = async (req, resp) => {

    try {
        const campaignData = await CAMPAIGN.find();
        resp.send(campaignData);
    
    } catch (error) {
        resp.send(error);
    
    }

}
module.exports = { getData };



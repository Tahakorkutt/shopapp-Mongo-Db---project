const logger = require("../middleware/logger");

module.exports = function(err, req, res, next) {
    // logging
    // logger.log("error",err.message);
    logger.error(err.message);
    res.status(500).send("hata oluştu.");
}
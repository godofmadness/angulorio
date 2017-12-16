var path = require("path");



module.exports = {

    resolve: function (resource) {
        return path.join(__dirname, "../../webapp/asker/") + resource;
    }

}
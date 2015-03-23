var mime = require("mime");

function ContentTypeParser() {
    var self = this;

    self.getContentType = function (filePath) {
        var contentType = mime.lookup(filePath);

        return contentType;
    };
};

module.exports = new ContentTypeParser();
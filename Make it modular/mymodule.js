var fs = require('fs');
var path = require('path');

module.exports = function(dirname, ext, callback) {
	var extension = '.' + ext;
	fs.readdir(dirname, function(err, files) {
		if (err) {
            callback(err, null);
            console.log(err);
		} else {
			result = [];
			files.forEach(function(entry) {
				if (path.extname(entry) == extension) {
                    result.push(entry);
                    console.log(result);
				}
			})
			callback(null, result);
		}
	})
}
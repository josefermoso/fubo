/* GET home page */
module.exports.index = function (req, res) {
    res.render('index', {
        title: 'Express'
    });
};

module.exports.restricted = function (req, res) {
    res.render('index', {
        title: 'Express Restricted'
    });
};
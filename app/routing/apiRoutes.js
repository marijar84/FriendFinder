var friendList = require('../data/friend.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendList);
    });

    app.post('/api/friends', function (req, res) {
        console.log("req", req.body);
        friendList.push(req.body);
        res.json(friendList);
    });
};
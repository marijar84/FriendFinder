var friendList = require('../data/friend.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendList);
    });

    app.post('/api/friends', function (req, res) {
        console.log("req", req.body);

        var newFriend = req.body;

        var differences = [];

        var bestFriend = 0;

        console.log("newFriend", newFriend);

        for (var friend = 0; friend < friendList.length; friend++) {

            var scoreDifference = 0;
            for (var scoresItem = 0; scoresItem < newFriend.scores.length; scoresItem++) {
                console.log("score1", friendList[friend].scores[scoresItem]);
                console.log("score2", newFriend.scores[scoresItem]);
                scoreDifference += (Math.abs(parseInt(friendList[friend].scores[scoresItem]) - parseInt(newFriend.scores[scoresItem])));
                console.log("scoreDifference", scoreDifference);
            }

            differences.push(scoreDifference);
        }

        console.log("differences", differences);

        for (var item = 0; item < differences.length; item++) {
            if (differences[item] <= differences[bestFriend]) {
                bestFriend = item;
            }
        }

        friendList.push(req.body);
        console.log(friendList[bestFriend]);
        res.json(friendList[bestFriend]);
    });
};
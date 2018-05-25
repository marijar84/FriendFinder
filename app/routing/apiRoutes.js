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

        for(var friend = 0; friend < friendList.length; friend++){

            var scoreDifference = 0;
            for(var scores = 0; scores < newFriend.scores.length; scores++){
                scoreDifference += (Math.abs(parseInt(friendList[friend].scores[scores]) - parseInt(newFriend[scores])));
            }

            differences.push(scoreDifference);
        }

        for(var item = 0; item < differences.length; item++)
        {
            if(differences[item] <= differences[bestFriend])
            {
                bestFriend = item;
            }            
        }

        friendList.push(req.body);
        res.json(friendList[bestFriend]);
    });
};
console.log("API Route Connected Successfully");

//link to friends data
const friendsData = require("./data/friends.js");

// api routes
function apiRoutes(app) {
  // a GET route
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  //a POST route
  app.post("/api/friends", function(req, res) {
    let newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      score: []
    };
    let scoreArray = [];
    for (var i = 0; i < req.body.scores.length; i++) {
      scoresArray.push(parseInt(req.body.scores[i]));
    }
    newFriend.scores = scoreArray;
    // cross check the new friend entry with the existing ones
    let scoreComparisionArray = [];
    for (var i = 0; i < friendsData.length; i++) {
      //check each friend's score
      let currentComparison = 0;
      for (var j = 0; j < newFriend.scores.length; j++) {
        currentComparison += Math.abs(
          newFriend.scores[j] - friendsData[i].scores[j]
        );
      }
      //push each comparison to array
      scoreComparisionArray.push(currentComparison);
    }
    //determine the best match
    let bestMatchPosition = 0;
    for (var i = 1; i < scoreComparisionArray.length; i++) {
      //lower number in comparison means better match
      if (
        scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]
      ) {
        bestMatchPosition = i;
      }
    }
    //if 2 friends have the same comparison then the newest entry in the friendsData array is chosen
    let bestFriendMatch = friendsData[bestMatchPosition];

    //reply with a JSON object of the best match
    res.json(bestFriendMatch);

    //push new friend to the friends data array for storage
    friendsData.push(newFriend);
  });
}

//export for use in main server.js file
module.exports = apiRoutes;

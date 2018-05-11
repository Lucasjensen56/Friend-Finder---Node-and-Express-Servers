// should include two routes
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic


var friendsData = require("../data/friends.js")


module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friendsData)
    // console.log(friendsData)
  });


  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware

    var newFriends = req.body;
    var friendsResponses = newFriends.scores;


    var matchName = '';
    var matchImage = '';
    var totalDifference = 1000;





  for (i = 0; i < friendsData.length; i++) {
      console.log("friend = " + JSON.stringify(friendsData[i]));

        var diff = 0;

        for (var j = 0; j < friendsResponses.length; j++) {
          diff += Math.abs(friendsData[i].scores[i] - friendsResponses[j]);
          // console.log("diff " + diff);
        }

      if (diff < totalDifference) {

              console.log('Closest match found = ' + diff);
              console.log('Friend name = ' + friendsData[i].name);
              console.log("friend's photo " + friendsData[i].photo)


              totalDifference = diff;
              matchName = friendsData[i].name;
              matchImage = friendsData[i].photo;

              console.log(matchName)

              console.log(matchImage)

            }



      }

      

      friendsData.push(newFriends);

      res.json(matchName);
      res.json(matchImage);


      // res.json({status: 'OK', matchName: matchName, matchImage: matchImage});


   
  });

}
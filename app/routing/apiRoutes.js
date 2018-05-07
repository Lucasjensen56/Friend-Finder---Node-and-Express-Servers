// should include two routes

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic

app.get("/api/friends", function(req, res) {
  resturn res.json(friends)
});



app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newSurveyResult = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newSurveyResult.routeName = newSurveyResult.name.replace(/\s+/g, "").toLowerCase();

  console.log(newSurveyResult);

  friends.push(newSurveyResult);

  res.json(newSurveyResult);
});
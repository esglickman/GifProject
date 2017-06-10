  


  var topics = ["Bench Press", "Squat", "Pull up", "Deadlift"];
  var apiKey = "&api_key=dc6zaTOxFJmzC"



  function displayWorkoutGif() {

        var topic = $(this).attr("swole-name");
      
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + apiKey;
        console.log(queryURL);

        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          console.log(queryURL);

          console.log(response);

         // respone.data[0].gif
          var gifHolder = $("<img>");
          var gifRating = $("<p>");
          //response.data.length
          for (i = 0; i < response.data.length; i++) {

          // Creates a div to hold the movie
          

          gifHolder.attr("src", response.data.type[i].images.fixed_height.url);

          // Retrieves the Rating data
          $("#showGif").prepend(gifHolder);

          console.log(gifHolder);

          }


          // Creates an element to have the rating displayed
          // Displays the rating
          // Retrieves the release year
          // Creates an element to hold the release year
          // Displays the release year
          // Retrieves the plot
          // Creates an element to hold the plot
          // Appends the plot
          // Creates an element to hold the image
          // Appends the image
          // Puts the entire Movie above the previous movies.
        });

      }

      function createButtons() {
        //deletes the rendered buttons --> will rewrite when going throuhg loop
        $("#buttons-view").empty();
        //the loop going through my topics
        for (var i = 0; i <topics.length; i++) {
          //creates begining and end tag for buttons
          var a = $("<button>");
          //add a class to later call
          a.addClass("swole");
          //adds a data-attribute that we can later call on
          a.attr("swole-name", topics[i]);
          //puts down the text on the button
          a.text(topics[i]);
          //adds the button on the selected div
          $("#buttons-view").append(a);
        }
      }

      $("#addButton").on("click", function(event) {
        event.preventDefault();

        var gifSearchVal =$("#gifInput").val().trim();

        topics.push(gifSearchVal);

        createButtons();
      });

      $(document).on("click", ".swole", displayWorkoutGif)

      createButtons();

      displayWorkoutGif();
// 450 - 590
// if the ball's left value is between these two values
// you've hit the ball
// else
// youve missed the ballx

$(init);

function init() {

  // first let bowler choose what speed to bowl. Listen for keypress on 3 keys
  var isPlayerOnesTurnAtBat = true;
  var player1Score = 0;
  var player2Score = 0;
        $("#reset").click(function(e) {
                console.log("come on , reset");
              })

      $(document).on('keydown', function(e){
          // console.log(e);

          switch(e.which){
            
            case 81: 
                      $('#ball').animate({
                        left: "570px"
                      }, 350 , handleMiss) // handleMiss gets run if the animation completes. 

            break;
            
            case 87:
                       $('#ball').animate({
                        left:"570px"
                       }, 800, handleMiss)
            break;
            
            case 69:
                      $('#ball') .animate({
                        left:"570px"
                      }, 1000 , handleMiss)         
            break;  

            case 32:
                      // $('#ball').animate({

                      // })                      

                      // the batsman has taken a swing. find out what his score was
                      // keep the game logic here
                      // probably want to stop the current animation too for the moment
                      // https://api.jquery.com/stop/

                      // get the batsman's score
                      var score = getScore();

                      // player got some runs
                      updateScores(score);

                      // next turn
                      nextBowl();

            break;      
          }
      });


     function nextBowl() {
      $('#ball') .animate({
      left:"0px"}

        // reset the ball to the start ( change the left position on the ball back to 0)


     )}

     function updateScores(score) {
      $(score).player1Score++;

        // player got some runs
        // update the current players score
        // tell the user how many runs they got
        // update the scoreboard on the screen
        alert("You got " + score + "run(s)!" + "finally you knobhead");

     }

     function handleMiss() {

        // player missed the ball
        // tell them they missed and laugh at them
        // time to swap players
        // reset the ball again
        alert('you missed dumbass');
        nextBowl();

     }
 

    function getScore () {
        
        // get the current location of the ball ( css left position ) and decide what score the batsman gets
        var ballPosition = parseInt($("#ball").css("left"));  

        // scoring - need to build these with an if statement and some comparisons
        // 0 - 384 - no runs for you
        // 385 - 449 - 2 runs
        // 450 - 469 - 6 runs
        // 470 - 509 - 4 runs
        // 510 - 559 - 1 run
        // 559 and over - bowled out

        if (ballPosition <= 384) { // this is good
           return 0;
        } else if (ballPosition <= 449) { // this is good
           alert ("Tricky , 2 runs!");
           return 2;
        } else if (ballPosition <= 469) { // this is good
           alert ("Great shot, 6 runs!!");
           return 6;
        } else if (ballPosition <= 509) { // this is good
           alert ("Well played , 4 runs!!");
           return 4;
        } else if (ballPosition <= 559 ) { // this is good
           alert (" Run, Run , Run...you got a single, that was close");
           return 1;
         } 

    }

 }


// var batsman=
// function bowler () {
//     var random = Math.random();
//     if (randomNumber < 0.33)  {return "spinner"; 
//       }
//       // add time out space bar with speed
//       else if (randomNumber < 0.66) {return "medium pacer ";
//       } // add time out space bar with speed
//       else {return "fast bowler";
//     }
//     };
//   bowler();
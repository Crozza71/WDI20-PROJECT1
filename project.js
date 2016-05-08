// 450 - 590
// if the ball's left value is between these two values
// you've hit the ball
// else
// youve missed the ballx

// first let bowler choose what speed to bowl. Listen for keypress on 3 keys

$(init);

function init() {

  
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
                      }, 350 , handleMiss) // key "q" .handleMiss gets run if the animation completes.  

            break;
            
            case 87:
                       $('#ball').animate({
                        left:"570px"
                       }, 800, handleMiss)
                       // key "w"
            break;
            
            case 69:
                      $('#ball') .animate({
                        left:"570px"
                      }, 1000 , handleMiss)
                      // key "e"         
            break;  

            case 32:
                    // $('#ball').animate({

                    // })  // the batsman has taken a swing. find out what his score was
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
        right:"570px"}, 1000 , handleMiss)
          // alert("clicked again");
     } 
      

      };
      //  if (ballPosition >= 560 ){

      //   alert (}" You're OUT!!!");

      //   else  {
      //     $('#ball') .animate({
      //                   left:"570px"
      //   };
      // }



        // reset the ball to the start ( change the left position on the ball back to 0)


     // 

     function updateScores(score) {$(score).player1Score++;

        alert("You got " + score + "run(s)!" + "finally you knobhead");

     }
     // player got some runs
             // update the current players score
             // tell the user how many runs they got
             // update the scoreboard on the screen

     function handleMiss() {

        // player missed the ball
        // tell them they missed and laugh at them
        // time to swap players
        // reset the ball again
        alert('you missed dumbass');
        nextBowl();

     }
 

    function getScore () {
        
        var ballPosition = parseInt($("#ball").css("left"));  

        if (ballPosition <= 384) { 
          alert ("That was rubbish!")
           return 0;
        } else if (ballPosition <= 449) { 
           alert ("Tricky , 2 runs!");
           return 2;
        } else if (ballPosition <= 469) { 
           alert ("Great shot, 6 runs!!");
           return 6;
        } else if (ballPosition <= 509) { 
           alert ("Well played , 4 runs!!");
           return 4;
        } else if (ballPosition <= 559 ) { 
           alert (" Run, Run , Run...you got a single, that was close");
           return 1;
         } 

    }

 
 // get the current location of the ball ( css left position ) and decide what score the batsman gets
         // scoring - need to build these with an if statement and some comparisons
         // 0 - 384 - no runs for you
         // 385 - 449 - 2 runs
         // 450 - 469 - 6 runs
         // 470 - 509 - 4 runs
         // 510 - 559 - 1 run
         // 559 and over - bowled out

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
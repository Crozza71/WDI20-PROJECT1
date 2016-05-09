// 450 - 590
// if the ball's left value is between these two values
// you've hit the ball
// else
// youve missed the ballx

$(init);

function init() {

  // first let bowler choose what speed to bowl. Listen for keypress on 3 keys
  var isPlayerOnesTurnAtBat = true;
  var innings = 4;
  var player1Score = 0;
  var player2Score = 0;
  var canHit = true;

  $("#reset").click(function(e) {})


  
  var $display = $('.display');
  var $playerOneScore = $('.playerOneScore');
  var $playerTwoScore = $('.playerTwoScore'); 

  $(document).on('keydown', function(e){
          // console.log(e);
          // $('#ball').stop(true);
          switch(e.which){

            case 81: 
            // key "q"

            $('#ball').animate({
              left: "560px"
                      }, 350 , handleMiss) 

            break;
            
            case 87:
            // key "w"
            $('#ball').animate({
              left:"560px"
            }, 800, handleMiss)
            break;
            
            case 69:
            // key "e"
            $('#ball') .animate({
              left:"560px"
            }, 1000 , handleMiss)         
            break;  

            case 32:
            // key "space"
                      
                      if (canHit) {
                          
                          $('#ball').stop(true);
                          var score = getScore();
                          updateScores(score);
                          nextBowl();
                          canHit = false;

                      }

                      break;      
                    }
                  });


  function nextBowl() {
    
    $('#ball') .animate({
      left:"0px"
    }, function() {
      canHit = true;
    })

  }

    function updateScores(score) {
      
      console.log(score);
      if (isPlayerOnesTurnAtBat) {
          player1Score += score;
          $playerOneScore.html(player1Score);
      } else {
        player2Score += score;
        $playerTwoScore.html(player2Score);
      }
        
    }

      function handleMiss() {


        isPlayerOnesTurnAtBat = !isPlayerOnesTurnAtBat;
        
        $display.html("TOO SLOW!!! UNLUCKY, EARLY SHOWER?");

        innings--;

        if ( innings == 0 ) {

          gameOver();
          // $('#ball').stop(true);

        } else {

          nextBowl();

        }

      }

       function gameOver() {

        $display.html("YOUR GAME IS OVER!!");

        

      }
      
      function getScore () {

        
        var ballPosition = parseInt($("#ball").css("left"));  

        // scoring - need to build these with an if statement and some comparisons
        // 0 - 384 - no runs for you
        // 385 - 449 - 2 runs
        // 450 - 469 - 6 runs
        // 470 - 509 - 4 runs
        // 510 - 559 - 1 run
        // 559 and over - bowled out

        if (ballPosition <= 384) { 
          $display.html("THAT WAS RUBBISH, COME ON, HAVE A GO !   NO ROCKS FOR THAT!")
         return 0;
        } else if (ballPosition <= 449) { 
         $display.html("TRICKY....YOU MIGHT AS WELL GET AN ICE CREAM , 2 ROCKS!");
         return 2;
        } else if (ballPosition <= 469) { 
         $display.html("GREAT SHOT, 5 ROCKS!!");
         return 5;
        } else if (ballPosition <= 509) { 
         $display.html("WELL PLAYED , 4 ROCKS!!");
         return 4;
        } else if (ballPosition <= 559 ) { 
         $display.html(" ...THAT WAS CLOSE, YOU GOT 1 ROCK!");
         return 1;
       } else {
          return 0;
       }

     }

   }



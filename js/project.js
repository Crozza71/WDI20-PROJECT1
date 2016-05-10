

$(init);

function init() {

  $('.fancybox-new-game').hide();

  $('.fancybox-welcome').fancybox().click();

  $('.fancybox-welcome button').click(function(e) {
    e.stopPropagation()
    $.fancybox.close();
 });


  var myAudio = new Audio('sound/bang.wav');
 
 
  var backAudio = new Audio('sound/robot.wav');
  backAudio.play();

  

  function loop() {
      var rand = Math.round(Math.random() * 10000) + 1000;
      setTimeout(function() {
              myAudio.play();
              loop();  
      }, rand);
  };
  loop();

  // first let bowler choose what speed to bowl. Listen for keypress on 3 keys
  var isPlayerOnesTurnAtBat = true;
  var innings = 4;
  var player1Score = 0;
  var player2Score = 0;
  var canHit = true;

  $("#reset").click(function(e) {})
 

  
  var $display = $('.screen');
  var $playerOneScore = $('.playerOneScore');
  var $playerTwoScore = $('.playerTwoScore'); 

  $(document).on('keydown', function(e){
          console.log(e);
          // $('#rock').stop(true);
          switch(e.which){

            case 81: 
            // key "q"

            $('#rock').animate({
              left: "560px"
                      }, 350 , handleMiss) 

            break;
            
            case 87:
            // key "w"
            $('#rock').animate({
              left:"560px"
            }, 500, handleMiss)
            break;
            
            case 69:
            // key "e"
            $('#rock') .animate({
              left:"560px"
            }, 800 , handleMiss)         
            break;  

            case 80:
            // key "p"
                      
                      if (canHit) {
                          
                          $('#rock').stop(true);
                          var score = getScore();
                          updateScores(score);
                          nextBowl();
                          canHit = false;

                      }

                      break;      
                    }
                  });


  function nextBowl() {
    
    $('#rock') .animate({
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

        canHit = false;

        if ( innings == 0 ) {

          gameOver();
          // $('#rock').stop(true);

        } else {

          nextBowl();

        }

      }

       function gameOver() {

        getScore();
       
        if (player1Score > player2Score){
          $display.html("YOUR GAME IS OVER!! <br>PLAYER 1 HAS WON!");    
        } else{
          $display.html("YOUR GAME IS OVER!! <br>PLAYER 2 HAS WON!");
        }

        $('.fancybox-new-game').fancybox().click();

         $('.fancybox-new-game button').click(function(e) {
           e.stopPropagation()
           //$.fancybox.close();
           location.reload();
        });

      }


      
      function getScore () {

        
        var ballPosition = parseInt($("#rock").css("left"));  

        
        if (ballPosition <= 384) { 
          $display.html("THAT WAS RUBBISH, COME ON, HAVE A GO !   NO ROCKS FOR THAT!")
         return 0;
        } else if (ballPosition <= 405) { 
         $display.html("TRICKY....YOU MIGHT AS WELL GET AN ICE CREAM , 2 ROCKS!");
         return 2;
        } else if (ballPosition <= 445) { 
         $display.html("GREAT SHOT, 3 ROCKS!!");
         return 3;
        } else if (ballPosition <= 485) { 
         $display.html("WELL PLAYED , 4 ROCKS!!");
         return 4;
        } else if (ballPosition <= 525 ) { 
         $display.html(" ...THAT WAS CLOSE, YOU GOT 5 ROCKS!");
         return 5;
       } else {
          return 0;
       }

     }

   }



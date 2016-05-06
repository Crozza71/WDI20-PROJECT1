// 450 - 590
// if the ball's left value is between these two values
// you've hit the ball
// else
// youve missed the ballx

$(init);

function init() {

  document.getElementById("batsman").addEventListener("click", function() {
    alert("I've been clicked too!");
          })
    
        }

        function test(thingtoprint){
          console.log("this speed should be" + thingtoprint)
        }

        

  $(document).on('keydown', function(e){
      // console.log(e);

      switch(e.which){
        case 81: 
                  $('#ball').animate({
                    left: "570px"
                  }, 500)

        break;
        case 87:
                   $('#ball').animate({
                    left:"570px"
                   }, 1200)
        break;
        case 69:
                  $('#ball') .animate({
                    left:"570px"
                  }, 1800)         
         break;  
         case 32:
                  checkScore();
         break;      
      }
  });

 function checkScore () {
        
        var score = parseInt($("#ball").css("left"));  
        console.log(score);


        getScore(score);

 }

 function getScore(score) {
      if (score <= 384){
      alert ("no run");
        } 
      else if (score <= 449) {
      alert ("Tricky , 2 runs!")
        }
      else if (score <= 469){
      alert ("Great shot, 6 runs!!");
        }
      else if (score <= 509) {
      alert ("Well played , 4 runs!!");
        }
      else if (score <= 559 ) {
      alert (" Run, Run , Run...you got a single, that was close");
        }
      else 
      { alert (" That was tough.....you got bowled, you are OUT!!!")}
        

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
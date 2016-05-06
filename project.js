$(init);

function init() {

  document.getElementById("bowler").addEventListener("click", function() {
    alert("I've been clicked!");
          })
  document.getElementById("batsman").addEventListener("click", function() {
    alert("I've been clicked too!");
          })
    
        }

        function test(thingtoprint){
          console.log("this speed should be" + thingtoprint)
        }

        var bowling = 10;

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
                   }, 1000)
        break;
        case 69:
                  $('#ball') .animate({
                    left:"570px"
                  }, 1500)         
         break;         
      }
  });


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
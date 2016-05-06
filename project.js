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

  $(document).on('keydown', function(e){
      // console.log(e);

      switch(e.which){
        case 81: 
                  test("q");
        break;
        case 87:
                   test("w");
        break;
        case 69:
                  test ("e")           
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
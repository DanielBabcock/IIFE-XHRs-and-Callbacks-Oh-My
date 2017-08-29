console.log("Predator.js");
// create request
// listen for load and error
// open and close
// send it

var Predator = (function (predator) {
    var carnivores = [];
    
    return {
      loadCarnivores: function (callbackToInvoke) {
        // create a request
        var loader = new XMLHttpRequest();
        // listen for 
        loader.addEventListener("load", function () {
          // Set the value of the private array
            // *A common use of JSON is to exchange data to/from a web server.
              // When receiving data from a web server, the data is always a string.
              // Parse the data with JSON.parse(), and the data becomes a 
              // JavaScript object.*
            // *responseText	get the response data as a string*
          carnivores = JSON.parse(this.responseText);
  
          // Invoke the callback function so that the caller knows
          // that the process is complete. Make sure to pass the 
          // carnivore array as an argument.
          callbackToInvoke(carnivores);
          // let callbackToInvoke
         
        });     
         // open and send:
         loader.open("GET", "json/preds.json");
         loader.send();   
      }
    }
  })(Predator || {});

// **********************Herbivores*******************
// *******************************************************

  var Predator = (function (predator) {
    var herbivores = [];
    
    
      predator.loadHerbivores = function (callbackToInvoke) {

        var loader = new XMLHttpRequest();

        loader.addEventListener("load", function () {
          
          herbivores = JSON.parse(this.responseText);
  

          callbackToInvoke(herbivores);
         
        });     

        loader.open("GET", "json/herbs.json");
         loader.send();   
      }
    return predator;
  })(Predator || {});
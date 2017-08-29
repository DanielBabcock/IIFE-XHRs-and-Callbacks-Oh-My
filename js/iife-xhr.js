let element = document.getElementById("animals");


function showCarnivores (carnivores) {
    carnivores.forEach(function(carnivore) {
      let predsCard = `<div class="animals">${carnivore.predator}</div>`
      element.innerHTML += predsCard;
    });
  console.log("carnivores: ", carnivores);
    
  }
  
  function showHerbivores (herbivores) {
    herbivores.forEach(function(herbivore){
      let herbsCard = `<div class="animals">${herbivore.herbivore}</div>`
      element.innerHTML += herbsCard;
    })
  console.log("herbivores", herbivores);
  }
  
  Predator.loadCarnivores(showCarnivores);
  Predator.loadHerbivores(showHerbivores);
console.log("slider actief");

// zoekt de slider in de 7e section
const track = document.querySelector('section:nth-of-type(7) .slider-afbeeldingen');

if (track) { // controleert of de slider bestaat
  const items = track.children; // pakt alle afbeeldingen in de slider
  let index = 0; // houdt bij welke afbeelding nu zichtbaar is
  let direction = 1; // richting van schuiven: 1 = vooruit en -1 = achteruit
  const gap = 330; // afstand in pixels tussen de afbeeldingen
  const speed = 2000; // tijd tussen schuiven in milliseconden (2 seconden)

  // herhaal de schuif-actie elke 2 seconden
  setInterval(function() {
    index = index + direction; // ga naar de volgende afbeelding

    if (index == items.length - 1) direction = -1; // als laatste afbeelding, ga terug
    if (index == 0) direction = 1; // als eerste afbeelding, ga vooruit

    // verplaatst de slider naar de juiste positie
    track.style.transform = "translateX(" + (index * -gap) + "px)";
  }, speed);
}





const track2 = document.querySelector('.tuinmeubelen main section:nth-of-type(6) .slider-afbeeldingen2');

if (track2) {
  const items = track2.children;
  let index = 0;
  let direction = 1;
  const gap = 326;
  const speed = 2000;

  setInterval(function() {
    index = index + direction;

    if (index == items.length - 1) direction = -1;
    if (index == 0) direction = 1;

    track2.style.transform = "translateX(" + (index * -gap) + "px)";
  }, speed);
}




// Zoekt de eerste section in de header (het hele zoekblok)
const zoekSectie = document.querySelector('header section:first-of-type');

// Zoekt het inputveld in die section
const zoekInput = zoekSectie.querySelector('input[type="search"]');

// Functie die de shake-animatie start
function shake() {
  zoekSectie.classList.add('shake'); // voegt klasse 'shake' toe zodat het blok gaat schudden
  setTimeout(function() { 
    zoekSectie.classList.remove('shake'); // verwijdert 'shake' na 2 seconden zodat het stopt
  }, 2000);
}

// Laat de shake elke 7 seconden gebeuren
let shakeInterval = setInterval(shake, 7000);

// Stopt de shake wanneer iemand in het inputveld klikt (focus)
zoekInput.addEventListener('focus', function() { 
  clearInterval(shakeInterval); // stop het interval zodat het niet blijft schudden
  zoekSectie.classList.remove('shake'); // verwijdert lopende shake als het is aangeklikt
});

// Start de shake weer wanneer iemand het inputveld weer verlaat (blur)
zoekInput.addEventListener('blur', function() { 
  shakeInterval = setInterval(shake, 7000); // zet interval weer aan zodat het elke 7 seconden weer schudt
});





// Menu knop (Eerste img in header)
const menuKnop = document.querySelector('header nav a:first-of-type img');
const mainNav = document.querySelector('main nav:first-of-type');

// Opent menu
menuKnop.addEventListener('click', function(openen){
  openen.preventDefault();
  mainNav.classList.toggle('open');
});

// Kruis img sluit menu
const kruis = mainNav.querySelector('img');
kruis.addEventListener('click', function(){
  mainNav.classList.remove('open');
});


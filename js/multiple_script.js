// Define a constructor function template for hotels
function Gym(name, time, contact) {
    // Object properties
    this.name = name;
    this.time = time;
    this.contact = contact;
    this.checkAvailablity = function() {
        return this.time - this.contact;
    };
}

// Define to instances of the hotel and their arguments
var corkGym = new Gym('Cork', 'Everyday from 8 am to 9 pm.','085 987 6537');
var limerickGym = new Gym('Limerick', 'Monday to Saturday, from 9 am to 7 pm.', '083 645 7324' );

// Declare a variable to hold the name of the hotel and room availability 
var details1 = corkGym.name;
    // add content to an existing variable----
    details1 += corkGym.checkAvailablity();
// Get the hotel1 div
var elGym1 = document.getElementById('gym1');
// Add the variables created onto the empty div
elGym1.textContent = details1;

var details2 = limerickGym.name;
    details2 += limerickGym.checkAvailablity();
var elGym2 = document.getElementById('gym2');
elGym2.textContent = details2;


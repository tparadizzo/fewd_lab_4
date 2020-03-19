function Gym(name, time, contact){
    this.name = name;
    this.time = time;
    this.contact = contact;
    this.checkAvailablity = function(){
        return this.time - this.contact;
    };
}

var corkGym = new Gym('Cork', 'Everyday from 8 am to 9 pm.','085 987 6537');
var limerickGym = new Gym('Limerick', 'Monday to Saturday, from 9 am to 7 pm.', '083 645 7324' )

console.log(corkGym, limerickGym);
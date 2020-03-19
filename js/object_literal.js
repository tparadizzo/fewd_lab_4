var gym = {
    // Object properties
    name: 'Cork',
    time: 'Everyday from 8 am to 9 pm.',
    contact: '085 987 6537',
    gym: true,
    checkAvailablity: function() {
        return this.time - this.contact;
    }
};

var gymName = gym.name;
var timeFree = gym.checkAvailablity();

var gymName = gym['name'];

console.log(gym['name']);
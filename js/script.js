var hotel = {
    // Object properties
    name: 'Cork',
    time: 'Everyday from 8 am to 9 pm.',
    contact: '085 987 6537',
    gym: true,
    checkAvailablity: function() {
        return this.time - this.contact;
    }
};

var elName = document.getElementById('gymName');
elName.textContent = gym.name;

var elTime = document.getElementById('time');
elTime.textContent = gym.checkAvailablity();


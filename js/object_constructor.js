var gym = new Object();

gym.name = 'Cork';
gym.time = 'Everyday from 8 am to 9 pm.';
gym.contact = '085 987 6537';
gym.checkAvailablity = function(){
    return this.time - this.contact;
};


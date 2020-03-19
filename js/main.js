var gym = {
  name : 'Limerick',
  time : 'Monday to Saturday, from 9 am to 7 pm.',
  contact : '083 645 7324'
};

gym.sauna= true;
gym.pool = false;

var elName = document.getElementById('gymName'); 
elName.textContent = gym.name;                   

var elPool = document.getElementById('pool');      
elPool.className = gym.pool;                     

var elSauna = document.getElementById('sauna');        
elSauna.className = gym.sauna;                      

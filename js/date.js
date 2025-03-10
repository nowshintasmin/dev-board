function updateDay(){
    let currentDay = new Date();
    let day = currentDay.toLocaleString('default',{weekday:"short"}).toString();
    let symble = ',';
    
    const dayString = `${day} ${symble}`;
    document.getElementById('day').innerText = dayString;
  }
  setInterval(updateDay, 1000);


function updateTime() {
    const currentTime = new Date();
    
    let fullTime = currentTime.toLocaleTimeString().toString().padStart(2, '0');
    let date = currentTime.toLocaleDateString().toString();

    
    const timeString = `${fullTime}`;
    
    document.getElementById('time').innerText = timeString;
  }

  // Update time every second
  setInterval(updateTime, 1000);
  
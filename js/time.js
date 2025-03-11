function updateTime() {
  const currentTime = new Date();
  
  let fullTime = currentTime.toLocaleTimeString().toString().padStart(2, '0');
  

  
  const timeString = `${fullTime}`;
  
  document.getElementById('time').innerText = timeString;
}

// Update time every second
setInterval(updateTime, 1000);
  
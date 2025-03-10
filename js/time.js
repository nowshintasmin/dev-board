function updateDate(){
    let currentDate = new Date();
    let years = currentDate.toLocaleString('default',{year:"numeric"}).toString();
    let months = currentDate.toLocaleString('default',{month:"short"}).toString();
    let date = currentDate.toLocaleString('default', {day:"numeric"}).toString();
    
    const dateSring =`${months}:${date}:${years}`;
    document.getElementById('date').innerText= dateSring;
    
  }
  setInterval(updateDate, 1000);
  
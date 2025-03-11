    //1st card

    let taskCnt = document.getElementById('task');
    let numCnt = document.getElementById('num');
    let button = document.getElementById('ShopEase');
    
    
    button.addEventListener('click',() => {
        let taskCntNum = parseInt(taskCnt.innerText);
        let crntTask = taskCntNum - 1;
        taskCnt.innerText = crntTask;

        alert('Board updated Successfully');

        button.setAttribute('disabled', true);

        let numCntNumber = parseInt(numCnt.innerText);
        let crntNumCnt = numCntNumber + 1;
        numCnt.innerText = crntNumCnt;
        
        const p = document.createElement('p');
        const currentTime = new Date().toLocaleTimeString().toString().padStart(2, 0);
        p.textContent = `You have Complete The Task Fix Mobile Button Issue at ${currentTime}`;

        document.getElementById('msg').append(p);

        p.style.fontSize = '16px';        
        p.style.color = '#000000';           
        p.style.fontFamily = "Poppins", 'sans-serif'; 
        p.style.backgroundColor = '#F4F7FF'; 
        p.style.padding = '10px';
        p.style.borderRadius = '8px';
        p.style.fontWeight = 'normal';
        p.style.marginTop = '15px';


    });

    //2nd card 

    let buttonTow = document.getElementById('CloudSync');

    buttonTow.addEventListener('click',() =>{
        let taskCntNum = parseInt(taskCnt.innerText);
        let crntTask = taskCntNum - 1;
        taskCnt.innerText = crntTask;

        alert('Board updated Successfully');

        buttonTow.setAttribute('disabled', true);

        let numCntNumber = parseInt(numCnt.innerText);
        let crntNumCnt = numCntNumber + 1;
        numCnt.innerText = crntNumCnt;


        const p = document.createElement('p');
        const currentTime = new Date().toLocaleTimeString().toString().padStart(2, 0);
        p.textContent = `You have Complete The Task Add Dark Mode at ${currentTime}`;

        document.getElementById('msg').append(p);

        p.style.fontSize = '16px';        
        p.style.color = '#000000';           
        p.style.fontFamily = "Poppins", 'sans-serif'; 
        p.style.backgroundColor = '#F4F7FF'; 
        p.style.padding = '10px';
        p.style.borderRadius = '8px';
        p.style.fontWeight = 'normal';
        p.style.marginTop = '15px';

    });
    //3rd card

    let buttonThree = document.getElementById('SwiftPay');

    buttonThree.addEventListener('click',() =>{
        let taskCntNum = parseInt(taskCnt.innerText);
        let crntTask = taskCntNum - 1;
        taskCnt.innerText = crntTask;

        alert('Board updated Successfully');

        buttonThree.setAttribute('disabled', true);

        let numCntNumber = parseInt(numCnt.innerText);
        let crntNumCnt = numCntNumber + 1;
        numCnt.innerText = crntNumCnt;


        const p = document.createElement('p');
        const currentTime = new Date().toLocaleTimeString().toString().padStart(2, 0);
        p.textContent = `You have Complete The Task Optimize  Home page at ${currentTime}`;

        document.getElementById('msg').append(p);

        p.style.fontSize = '16px';        
        p.style.color = '#000000';           
        p.style.fontFamily = "Poppins", 'sans-serif'; 
        p.style.backgroundColor = '#F4F7FF'; 
        p.style.padding = '10px';
        p.style.borderRadius = '8px';
        p.style.fontWeight = 'normal';
        p.style.marginTop = '15px';

    });

    //4th card

    let buttonFour = document.getElementById('Meta');

    buttonFour.addEventListener('click',() =>{
        let taskCntNum = parseInt(taskCnt.innerText);
        let crntTask = taskCntNum - 1;
        taskCnt.innerText = crntTask;

        alert('Board updated Successfully');

        buttonFour.setAttribute('disabled', true);

        let numCntNumber = parseInt(numCnt.innerText);
        let crntNumCnt = numCntNumber + 1;
        numCnt.innerText = crntNumCnt;


        const p = document.createElement('p');
        const currentTime = new Date().toLocaleTimeString().toString().padStart(2, 0);
        p.textContent = `You have Complete The Task Add new emoji 🤲 at ${currentTime}`;

        document.getElementById('msg').append(p);

        p.style.fontSize = '16px';        
        p.style.color = '#000000';           
        p.style.fontFamily = "Poppins", 'sans-serif'; 
        p.style.backgroundColor = '#F4F7FF'; 
        p.style.padding = '10px';
        p.style.borderRadius = '8px';
        p.style.fontWeight = 'normal';
        p.style.marginTop = '15px';

    });

    //5th card

    let buttonFive = document.getElementById('Google-LLC');

    buttonFive.addEventListener('click',() =>{
        let taskCntNum = parseInt(taskCnt.innerText);
        let crntTask = taskCntNum - 1;
        taskCnt.innerText = crntTask;

        alert('Board updated Successfully');

        buttonFive.setAttribute('disabled', true);

        let numCntNumber = parseInt(numCnt.innerText);
        let crntNumCnt = numCntNumber + 1;
        numCnt.innerText = crntNumCnt;


        const p = document.createElement('p');
        const currentTime = new Date().toLocaleTimeString().toString().padStart(2, 0);
        p.textContent = `You have Complete The Task Add Integrate OpenAI API at ${currentTime}`;

        document.getElementById('msg').append(p);

        p.style.fontSize = '16px';        
        p.style.color = '#000000';           
        p.style.fontFamily = "Poppins", 'sans-serif'; 
        p.style.backgroundColor = '#F4F7FF'; 
        p.style.padding = '10px';
        p.style.borderRadius = '8px';
        p.style.fontWeight = 'normal';
        p.style.marginTop = '15px';

    });

    //6th card

    let buttonSix = document.getElementById('Glassdoar');

    buttonSix.addEventListener('click',() =>{
        let taskCntNum = parseInt(taskCnt.innerText);
        let crntTask = taskCntNum - 1;
        taskCnt.innerText = crntTask;

        alert('Board updated Successfully');
        alert('congrates!!! You have completed all the current task');

        buttonSix.setAttribute('disabled', true);

        let numCntNumber = parseInt(numCnt.innerText);
        let crntNumCnt = numCntNumber + 1;
        numCnt.innerText = crntNumCnt;


        const p = document.createElement('p');
        const currentTime = new Date().toLocaleTimeString().toString().padStart(2, 0);
        p.textContent = `You have Complete The Task Improve Job searching at ${currentTime}`;

        document.getElementById('msg').append(p);

        p.style.fontSize = '16px';        
        p.style.color = '#000000';           
        p.style.fontFamily = "Poppins", 'sans-serif'; 
        p.style.backgroundColor = '#F4F7FF'; 
        p.style.padding = '10px';
        p.style.borderRadius = '8px';
        p.style.fontWeight = 'normal';
        p.style.marginTop = '15px';

    });

    let clearBtn = document.getElementById('clr-btn');
    let inMsg = document.getElementById('msg');

    clearBtn.addEventListener('click',()=>{
        inMsg.innerHTML="";
    });

    


    
    
    
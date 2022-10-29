document.querySelector('.services-link').addEventListener('click',()=>{
    document.querySelector('.services').classList.toggle('active');
    

})


document.querySelectorAll('.navBar .navLinks .navLink').forEach(e=>{

    e.addEventListener('click',()=>{
        document.querySelectorAll('.navBar .navLinks .navLink').forEach(e=>{
            e.classList.remove('active');
        })
        e.classList.toggle('active');
    });
})

//burger icon
document.querySelector('.nav-burger').addEventListener('click',()=>{
    document.querySelector('.nav-burger').classList.toggle('active');
    document.querySelector('.navLinks').classList.toggle('active');
    
})


let services=document.querySelectorAll('.service');
window.addEventListener('scroll',()=>{

    if(window.scrollY > services[0].offsetTop - 200){
        services.forEach(service=>{
            service.style.opacity='1';
        })
    }else{
        services.forEach(service=>{
            service.style.opacity='0';
        })
    }
})

//random background
let mainSection=document.querySelector('.mainSection');
let background=['images/AdobeStock_277131078.png','images/map.jpg'];
let info=document.querySelector('.mainSection .info');
let infoH=document.querySelector('.mainSection .info h2');
let infoHText=infoH.getAttribute('data-text');
let infoP=document.querySelectorAll('.mainSection .info p');
let infoPText=infoP[0].getAttribute('data-text');
let infoPTextTwo=infoP[1].getAttribute('data-text');
let infoPTextThree;
if(infoP.length > 2){
    infoPTextThree=infoP[2].getAttribute('data-text');
}
let i=0;
let j=0;
let y=0;
let z=0;
let random=Math.floor(Math.random()*background.length);
function randomizeBackground(random){
    //main section writer
    
        interval=setInterval(()=>{
    //get random number

    //change background image url
    mainSection.style.backgroundImage=`url(${background[random]})`
    if(random==0){
        info.style.display='block';
    }else{
        infoH.style.display='none';
        infoP[0].style.display='none';
        infoP[1].style.display='none';
        if(infoP.length>2){
            infoP[2].style.display='block';
            if(z<infoPTextThree.length){
                infoP[2].textContent+=infoPTextThree[z];
                z++;
            }
        }

    }
}   ,1000)}

// window.addEventListener('load',()=>{
//     setTimeout(()=>{
//         info.style.left='50%';
//     },200)
// })
//type writer effect
setInterval(()=>{
    if(i<infoHText.length){
        infoH.textContent+=infoHText[i];
        i++;
    }else{
    if(j<infoPText.length){
        infoP[0].textContent+=infoPText[j];
        j++;
    }else{
        if(y<infoPTextTwo.length){
            infoP[1].textContent+=infoPTextTwo[y];
            y++;
    }else{
        randomizeBackground(1);
    }
    }
    }
},65)




// advice section type writer






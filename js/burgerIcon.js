//open burger icon
document.querySelector('.nav-burger').addEventListener('click',()=>{
    document.querySelector('.nav-burger').classList.toggle('active');
    document.querySelector('.navLinks').classList.toggle('active');
    
})
//show services menu
document.querySelector('.services-link').addEventListener('click',()=>{
    document.querySelector('.services').classList.toggle('active');
})
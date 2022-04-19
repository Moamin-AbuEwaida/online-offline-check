const title = document.querySelector('.title');
const ul = document.querySelector('ul');
const reload = document.querySelector('.reload');


const online = ()=>{
    title.innerHTML = 'Online now';
    title.style.color= 'green';
    ul.classList.add('hide');
    reload.classList.add('hide');
};

const offline = ()=>{
    title.innerHTML = 'Offline now';
    title.style.color = '#666';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
};

reload.onclick = function () {
    window.location.reload();
}
window.onload= function(){
    if(window.navigator.onLine){
        online();
    } else {
        offline();
    }
};

window.addEventListener('online', ()=>online());
window.addEventListener('offline', ()=>offline());

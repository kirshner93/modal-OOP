// let btnLogin = document.querySelector('.btn-login').addEventListener('click', openModal);
// let wraper = document.querySelector('.wraper')
// let close = document.querySelector('.close').addEventListener('click', openModal)

// function openModal (e) {
    
//     wraper.classList.toggle('open');

//     if(wraper.classList.contains('open')){
//         addModal();
        
//     } else{
//         removeModal();
//     }
    
// }
// function addModal() {
    
//     document.addEventListener('keydown', handleClick)
//     document.addEventListener('click', handleClick)
// }

// function removeModal(e) {
    
//     document.removeEventListener('keydown', handleClick)
//     document.removeEventListener('click', handleClick)
// }


// function handleClick(e) {
//     console.log(e.target)
//     if(e.key === 'Escape' || e.target === wraper){
    
//         openModal()
//     }
// }


document.querySelector('.btn-login').addEventListener('click', ()=> {new Modal()})
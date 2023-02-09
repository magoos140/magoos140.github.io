(function(){
    const openButton = document.getElementById('contacto');
    const modal_container = document.querySelector('.modal');
    const closeMenu = document.querySelector('.modal__close');

    openButton.addEventListener('click', ()=>{
        modal_container.classList.add('modal__show');
    });

    closeMenu.addEventListener('click', ()=>{
        modal_container.classList.remove('modal__show');
    });

})();
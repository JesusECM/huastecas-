const openModal = document.querySelector('.btn_mision');
const Modal = document.querySelector('.modal_mision');
const closeModal = document.querySelector('.modal_close');

openModal.addEventListener('click', (e)=>{
	e.preventDefault();
	Modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
	e.preventDefault();
	Modal.classList.remove('modal--show');
});

const openModal2 = document.querySelector('.btn_vision');
const Modal2 = document.querySelector('.modal_vision');
const closeModal2 = document.querySelector('.modal_close2');

openModal2.addEventListener('click', (e)=>{
	e.preventDefault();
	Modal2.classList.add('modal--show');
});

closeModal2.addEventListener('click', (e)=>{
	e.preventDefault();
	Modal2.classList.remove('modal--show');
});

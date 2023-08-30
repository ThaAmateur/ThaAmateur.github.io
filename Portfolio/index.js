let contrastToggle = false;
const scaleFactor = 1 /20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const booleanInt = isOdd ? -1: 1;
        shapes[i].style.transform = `translate(${x * booleanInt}px, ${y*booleanInt}px)`
    }

}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme";
    }
    else {
        document.body.classList.remove('dark-theme');
    }
}

function contact(event) {
    event.preventDefault();
    
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    
    emailjs
        .sendForm(
            'service_dcj2s1o',
            'template_hq0373g',
            event.target,
            'NEl7QUXwVl9O3SkC4'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible');
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible');
        alert(
            "The email service is temporarily unavaliable. Please contact me at asimhoskins02@gmail.com"
        );
    })
}

let isModalOpen = false;

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}
const menu_icon = document.getElementById("menu_icon");
const menu = document.getElementById("menu");
const icon = menu_icon.querySelector('i');

menu_icon.addEventListener('click', () => {
    menu.classList.toggle('active');
    
    if (icon.classList.contains('fa-bars')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
});



const links = document.querySelectorAll('.menu a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 64,
            behavior: 'smooth'
        });
    });
});



    // const toggleBtn = document.getElementById('toggle_btn');
    // const body = document.body;
    
    // toggleBtn.addEventListener('click', () => {
    //     body.classList.toggle('dark-mode');
    //     if (body.classList.contains('dark-mode')) {
    //         toggleBtn.textContent = '☀️';
    //     } else {
    //         toggleBtn.textContent = '🌙';
    //     }
    // });


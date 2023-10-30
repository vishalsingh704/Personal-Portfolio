let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.Navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections  = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // sections.foreach(sec=>{
    //     let top=window.scrollY;
    //     let offset=sec.offsetTop - 100;
    //     let height=sec.offsetHeight;
    //     let id=sec.getAttribute('id');

    //     if(top >= offset && top < offset + height){
    //         navLinks.foreach(links=>{
    //             links.classList.remove(active);
    //             document.querySelector('header nav a[href*='+id+']').classList.add('active');

    //         });
    //     }
    // });

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
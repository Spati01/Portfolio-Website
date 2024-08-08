/*===================== toggle icon navbar =======================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*===================== scroll sections active link =======================*/

let selctions = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    selctions.forEach(sec =>{
let top = window.scrollY;
let offset = sec.offsetTop-150;
let height = sec.offsetHeight;
let id = sec.getAttribute('id');

if(top >= offset && top < offset + height){
    navLinks.forEach(links =>{
      links.classList.remove('active');
      document.querySelector('header nav a[href*=' + id +']').classList.add('active');

    });
};
    });

    /*===================== sticky navbar =======================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

     
  /*===================== remove taggle icon and navbar when click navbar link =======================*/

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};
/*===================== Scroll Reveal =======================*/
ScrollReveal({ 
    //reset: true,
   distance:'80px',
   duration:2000,
   delay:200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container, .portfolio-box, .contact form ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*===================== Typed JS =======================*/
const typed = new Typed('.multiple-text',{
  strings:['Web Application Developer<🧑‍💻>','Java Developer<🖥️>'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});

const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');



function sendEmail(){

const bodyMessage = `Full Name : ${fullName.value} <br> Email: ${email.value}<br> Phone Number: ${phone.value}<br>
   Message: ${message.value}`;

    Email.send({
      SecureToken: "2b7c71c9-9e2a-4ef6-8dd5-64542fbf419d",
        To : 'subhadippati30@gmail.com',
        From : "subhadippati30@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message=="OK"){
            Swal.fire({
                title: "Success!",
                text: "Message send successfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".item");
    for(const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
   if(items[1].value != ""){
    checkEmail();
   }
   items[1].addEventListener("keyup", ()=>{
  checkEmail();

   });

        item.addEventListener("keyup",() =>{
           if(item.value != ""){
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
           }else{
            item.classList.add("error");
            item.parentElement.classList.add("error");
           }
        });
    }
}
function checkEmail(){
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
const errorTexEmail = document.querySelector(".error-text.email")
  if(!email.value.match(emailRegex)){
    email.classList.add("error");
    email.parentElement.classList.add("error");
    
    if(email.value != ""){
      errorTexEmail.innerText = "Enter a valid email address";
    }else{
      errorTexEmail.innerText = "Email address can't be blank";
    }
  }else{
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }

}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains("error")  && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error") ){
      sendEmail();

      form.reset();
      return false;
    }
});


























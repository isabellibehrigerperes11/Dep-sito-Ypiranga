const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el)=>observer.observe(el));
<section class="vantagens hidden">
  <section class="numeros hidden">
  <section class="sobre-home hidden">
.hidden{

opacity:0;

transform:translateY(60px);

transition:all .8s ease;

}

.show{

opacity:1;

transform:translateY(0);


  <script src="assets/js/animations.js"></script>
.whatsapp{

position:fixed;

bottom:30px;

right:30px;

width:65px;

height:65px;

background:#25D366;

border-radius:50%;

display:flex;

justify-content:center;

align-items:center;

box-shadow:0 15px 30px rgba(0,0,0,.25);

transition:.3s;

z-index:999;

}

.whatsapp:hover{

transform:scale(1.12);

  background-image:

radial-gradient(circle at top right,
rgba(43,47,135,.15),
transparent 40%),

linear-gradient(
120deg,
#ffffff,
#eef5ff);

}
  
  

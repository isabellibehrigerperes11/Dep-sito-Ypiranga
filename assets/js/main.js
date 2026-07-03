window.addEventListener("scroll", function(){

const header=document.querySelector("header");

if(window.scrollY>50){

header.classList.add("scroll");

}else{

header.classList.remove("scroll");

}

});
header{

transition:.4s;

}

header.scroll{

background:white;

box-shadow:0 8px 20px rgba(0,0,0,.08);

}
<script src="assets/js/main.js"></script>

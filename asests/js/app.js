const body = document.querySelector("body");
const btnTheme = document.getElementById("theme-dark");

btnTheme.addEventListener("click",()=>{
  body.classList.toggle("dark-theme");
  store(body.classList.contains('dark-theme'))
});

load();
function load(){
  const darkMode = localStorage.getItem("dark-theme");
  const btn = document.querySelector(".btn");
  if(!darkMode){
    store('false');
  }else if(darkMode == 'true'){
    body.classList.add("dark-theme");
      let chek = document.getElementById("switch");
      let checked = JSON.parse(localStorage.getItem("switch"));
      document.getElementById("switch").checked = checked;
  };
};

function store(value){
  localStorage.setItem('dark-theme',value);
  localStorage.setItem("switch",value);
};

let photoResult = document.getElementById("photo-result");
let photos = document.querySelectorAll(".img");

for (let photo of photos){
  photo.addEventListener("click",()=>{
    photoResult.src = photo.src;
  });
};

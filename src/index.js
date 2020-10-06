// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

document.querySelector('.collapse-btn').addEventListener("click",(event)=>{
  event.currentTarget.classList.toggle("change");
  document.querySelector('.mobile .navbar').classList.toggle("dn");
  document.querySelector('.mobile .navbar').classList.toggle("db");
})
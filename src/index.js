// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

document.querySelector('.collapse-btn').addEventListener("click",(event)=>{
  event.currentTarget.classList.toggle("change");
  document.querySelector('.mobile .navbar').classList.toggle("dn");
  document.querySelector('.mobile .navbar').classList.toggle("db");
})

if (document.querySelector("#faq_form")){
  const faqs_list = document.querySelector("#faqs_list");
  document.querySelectorAll('#faqs_list .toggle_faq').forEach(el => el.addEventListener("click", (event) =>{
    event.preventDefault();
    ToggleFAQ(el.parentElement)
  }))
  document.querySelector("#faq_form").addEventListener("submit",(event)=>{
    event.preventDefault();
    const faq_query = event.currentTarget.faq_query.value;
    const faq_query_regex = RegExp(faq_query, 'i');
    CollapseFAQ();
    if (faq_query){
      console.log("faq form", faq_query, faqs_list, faqs_list.childNodes);
      // .faq_answer, .faq_question
      document.querySelectorAll('.faq_answer').forEach((e, k, p) => {
        console.log(e.textContent, faq_query_regex.test(e.textContent));
        if (faq_query_regex.test(e.textContent)){
          // document.querySelector("p").closest(".near.ancestor")
          console.log(e.closest(".faq_container"));
          ToggleFAQ(e.closest(".faq_container"))
        }

      })
    }
  })
}

function ExpandFAQ() {
  document.querySelectorAll('.faq_answer').forEach(el => {
    el.classList.remove('dn');
  })
  document.querySelectorAll('.expand').forEach(el => {
    el.classList.add('dn');
  })
  document.querySelectorAll('.collapse').forEach(el => {
    el.classList.remove('dn');
  })
}
function CollapseFAQ() {
  document.querySelectorAll('.faq_answer').forEach(el => {
    el.classList.add('dn');
  })
  document.querySelectorAll('.expand').forEach(el => {
    el.classList.remove('dn');
  })
  document.querySelectorAll('.collapse').forEach(el => {
    el.classList.add('dn');
  })
}
function ToggleFAQ(faq_container){
  faq_container.querySelector('.faq_answer').classList.toggle("dn");
  faq_container.querySelector('.expand').classList.toggle("dn");
  faq_container.querySelector('.collapse').classList.toggle("dn");
}
// for old browsers maybe??
// function findAncestor(el, sel) {
//   while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el, sel)));
//   return el;
// }
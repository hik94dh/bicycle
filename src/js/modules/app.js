const tab = document.querySelector(".tab");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");

const block = document.querySelector(".bicycle-accessories");
const block2 = document.querySelector(".bicycle-equipment");
const block3 = document.querySelector(".bicycle-parts");

tab.addEventListener("click", function(event){
    console.log('tab');
    tab2.classList.remove("active-b");
    tab3.classList.remove("active-b");
    tab.classList.add("active-b");
    block2.classList.add("none");
    block3.classList.add("none");
    block.classList.remove("none");
});

tab2.addEventListener("click", function(event){
    console.log('tab2');
    tab.classList.remove("active-b");
    tab3.classList.remove("active-b");
    tab2.classList.add("active-b");
    block.classList.add("none");
    block3.classList.add("none");
    block2.classList.remove("none");
});

tab3.addEventListener("click", function(event){
    console.log('tab3');
    tab.classList.remove("active-b");
    tab2.classList.remove("active-b");
    tab3.classList.add("active-b");
    block.classList.add("none");
    block2.classList.add("none");
    block3.classList.remove("none");
});



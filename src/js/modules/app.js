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


function pushStateToDataLayerLogo(event) {
    return function(label, location) {
            dataLayer.push({
                    'event':'OWOX',
                    'eventCategory': 'Interactions',
                    'eventAction': 'click',
                    'eventLabel': label,
                    'eventContent': event.target.innerHTML.trim(),
                    'eventLocation': location
            });
            console.log('click logo');
    }
};

function pushStateToDataLayerUlmart(event) {
    return function(label, location) {
            dataLayer.push({
                    'event':'OWOX',
                    'eventCategory': 'Interactions',
                    'eventAction': 'click',
                    'eventLabel': label,
                    'eventContent': event.target.innerHTML.trim(),
                    'eventLocation': location
            });
            console.log('click go to Ulmart');
    }
};

function pushStateToDataLayerSelectProduct(event) {
    return function(label, location, id) {
            dataLayer.push({
                    'event':'OWOX',
                    'eventCategory': 'Interactions',
                    'eventAction': 'click',
                    'eventLabel': label,
                    'eventContent': event.target.innerHTML.trim(),
                    'eventLocation': location,
                    'eventContext': id
            });
            console.log('click to SelectProduct');
    }
};

function pushStateToDataLayerProductSlider(event) {
    return function(label, location) {
            dataLayer.push({
                    'event':'OWOX',
                    'eventCategory': 'Interactions',
                    'eventAction': 'click',
                    'eventLabel': label,
                    'eventContent': event.target.innerHTML.trim(),
                    'eventLocation': location
            });
            console.log('click to ProductSlider');
    }
};

function pushStateToDataLayerCategory(event) {
    return function(label, location) {
            dataLayer.push({
                    'event':'OWOX',
                    'eventCategory': 'Interactions',
                    'eventAction': 'click',
                    'eventLabel': label,
                    'eventContent': event.target.innerHTML.trim(),
                    'eventLocation': location
            });
            console.log('click to Category');
    }
};

function pushStateToDataLayerHelpSelection(event) {
    return function(label, location) {
            dataLayer.push({
                    'event':'OWOX',
                    'eventCategory': 'Interactions',
                    'eventAction': 'click',
                    'eventLabel': label,
                    'eventContent': event.target.innerHTML.trim(),
                    'eventLocation': location
            });
            console.log('click to HelpSelection');
    }
};

function pushStateToDataLayerClickAdvice(event) {
    return function(label, location) {
            dataLayer.push({
                    'event':'OWOX',
                    'eventCategory': 'Interactions',
                    'eventAction': 'click',
                    'eventLabel': label,
                    'eventContent': event.target.innerHTML.trim(),
                    'eventLocation': location
            });
            console.log('click to ClickAdvice');
    }
};
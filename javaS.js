
/*code for displaying dot menu on index page*/
const dotIcon = document.querySelector(".dotIcon");
const dotMenu = document.querySelector(".navDot-menu");

if (dotIcon && dotMenu) {
    dotIcon.addEventListener("click", () => {
        dotIcon.classList.toggle("active");
        dotMenu.classList.toggle("active");
    });

    document.querySelectorAll(".dotLink").forEach(n => n.addEventListener("click", ()=>{
        dotIcon.classList.remove("active");
        dotMenu.classList.remove("active");
    }));
}

/*code for displaying hamburger menu on mobile versions*/
const Hamburger  = document.querySelector(".hamburger");
const hamMenu = document.querySelector(".navHam-menu");

if (Hamburger && hamMenu) {
    Hamburger.addEventListener("click", () => {
        Hamburger.classList.toggle("active");
        hamMenu.classList.toggle("active");
    });

    document.querySelectorAll(".hamLink").forEach(n => n.addEventListener("click", ()=>{
        Hamburger.classList.remove("active");
        hamMenu.classList.remove("active");
    }));
}

/*feature 1 - notification*/
window.onload = function() {
    if(document.title == "Dhruvi Shah - Software Developer" || document.title == "Index"){
        // Removed alert for cleaner experience
    }
 }

 /*feature 3 - color changer for all pages except the index page*/
if(document.title !== "Index"){
    const colorBtn1 = document.querySelector('#colorBtn1');
 const colorBtn2 = document.querySelector('#colorBtn2');
 const colorBtn3 = document.querySelector('#colorBtn3');

 const body = document.querySelector('body');
 const nav = document.querySelector('.navigationOTHER');
 const text = document.querySelectorAll('main *');
 const bar = document.querySelectorAll('span');
 
 const link = document.querySelectorAll('a');

 colorBtn1.addEventListener('click', changeColor1);
 colorBtn2.addEventListener('click', changeColor2);
 colorBtn3.addEventListener('click', changeColor3);

 /*theme 1*/
 function changeColor1() {
    if(document.title == "Connect with me"){
        document.querySelector('.connectWithMe').style.backgroundImage = 'none';
    }
    
    const colorPairs = {body: '#f0f0f0', nav: '#ffcccc', a : '#333333', text: '#333333'};
    body.style.backgroundColor = colorPairs.body;
     nav.style.backgroundColor = colorPairs.nav;
     text.forEach(element =>{
        element.style.color = colorPairs.text;
     })
     
     link.forEach(link => {
         link.style.color = colorPairs.a;
     });

     bar.forEach(bar => {
        bar.style.backgroundColor = colorPairs.nav;
     })
 }

 /*theme 2*/
 function changeColor3() {
    if(document.title == "Connect with me"){
        document.querySelector('.connectWithMe').style.backgroundImage = 'none';
    }
    const colorPairs = {body: '#d9e6c3', nav: '#7f9162', a : '#ffffff', text: '#4d4d33'};
    body.style.backgroundColor = colorPairs.body;
     nav.style.backgroundColor = colorPairs.nav;
     text.forEach(element =>{
        element.style.color = colorPairs.text;
     })
     
     link.forEach(link => {
         link.style.color = colorPairs.a;
     });

     bar.forEach(bar => {
        bar.style.backgroundColor = colorPairs.nav;
     })
 }

 /*theme 3*/
 function changeColor2() {
    if(document.title == "Connect with me"){
        document.querySelector('.connectWithMe').style.backgroundImage = 'none';
    }
    const colorPairs = {body: '#f9e1e1', nav: '#cc0066', a : '#FFFFFF', text: '#333333'};
    body.style.backgroundColor = colorPairs.body;
     nav.style.backgroundColor = colorPairs.nav;
     text.forEach(element =>{
        element.style.color = colorPairs.text;
     })
     
     link.forEach(link => {
         link.style.color = colorPairs.a;
     });

     bar.forEach(bar => {
        bar.style.backgroundColor = colorPairs.nav;
     })
 }
 
}

/*feature 4 - event handler*/
/*the input fields have red borders before clicking on them, once they are clicked, they change to blue borders*/
if(document.title == "Connect with me"){
    let inputs = document.querySelectorAll("input");
    let submitBtn = document.getElementById("submit");

    if (submitBtn) {
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            input.style.border = "3px solid red";
            input.addEventListener("focus", function() {
                this.style.border = "3px solid green";
            });
            input.addEventListener("blur", function() {
                this.style.border = "3px solid blue";
            });
        }
    }
}

/*color changer for the index page*/
if(document.title == "Index"){
    const colorBtn1 = document.querySelector('#colorBtn1');
    const colorBtn2 = document.querySelector('#colorBtn2');
    const colorBtn3 = document.querySelector('#colorBtn3');
   
    const body = document.querySelector('body');
    const nav = document.querySelector('.navigation');
    const text = document.querySelectorAll('main *');
    const bar = document.querySelectorAll('span');
    
    const link = document.querySelectorAll('a');
   
    colorBtn1.addEventListener('click', changeColor1);
    colorBtn2.addEventListener('click', changeColor2);
    colorBtn3.addEventListener('click', changeColor3);
   
    function changeColor1() {
        document.querySelector('.index').style.backgroundImage = 'none';
       const colorPairs = {body: '#f0f0f0', nav: '#ffcccc', a : '#333333', text: '#333333'};
       body.style.backgroundColor = colorPairs.body;
        nav.style.backgroundColor = colorPairs.nav;
        text.forEach(element =>{
           element.style.color = colorPairs.text;
        })
        
        link.forEach(link => {
            link.style.color = colorPairs.a;
        });
   
        bar.forEach(bar => {
           bar.style.backgroundColor = colorPairs.nav;
        })
    }
   
    function changeColor3() {
        document.querySelector('.index').style.backgroundImage = 'none';
       const colorPairs = {body: '#d9e6c3', nav: '#7f9162', a : '#ffffff', text: '#4d4d33'};
       body.style.backgroundColor = colorPairs.body;
        nav.style.backgroundColor = colorPairs.nav;
        text.forEach(element =>{
           element.style.color = colorPairs.text;
        })
        
        link.forEach(link => {
            link.style.color = colorPairs.a;
        });
   
        bar.forEach(bar => {
           bar.style.backgroundColor = colorPairs.nav;
        })
    }
   
    function changeColor2() {
        document.querySelector('.index').style.backgroundImage = 'none';
       const colorPairs = {body: '#f9e1e1', nav: '#cc0066', a : '#FFFFFF', text: '#333333'};
       body.style.backgroundColor = colorPairs.body;
        nav.style.backgroundColor = colorPairs.nav;
        text.forEach(element =>{
           element.style.color = colorPairs.text;
        })
        
        link.forEach(link => {
            link.style.color = colorPairs.a;
        });
   
        bar.forEach(bar => {
           bar.style.backgroundColor = colorPairs.nav;
        })
    }
}

/*feature 2 - conditional*/
/*submit button is enabled only if the checkbox is checked*/
 if(document.title == "Connect with me"){
    const checkbox = document.getElementById("check");
    const submitBtn = document.getElementById("submit");
        
    checkbox.addEventListener("change", function() {
        // If the checkbox is checked, enable the submit button
        if (checkbox.checked) {
          submitBtn.disabled = false;
        }
        // If the checkbox is not checked, disable the submit button
        else {
          submitBtn.disabled = true;
        }
    });
 }
 
function checkFeild(event, inputId) {
    console.log(event.key);
    if (event.key !== 'Enter' && event.key !== 'Tab') return;
    if (inputId === 'firstname' || inputId == 'secondname') checkName(event, inputId);
    else if (inputId == 'mail') checkMail(event, inputId);
}


function    isValidName(name) {
    if (!name) return [false, "this feild is required."];
    if (name.length < 4) return[false, "name length should be >= 4"]
    for (let c of name) {
        // console.debug(c.toLowerCase(), c.toUpperCase());
        if (c.toUpperCase() !== c.toLowerCase() == false) return [false, "name should contain only alphabectic characters"];
    }
    return [true];
}

function    checkName(event, inputId) {
    const inputElement = document.getElementById(inputId); 
    console.log(inputElement);
    const p = document.querySelector(`.${inputId}-errormsg`);
    let val = isValidName(inputElement.value);
    if (val[0] == false) {
        console.log("feild Needed::");
        console.log(p, val[1]);
        p.innerHTML = val[1];
        inputElement.style["border-color"] = 'red'; 
        event.preventDefault();
    }
    else {
        p.innerHTML = "";
        inputElement.style["border-color"] = 'green';
    }
}


function isValidMail(mail) {
    if (mail.length <= 8) return [false, "mail lenght should be > 8,"]
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = pattern.test(mail);
    if (isValid) return [true];
    else return [false, "invalid mail"];
}

function checkMail(event, inputId) {
    const mailInputElement = document.getElementById(inputId); 
    console.log(mailInputElement);
    const p = document.querySelector('.mail-errormsg');
    let val = isValidMail(mailInputElement.value);
    if (val[0] == false) {
        console.log("Mail Invalid::");
        p.innerHTML = val[1];
        mailInputElement.style["border-color"] = 'red'; 
        event.preventDefault();
        
    }
    else {
        p.innerHTML = "";
        mailInputElement.style["border-color"] = 'green';
    }
}

function    isFormValid() {
    checkFirstName();
}

console.log("Hello world");
// isFormValid();

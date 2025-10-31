function checkFeild(event, inputId) {
    console.log(event.key);
    if (event.key !== 'Enter' && event.key !== 'Tab') return;
    if (inputId === 'firstname' || inputId == 'secondname') checkName(event, inputId);
    else if (inputId == 'mail') checkMail(event);
}


function    isValidName(name) {
    if (!name) return [false, "this feild is required."];
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


// function checkMail() {
//     const mailInputElement = document.getElementById(inputId); 
//     console.log(mailInputElement);
//     const p = document.querySelector('.mail-errormsg');
//     let val = isValidMail(inputElement.value);
//     if (val[0] == false) {
//         console.log("Mail Invalid::");
//         console.log(p, val[1]);
//         p.innerHTML = val[1];
//         inputElement.style["border-color"] = 'red'; 
//         event.preventDefault();
        
//     }
//     else {
//         p.innerHTML = "";
//         inputElement.style["border-color"] = 'green';
//     }
// }

function    isFormValid() {
    checkFirstName();
}

console.log("Hello world");
// isFormValid();

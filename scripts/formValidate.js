function checkFeild(event, inputId) {
    console.log(event.key);
    // if (event.key !== 'Enter' && event.key !== 'Tab') return;
    if (inputId === 'firstname' || inputId == 'secondname') checkName(event, inputId);
    else if (inputId == 'mail') checkMail(event, inputId);
    else if (inputId == "phonenum") checkPhoneNumber(event, inputId);
    else checkMessage(event, inputId);
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
		inputElement.focus();
        return false;
    }
    else {
        p.innerHTML = "";
        inputElement.style["border-color"] = 'green';
        return true;
    }
}


function isValidMail(mail) {
    if (mail.length <= 8) return [false, "mail lenght should be > 8"]
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
		mailInputElement.focus();
        return false;
    }
    else {
        p.innerHTML = "";
        mailInputElement.style["border-color"] = 'green';
        return true;
    }
}

function    isValidPhoneNumber(phonenum) {
    if (phonenum.length <= 8) return [false, "phone number lenght should be > 9."]
    let i = 0;
    if (phonenum[i] === '+') i++;
    while (i < phonenum.length) {
        if (isNaN(parseInt(phonenum[i]))) return [false, "phone number should contain only digits"]
        i++;
    }
    return [true];
}

function checkPhoneNumber(event, inputId) {
    const phonenumInputElement = document.getElementById(inputId); 
    console.log(phonenumInputElement);
    const p = document.querySelector('.phonenum-errormsg');
    let val = isValidPhoneNumber(phonenumInputElement.value);
    // console.log(val);
    if (val[0] == false) {
        console.log("phonenum Invalid::");
        p.innerHTML = val[1];
        phonenumInputElement.style["border-color"] = 'red'; 
        event.preventDefault();
		phonenumInputElement.focus();
        return false;
    }
    else {
        phonenumInputElement.style["border-color"] = 'green';
        p.innerHTML = "";
        return true;
    }
}


function checkMessage(event, inputId) {
    console.log(event.key);
    const messageElement = document.getElementById(inputId); 
    const p = document.querySelector('.msg-errormsg');
    
    if (messageElement.value.length > 0) {
        console.log("value found:", messageElement.value, messageElement.value.length);
        messageElement.style.setProperty('border-color', 'green');
        p.innerHTML = "";
        // messageElement.style["border-color"] = 'green'; 
        return true;
    }
    else {
        messageElement.style["border-color"] = 'gray';
        p.innerHTML = "the message is required";
        return false;
    }
}

function checkRadio() {
	const radioElement = document.querySelector('input[name="radio"]:checked');
	const p = document.querySelector(".radio-error");
	if (!radioElement) {
		console.log("radio not selected");
		p.innerHTML = "please select on of the options above.";
		return false;
	}
	
	else {
		p.innerHTML = "";
		return true;
	}
}


function   validateForm(event) { 
    console.log("submit clicked");
    event.preventDefault();
    if (!checkName(event, "firstname") || !checkName(event, "secondname") 
	   || !checkMail(event, "mail")  || !checkPhoneNumber(event, "phonenum")
	   || !checkMessage(event, "message") || !checkRadio())
	   return;

    const success = document.querySelector('.success-msg');
	const form = document.querySelector('.form-section');  
	console.log(success);
	console.log(success.style.display);     
	console.log(form);
    success.style.display = 'block';
	form.style.display = 'none';
}

function    isFormValid() {
    checkFirstName();
}


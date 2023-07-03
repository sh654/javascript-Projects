const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    validateInputs();
});

/*Event listeners are added to elements using the addEventListener() method. This method takes two arguments: the name of the event to listen for, and a callback function to execute when the event occurs. */

/*
This code adds an event listener to a form element. The event listener is triggered when the form is submitted, and it has a callback function that does the following:

It prevents the default action of the form submission from occurring by calling e.preventDefault(). This is often used to prevent the form from being submitted to a server and instead handle the form submission with JavaScript. It calls a function called validateInputs().

The event listener is passed an event object as an argument, which is represented by the variable e. The preventDefault() method is called on this event object to prevent the default action of the form submission from occurring.

This code is likely used to validate the form inputs before the form is submitted. The validateInputs() function is called to check that the form inputs are valid, and if they are not, the form is not submitted.
*/

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

/* 
This code defines a function called setError that takes two arguments: element and message.

The function does the following:

It selects the parent element of element using element.parentElement.
It selects the element with the class error within the parent element using inputControl.querySelector('.error').
It sets the innerText property of the element with the class error to the value of message.
The innerText property sets or gets the text content of an element. So this function is likely used to set an error message to be displayed to the user. The error message is displayed within an element with the class error, which is a descendant of the parent element of element.

Shivam Upadhyay
what does it mean by parent element 
In HTML, an element can have a parent element, which is the element that contains it. For example, in the following HTML snippet:
<div>
  <p>This is a paragraph.</p>
</div>
The div element is the parent element of the p element. The p element is a child element of the div element.

In this code, element.parentElement refers to the parent element of the element argument. So, if element is a child element, element.parentElement would be the parent element of that child element.

*/

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
/* This code uses the classList property of an element to remove a class from the element.

The classList property is a DOMTokenList object that represents the class names of an element. It provides methods for adding, removing, and toggling class names on an element.

In this code, the remove() method of classList is used to remove the class 'error' from an element.

Here is an example of how this code might be used:
const inputControl = document.querySelector('#my-input');

inputControl.classList.remove('error');
This code would remove the class 'error' from the element with the ID "my-input". If the element has the class 'error', it will no longer have that class after this code is executed. If the element does not have the class 'error', this code will have no effect.

The classList property and its methods are a useful way to manipulate the class names of an element in JavaScript. */

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

/*
The trim() is a built-in string function in JavaScript, which is used to trim a string. This function removes the whitespace from both the ends, i.e., start and end of the string. As the trim() is a string method, so it is invoked by an instance of the String class.
Trim function returns a new string value which is trimmed string. This function does not take any arguments. trim () function does not affect the actual value of string or string variable.
*/
    if( usernameValue === '')
    {
        setError(username, 'Username is required');
    } else{
        setSuccess(username);
    }

    if( emailValue === ''){
        setError(email, 'Email is mandatory');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    }
    else {
        setSuccess(email);
    }
    if(passwordValue === ''){
        setError(password, 'Password is required');
    } else if (passwordValue.length <8) {
        setError(password, 'Password must be at least 8 character.');
    } else {
        setSuccess(password);
    }
    if(password2Value === ''){
        setError(password2, 'Password is required');
    } else if (password2Value.length <8) {
        setError(password2, 'Password must be at least 8 character.');
    } else {
        setSuccess(password2);
    }
};
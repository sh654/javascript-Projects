const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerSet = 'abcdefghijklmnopqrstuvwxyz';
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*-+~/";

//selectors 
const passBox = document.getElementById('pass-box');
const totalChar = document.getElementById('total-char');
const upperInput = document.getElementById('upper-case');
const lowerInput = document.getElementById('lower-case');
const numberInput = document.getElementById('numbers');
const symbolInput = document.getElementById('symbols');

const button = document.getElementById('btn')
button.addEventListener('click', function (){
    passwordGenerator();
})
const getRandomData = (dataset) =>{
    return dataset[Math.floor(Math.random() * dataset.length)]
}

const passwordGenerator = (password = "" ) =>{
    if(upperInput.checked){
        password += getRandomData(upperSet);
    } 
    if(lowerInput.checked){
        password += getRandomData(lowerSet);
    }
    if(numberInput.checked){
        password += getRandomData(numberSet);
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet);
    }
    if(password.length < totalChar.value){
        return passwordGenerator(password);
    }   
    passBox.innerHTML = truncateString(password, totalChar.value);
}

function truncateString(str, num){
    if(str.length > num){
        let subStr = str.substring(0, num);
        return subStr;
    } else{
        return str;
    }
}
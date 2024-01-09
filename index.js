const input = document.getElementById('input');
const celsius = document.getElementById('celsius');
const submit = document.getElementById('submit');
const result = document.getElementById('result');

let input_value, result_value;

submit.onclick = function(){
    input_value = Number(input.value);

    if(celsius.checked == true){
        number = (input_value - 32) * 5 / 9;
        result_value = `${Math.round(number * 100) / 100} °C`;
    }
    else{
        number = (input_value) * 9 / 5 + 32;
        result_value = `${Math.round(number * 100) / 100} °F`;
    }

    result.textContent = result_value;  
};

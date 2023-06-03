const convertTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    
    const ctof = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    
    const ftoc = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = ctof(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = ftoc(inputTemp) + "&#176; Celsius";
    }
}
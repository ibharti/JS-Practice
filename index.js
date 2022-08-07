window.onload = () => {
    document.getElementById('submitBtn').onclick = () => {

        if ((document.getElementById('radioC').checked) && !(document.getElementById('radioF').checked)) {
            let temp = document.getElementById('tempValue').value;
            temp = Number(temp);
            temp = tempConversiontoc(temp);
            document.getElementById('answer').innerHTML = temp + '°C';
        }
        else if ((document.getElementById('radioF').checked) && !(document.getElementById('radioC').checked)) {
            let temp = document.getElementById('tempValue').value;
            temp = Number(temp);
            temp = tempConversiontoF(temp);
            document.getElementById('answer').innerHTML = temp + '°F';
        }
        else if ((document.getElementById('radioF').checked) && (document.getElementById('radioC').checked)) {
            document.getElementById('answer').innerHTML = "Please select only one unit! ";

        }
        else {
            document.getElementById('answer').innerHTML = "Unit not selected!";

        }



    }

    const tempConversiontoF = (temp) => {
        temp = (temp * 1.8) + 32;
        return temp;

    }
    const tempConversiontoc = (temp) => {
        temp = (temp - 32) * .5556;
        return temp;

    }
}

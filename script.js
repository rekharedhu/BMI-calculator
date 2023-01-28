window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", calculateBMI);
};

function calculateBMI(){
    let weight = parseInt(document.querySelector("#weight").value);
    let height = parseInt(document.querySelector("#height").value);

    //let bmi = weight / (height * height);

    let result = document.querySelector("#result");

    if (height === "" || isNaN(height)) 
    result.innerHTML = "provide a valid height !";
    else if (weight === "" || isNaN(weight))
    result.innerHTML = "provide a valid weight";
    else{
        let bmi = ((weight*10000)/(height*height)).toFixed(2);
        
        if (bmi < 18.6 ) result.innerHTML = `Under weight :<span>${bmi}</span>`;
        else if (bmi >= 18.6 && bmi <=24.9)
        result.innerHTML = `Normal weight :<span>${bmi}</span>`;
        else
        result.innerHTML = `Overweight :<span>${bmi}</span>`;
    }
}

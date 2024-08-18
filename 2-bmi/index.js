const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid Height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }

    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML = `<h2>Your BMI = ${bmi}</h2>`
        const val = document.createElement('h2')
        if(bmi <= 18.6){
            val.innerHTML = "You are under weight"
            val.style.color = 'yellow'
        }
        else if(bmi > 18.6 && bmi <= 24.9){
            val.innerHTML = "You are in normal range"
            val.style.color = 'greenyellow'
        }
        else if(bmi > 24.9){
            val.innerHTML = "You are Overweight"
            val.style.color = 'red'
        }
        results.appendChild(val)
    }
    
    console.log(results)
});

function calculatedDictionary(number){
    /* 1 meter = 3.281 feet
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound */
    let data = {
      length: {text:"Length (Meter/Feet)",unit1:"meters",unit2:"feet", value1: 0, value2: 0 },
      volume: {text:"Volume (Liters/Gallons)",unit1:"liters",unit2:"gallons", value1: 0, value2: 0 },
      mass: {text:"Mass (Kilograms/Pounds)",unit1:"kilos",unit2:"pounds", value1: 0, value2: 0 },
    };
    data.length.value1 = Math.round(number * 3.281);
    data.length.value2 = Math.round(number / 3.281); 
    data.volume.value1= Math.round(number*0.264) 
    data.volume.value2= Math.round(number/0.264) 
    data.mass.value1= Math.round(number*2.204) 
    data.mass.value2= Math.round(number/2.204) 
    return data
}

function displayConvertedUnits(event){
    event.preventDefault()
    const resultsEl = document.getElementById("results");
    const inputEl = document.getElementById("inputEl").value;
    let number= parseFloat(inputEl)
    let DivCol12=`<div class="col-12">`
    for (const [key, value] of Object.entries(calculatedDictionary(number))) {
          DivCol12 += `
          <div class="row bg-style">
              <div class="col-12 ">
                    <h2>${value.text}</h2>
                    <p>${number} ${value.unit1} = ${value.value1} ${value.unit2} | ${number} ${value.unit2} = ${value.value2} ${value.unit1}</p>
              </div>
          </div>
          `;
    }
    DivCol12 += `</div>`
    
    resultsEl.innerHTML= DivCol12
}

const convertForm=document.getElementById("convert-form")
convertForm.addEventListener("submit",displayConvertedUnits)

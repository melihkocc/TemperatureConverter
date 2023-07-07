const celcius = document.querySelector(".firstArea input")
const fahrenheit = document.querySelector(".secondArea input")
const kelvin = document.querySelector(".thirdArea input")

celcius.addEventListener("change",()=>{
    fahrenheit.value = (celcius.value*1.8)+32
    kelvin.value = Number(celcius.value)+273,15
})
fahrenheit.addEventListener("change",()=>{
    celcius.value = (fahrenheit.value-32)/1.8
    kelvin.value =  Number(celcius.value)+273,15;
})
kelvin.addEventListener("change",()=>{
    celcius.value = kelvin.value-273,15
    fahrenheit.value = (celcius.value*1.8)+32
})

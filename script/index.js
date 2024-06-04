let calculateBnt = document.querySelector('#calculate')
let max = document.querySelector('#max')
let min = document.querySelector('#min')
let input =  document.querySelector('#input')

calculateBnt.addEventListener("click",()=>{
    const numbers = input.value.split(",")
    max.innerHTML = "Max value is =  " + Math.max(...numbers)
    min.innerHTML = 'Min value is =  '  + Math.min(...numbers)
})


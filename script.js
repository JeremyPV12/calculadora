function add(valueElements) {
    document.getElementById('screen').value += valueElements
}

const restart = document.getElementById('ce')
restart.addEventListener('click', function () {
    document.querySelector('#screen').value = ""
})

const calculate = document.getElementById('calculate')
calculate.addEventListener('click', function () {
    const valueScreen = document.getElementById('screen').value 
    const result = eval(valueScreen)
    document.getElementById('screen').value =result
})
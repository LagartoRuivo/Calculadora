const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
const switchBtn = document.getElementById("switchTheme")

switchBtn.addEventListener("click", function(){
    if (main.dataset.theme === "dark"){
        root.style.setProperty('--bg-color','#f1f5f9')
        root.style.setProperty('--font-color','#212529')
        root.style.setProperty('--border-color','#414040')
        main.dataset.theme = "light"
    }else{
        root.style.setProperty('--bg-color','#212529')
        root.style.setProperty('--font-color','#f1f5f9')
        root.style.setProperty('--border-color','#666')
        main.dataset.theme = "dark"
    }
})

document.querySelectorAll(".charKey").forEach(function(charKeyButton){
    charKeyButton.addEventListener('click', function(){
        const value = charKeyButton.dataset.value

        input.value += value
    })
})

document.getElementById("clear").addEventListener('click', function(){
    input.value = ""
    input.focus()
    resultInput.value = ""
})

document.getElementById("equal").addEventListener('click', calculate)

const validKeys = ['(',')','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','%','=']

input.addEventListener('keydown', function(ev){
    ev.preventDefault()

    if(validKeys.includes(ev.key)){
        input.value +=ev.key
    }else{
        if(ev.key === 'Backspace'){
            input.value = input.value.slice(0,-1)
        }
        if(ev.key === 'Enter'){
            calculate()
        }
    }
})

document.getElementById("copyToClipBoard").addEventListener('click',function(ev){
    const button = ev.currentTarget
    
    if(button.innerText === "Copiar"){
        button.innerText = "Copiado"
        button.classList.add("success")

        navigator.clipboard.writeText(resultInput.value)

        setTimeout(function(){
        button.innerText = "Copiar"
        button.classList.remove("success")
        },2000)
    }
})

function calculate(){
    const resultado = eval(input.value)
    if(resultado === Infinity){
        resultInput.value = "É o father"
    }else{
        resultInput.value = resultado
    }

}

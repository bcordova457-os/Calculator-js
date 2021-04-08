class Calculator{
    constructor(previousOperandTextElement, currentOpTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOpTextElement = currentOpTextElement;  
        this.clear()   
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }

    appendNum(number){
        if (number == '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOp(operation){
        if(this.currentOperand === '') return
        if (this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOPerand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+' :
                computation = prev + current
                break
            
            case '-':
                computation = previous - current
                break
            
            case '*' :
                computation = previous * current
                break
            
            case '/' :
                computation = previous / current
                break
            
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }

    updateDisplay(){
        this.currentOpTextElement.innerText = this.currentOperand
        if(this.operation != null){
            this.previousOperandTextElement.innerText = 
            `${this.previousOperand} ${this.operation}`
        }
        this.previousOperandTextElement.innerText = this.PreviousOperand


    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const opButtons = document.querySelectorAll('[data-operations]')
const equalbutton = document.querySelector('[data-equals]')
const delButton = document.querySelector('[data-delete]')
const acButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOpTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOpTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNum(button.innerText)
        calculator.updateDisplay()
    })
})

opButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.ChooseOp(button.innerText)
        calculator.updateDisplay()
    })
})

equalbutton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

acButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

delButton.addEventListener('click', () =>{
    calculator.delete()
    calculator.updateDisplay()
    })


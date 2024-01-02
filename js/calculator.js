let calculatorArray = 
  {
    display: ``,
    insertDot: false,
    memory: 0,
    operator: ``,
  }

// Display                                       // Mostrar
function updateDisplay                           // Atualizar display
  ()
  {
    window.document.getElementById(`display`).value = 
    String(calculatorArray.display)
  } updateDisplay()


// Buttons                                       // Botões
function clearCalculatorMemory                   // Limpar Memória da Calculadora
  ()
  {
    calculatorArray.display = ``
    calculatorArray.insertDot = false
    calculatorArray.memory = 0
    calculatorArray.operator = ``
    calculatorArray.temp = 0
    updateDisplay()
  }

function deleteLastEnteredCharacter              // Apagar último caractere digitado
  ()
  {
    calculatorArray.display = calculatorArray.display.slice(0,-1)
    updateDisplay()
  }

function insertCharacter                         // Inserir caractere
  (character)
  {
    if (character == `.`)
      {
        decimalPointCheck()
      }
    
    if (typeof(character) == `number` || !calculatorArray.insertDot)
      {
        calculatorArray.display = String(calculatorArray.display) + character
        updateDisplay()
      }
  }

function selectOperator                          // Selecionar Operador
  (operator)
  {
    calculate()
    calculatorArray.operator = operator
    calculatorArray.display = ``
  }

function calculationResult                     // Resultado do Calculo
  ()
  { 
    calculate()
    calculatorArray.display = ``
  }

// Special Functions                             // Funções Especiais
function decimalPointCheck
  ()
  {
    if (calculatorArray.display.length != calculatorArray.display.replace(`.`,``).length)
      {
        calculatorArray.insertDot = true
      } else {
        calculatorArray.insertDot = false
      }
  }

function calculate                               // Calcular
  ()
  {
    if (calculatorArray.memory == 0)
      {
        calculatorArray.memory = Number(calculatorArray.display)
      } else {
        switch (calculatorArray.operator)
          {
            case `+`: 
              calculatorArray.memory = Number(calculatorArray.memory) + Number(calculatorArray.display)
              break
            case `-`:
              calculatorArray.memory = calculatorArray.memory - calculatorArray.display
              break
            case `*`:
              calculatorArray.memory = calculatorArray.memory * calculatorArray.display
              break
            case `/`:
              calculatorArray.memory = calculatorArray.memory / calculatorArray.display
              break
          }
      }
      calculatorArray.display = calculatorArray.memory
      updateDisplay()
  }


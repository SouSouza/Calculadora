let calculatorArray = 
  {
    display: ``,
    insertDot: false,
    memory: 0,
    operator: ``,
  }

// Display (Mostrar) ------------------------------------------------------------------------------

  // Atualizar display
  function updateDisplay                       
    () 
    {
      window.document.getElementById(`display`).value = 
      String(calculatorArray.display)
    } updateDisplay()


// Buttons (Botões)  ------------------------------------------------------------------------------

  // Limpar Memória da Calculadora
  function clearCalculatorMemory                   
    ()
    {
      calculatorArray.display = ``
      calculatorArray.insertDot = false
      calculatorArray.memory = 0
      calculatorArray.operator = ``
      calculatorArray.temp = 0
      updateDisplay()
    }

  // Apagar último caractere digitado
  function deleteLastEnteredCharacter              
    () 
    {
      calculatorArray.display = calculatorArray.display.slice(0,-1)
      updateDisplay()
    }

  // Inserir caractere
  function insertCharacter                         
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

  // Selecionar Operador
  function selectOperator                          
    (operator) 
    {
      calculate()
      calculatorArray.operator = operator
      calculatorArray.display = ``
    }

  // Resultado do Calculo
  function calculationResult                     
    () 
    { 
      calculate()
      calculatorArray.display = ``
    }

// Special Functions (Funções Especiais)  ---------------------------------------------------------                       

  // Verificação de ponto decimal
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

  // Calcular
  function calculate                               
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


import { useState } from 'react'
import './App.css'
import Teclado from './components/Teclado'
import { operationCase } from './helpers/Operations'

function App() {

	const [dataHistory, setDataHistory] = useState([])

	const [dataTemp, setDataTemp] = useState({
		number1:"",
		operation:"",
		number2:""
	})

	const [numberchange, setNumberchange] = useState("0")

	const [actionOperation, setActionOperation] = useState(false)

	const [temporalSymbol, setTemporalSymbol] = useState(false)

	const [temporalOperation, setTemporalOperation] = useState("")

	const resultOperation=()=>{
		const result = operationCase(numberchange,temporalOperation)
		setNumberchange(result.str_res)
		setActionOperation(false)
		// setTemporalSymbol(false)
		// setTemporalOperation("")
	}

	const handleReset=()=>{
		setNumberchange("0")
		setActionOperation(false)
		setTemporalSymbol(false)
		setTemporalOperation("")
	}

	const handleChangeKeyboard=(numero_text)=>{
		
		if(numero_text==="."){
			setNumberchange(numberchange+numero_text)
		}

		if(temporalOperation){
			setNumberchange(numberchange+numero_text)
		}else{
		setNumberchange(numero_text)

		}

		
		setTemporalSymbol(false)
		
	}

	const handleClickOperation = (operation) =>{

		if(!actionOperation){

			
				setTemporalOperation(operation)
				// añado al valor del input el signo a operar
				setNumberchange(numberchange+operation)
				//guardo en la variable temporal el primer numero y la operacion
				setDataTemp({...dataTemp,number1:numberchange,operation:operation})
				//cambio el estado de la accion
				setActionOperation(true)

				setTemporalSymbol(true)
			
			
		}else{

			if(!temporalSymbol){
				console.log("se puso true")
				console.log(numberchange)
				console.log(temporalOperation)
				//cuando de click y este en true tendrá que guardar el nuevo numero
				const result = operationCase(numberchange,temporalOperation)
				setDataTemp({...dataTemp,number2:result.number2})
				// setDataHistory({...dataHistory,dataTemp})
				setActionOperation(false)
				setNumberchange(result.str_res)
			}else{
				console.log("entro al segundo")
				const setNumberReplace=numberchange.slice(0,numberchange.length-1)
				setNumberchange(setNumberReplace+operation)
				setTemporalOperation(operation)
			}
		}
		
	}


	return (
		<div className="calculator card">

			<input type="text" className="calculator-screen z-depth-1" disabled value={numberchange}/>

			<Teclado 
			
			handleChangeKeyboard={handleChangeKeyboard}
			handleClickOperation={handleClickOperation}
			handleReset={handleReset}
			resultOperation={resultOperation}
			/>
			
		</div>
	)
}

export default App

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

	const [actionEqual, setActionEqual] = useState(false)

	const [temporalOperation, setTemporalOperation] = useState("")

	const [continueChange, setContinueChange] = useState(false)

	const resultOperation=()=>{

		// console.log(temporalSymbol)
		
		if(actionEqual){
			const result = operationCase(numberchange,temporalOperation)
			if(result.str_res!=="NaN"){
				setNumberchange(result.str_res)
				setActionOperation(false)
				setTemporalSymbol(false)
				setActionEqual(false)
			}

			
		}
	}

	const handleReset=()=>{
		setNumberchange("0")
		setActionOperation(false)
		setTemporalSymbol(false)
		setTemporalOperation("")
	}

	const handleChangeKeyboard=(numero_text)=>{

		const dataKeyBoards=["1","2","3","4","5","6","7","8","9","0"]
		
		if(numero_text==="."){
			setNumberchange(numberchange+numero_text)
			setContinueChange(true)
		}else if(dataKeyBoards.includes(numero_text)){
			if(numero_text==="0"){
				if(numberchange.length===1){
					setNumberchange(numero_text)
				}else{
					setNumberchange(numberchange+numero_text)
				}
			}else{
				if(numberchange==="0"){
					setNumberchange(numero_text)
				}else{
					setNumberchange(numberchange+numero_text)
				}
			}
		}

		setTemporalSymbol(false)
		
	}

	const handleClickOperation = (operation) =>{

		if(!actionOperation){

			console.log("action 1")

			if(numberchange.length===0){
				if(operation==="-"){
					setTemporalOperation(operation)
					// añado al valor del input el signo a operar
					setNumberchange(numberchange+operation)
					//guardo en la variable temporal el primer numero y la operacion
					setDataTemp({...dataTemp,number1:numberchange,operation:operation})
					//cambio el estado de la accion
					if(numberchange.length>0){
						setActionOperation(true)
	
						setTemporalSymbol(true)
	
						setActionEqual(true)
					}
				}
			}else{
				setTemporalOperation(operation)
					// añado al valor del input el signo a operar
					setNumberchange(numberchange+operation)
					//guardo en la variable temporal el primer numero y la operacion
					setDataTemp({...dataTemp,number1:numberchange,operation:operation})
					//cambio el estado de la accion
					if(numberchange.length>0){
						setActionOperation(true)
	
						setTemporalSymbol(true)
	
						setActionEqual(true)
					}
			}

			
			
		}else{

			console.log(numberchange)

			if(!temporalSymbol){
				//cuando de click y este en true tendrá que guardar el nuevo numero
				if(numberchange.length===0){
					console.log("aqui")
				
					setTemporalOperation(operation)
					// añado al valor del input el signo a operar
					setNumberchange(numberchange+operation)
					//guardo en la variable temporal el primer numero y la operacion
					setDataTemp({...dataTemp,number1:numberchange,operation:operation})
					//cambio el estado de la accion

				}else{
					console.log("aqui 2")
					const result = operationCase(numberchange,temporalOperation)
				
					setDataTemp({...dataTemp,number2:result.number2})
					// setDataHistory({...dataHistory,dataTemp})
					setActionOperation(false)
					setNumberchange(result.str_res)

					console.log(result)
				}
				
			}else{
				const setNumberReplace=numberchange.slice(0,numberchange.length-1)
				setNumberchange(setNumberReplace+operation)
				setTemporalOperation(operation)
			}
		}
		
	}

	const handleCleanCaracter=()=>{
		const setNumberReplace=numberchange.slice(0,numberchange.length-1)
		setNumberchange(setNumberReplace)
	}


	return (
		<div className="calculator card">

			<input type="text" className="calculator-screen z-depth-1" disabled value={numberchange}/>

			<Teclado 
			
			handleChangeKeyboard={handleChangeKeyboard}
			handleClickOperation={handleClickOperation}
			handleReset={handleReset}
			resultOperation={resultOperation}
			handleCleanCaracter={handleCleanCaracter}
			/>
			
		</div>
	)
}

export default App

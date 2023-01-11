import React from 'react'

function Teclado({
    handleChangeKeyboard,
    handleClickOperation,
    handleReset,
    resultOperation,
	handleCleanCaracter
}) {
    return (
        <div className="calculator-keys">

				<button type="button" className="operator btn btn-info" onClick={()=>{handleClickOperation("+")}}>+</button>
				<button type="button" className="operator btn btn-info" onClick={()=>{handleClickOperation("-")}}>-</button>
				<button type="button" className="operator btn btn-info" onClick={()=>{handleClickOperation("x")}}>&times;</button>
				<button type="button" className="operator btn btn-info" onClick={()=>{handleClickOperation("/")}}>&divide;</button>

				<button type="button"  className="btn btn-light waves-effect" onClick={()=>handleChangeKeyboard("7")} >7</button>
				<button type="button"  className="btn btn-light waves-effect" onClick={()=>handleChangeKeyboard("8")}>8</button>
				<button type="button"  className="btn btn-light waves-effect" onClick={()=>handleChangeKeyboard("9")}>9</button>


				<button type="button"  className="btn btn-light waves-effect" onClick={()=>handleChangeKeyboard("4")}>4</button>
				<button type="button"  className="btn btn-light waves-effect" onClick={()=>handleChangeKeyboard("5")}>5</button>
				<button type="button"  className="btn btn-light waves-effect" onClick={()=>handleChangeKeyboard("6")}>6</button>


				<button type="button" className="btn btn-light waves-effect" onClick={()=>handleChangeKeyboard("1")}>1</button>
				<button type="button" className="btn btn-light waves-effect" onClick={()=>handleChangeKeyboard("2")}>2</button>
				<button type="button" className="btn btn-light waves-effect" onClick={()=>handleChangeKeyboard("3")}>3</button>


				<button type="button" className="btn btn-light waves-effect" onClick={()=>handleChangeKeyboard("0")}>0</button>
				<button type="button" className="decimal function btn btn-secondary" onClick={()=>handleChangeKeyboard(".")}>.</button>
				<button type="button" className="all-clear function btn btn-danger btn-sm" onClick={()=>{handleReset()}} >AC</button>

				<button type="button" className="equal-sign operator btn btn-default" onClick={()=>{resultOperation()}}>=</button>

				<button type="button" className="all-clear function btn btn-danger btn-sm" onClick={()=>{handleCleanCaracter()}} >DEL de wiki</button>

			</div>
    )
}

export default Teclado
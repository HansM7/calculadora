export const operationCase=(allString,simbol)=>{
    const destructuring = allString.split(simbol)
    // console.log("destr"+destructuring)
    // console.log("symbol"+simbol)
    console.log(allString)
    console.log(simbol)
    let result=0
    switch (simbol) {
        case "+":
            result=parseFloat(destructuring[0])+parseFloat(destructuring[1])
            break;
        case "-":
            result=parseFloat(destructuring[0])-parseFloat(destructuring[1])
            break;
    
        case "x":
            result=parseFloat(destructuring[0])*parseFloat(destructuring[1])
            break;
        case "/":
            result=parseFloat(destructuring[0])/parseFloat(destructuring[1])
            break;
    }
    const str_res=result.toString()
    return {
        str_res,
        number2:destructuring[1]
    }
}
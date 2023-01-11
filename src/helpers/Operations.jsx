export const operationCase=(allString,simbol)=>{
    const destructuring = allString.split(simbol)
    // console.log("destr"+destructuring)
    // console.log("symbol"+simbol)
    console.log(allString)
    console.log(simbol)

    let num1=0
    let num2=0

    if(destructuring[0]===""){
        num1=destructuring[1]
        num2=destructuring[2]
    }else{
        num1=destructuring[0]
        num2=destructuring[1]
    }

    let result=0
    switch (simbol) {
        case "+":
            result=parseFloat(num1)+parseFloat(num2)
            break;
        case "-":
            result=parseFloat(-num1)-parseFloat(num2)
            break;
    
        case "x":
            result=parseFloat(num1)*parseFloat(num2)
            break;
        case "/":
            result=parseFloat(num1)/parseFloat(num2)
            break;
    }
    const str_res=result.toString()
    return {
        str_res,
        number2:destructuring[1]
    }
}
let btns = document.querySelectorAll(".btn");
let input = document.querySelector(".input");
let output = document.querySelector(".output");
let clear = document.querySelector(".clear");
let deletee = document.querySelector(".delete");
let whichButton;
let calculateStr = "";
let initial = 1;
clear.addEventListener('click', clearFunc);
deletee.addEventListener('click', deleteeFunc);




for(let i = 0; i<btns.length; i++){

    btns[i].addEventListener('click', (event) => {

        //console.log(btns);
        if(event.target.textContent == btns[13].textContent){

            if(initial != 1){
                input.textContent += '0';
                calculateStr+='0';
            }
            
        }
        if(event.target.textContent == btns[10].textContent){
            if(initial == 1){
                input.textContent = '1';
                initial = 0;
            }else{
                input.textContent += '1';
            }
            calculateStr+='1';
            
        }
        if(event.target.textContent == btns[9].textContent){
            if(initial == 1){
                input.textContent = '2';
                initial = 0;
            }else{
                input.textContent += '2';
            }
            calculateStr+='2';
        }
        if(event.target.textContent == btns[8].textContent){
            if(initial == 1){
                input.textContent = '3';
                initial = 0;
            }else{
                input.textContent += '3';
            }
            calculateStr+='3';
        }
        if(event.target.textContent == btns[6].textContent){
            if(initial == 1){
                input.textContent = '4';
                initial = 0;
            }else{
                input.textContent += '4';
            }
            calculateStr+='4';
        }
        if(event.target.textContent == btns[5].textContent){
            if(initial == 1){
                input.textContent = '5';
                initial = 0;
            }else{
                input.textContent += '5';
            }
            calculateStr+='5';
        }
        if(event.target.textContent == btns[4].textContent){
            if(initial == 1){
                input.textContent = '6';
                initial = 0;
            }else{
                input.textContent += '6';
            }
            calculateStr+='6';
        }
        if(event.target.textContent == btns[2].textContent){
            if(initial == 1){
                input.textContent = '9';
                initial = 0;
            }else{
                input.textContent += '9';
            }
            calculateStr+='9';
        }
        if(event.target.textContent == btns[1].textContent){
            if(initial == 1){
                input.textContent = '8';
                initial = 0;
            }else{
                input.textContent += '8';
            }
            calculateStr+='8';
        }
        if(event.target.textContent == btns[0].textContent){
            if(initial == 1){
                input.textContent = '7';
                initial = 0;
            }else{
                input.textContent += '7';
            }
            calculateStr+='7';
        }
        if(event.target.textContent == btns[12].textContent){
            
            input.textContent += '.';
            calculateStr+='.';
            initial = 0;
            
            
        }
        //here we go
        //bölme
        if(event.target.textContent == btns[3].textContent){
            if(initial!= 1){
                calculateStr+= '/';
                input.textContent +=' ÷ ';
            }
        }
        //carpma
        if(event.target.textContent == btns[7].textContent){
            if(initial != 1){
                calculateStr+= 'x';
                input.textContent += ' × ';
            }
        }
        //cıkarma
        if(event.target.textContent == btns[11].textContent){
            if(initial!=1){
                calculateStr+= '-';
                input.textContent += ' - ';
            }
        }
        //esittir
        if(event.target.textContent == btns[14].textContent){
            
            calculationFunc(calculateStr);
        }
        //toplama
        if(event.target.textContent == btns[15].textContent){
            if(initial != 1){
                calculateStr+= '+';
                input.textContent +=  ' + ';
            }
            
        }

    });
}


function calculationFunc(str){

    let flag = 1;
    console.log(str);
    if(str.length == 0){
        return;
    }
    
    let result = 0;
    while(flag == 1){

        let operand1 = "";
        let operand2 = "";
        let len = str.length;
        flag = 0;
        for(let i = 0; i<len; i++){
            
            if(str[i] == 'x' || str[i] == '/'){
                flag = 1;
                let leftside;
                let rightside;

                for(leftside = i - 1; leftside >= 0 && !(str[leftside] == '+' || str[leftside] == '-'||str[leftside] == 'x'||str[leftside] == '/' ); leftside-- ){
                    operand1 = str[leftside] + operand1;
                    
                }
                for(rightside = i + 1; rightside< len && !(str[rightside] == '+' || str[rightside] == '-'||str[rightside] == 'x'||str[rightside] == '/' ); rightside++ ){
                    operand2 =  operand2 + str[rightside];
                }
                let op1 = parseFloat(operand1);
                let op2 = parseFloat(operand2);
                let tpresult = 0.0;
                if(str[i] == 'x'){
                    tpresult = op1*op2;
                }
                else{
                    tpresult = op1/op2;
                }
                str = str.substring(0, leftside + 1) + tpresult + str.substring(rightside, str.length);
                //console.log(tpresult);
                break;
                //console.log(leftside + " " + rightside);
                //console.log(op1 + " " +  op2);

            }
        }
        
    }
    
    console.log("last form: " + str);
    let newlen = str.length;
    let op1 = "";
    let op2 = "";
    let fflag = -1;
    for(let i = 0; i<newlen; i++){
        
        if(str[i] == '+'){
            console.log("first op1: "+ op1+ " op2: "+op2);
            if(fflag == 0){
                result += parseFloat(op2);
                op1 = result;
                op2 = "";
            }else if(fflag == 1){
                result-=parseFloat(op2);
                op1 = result;
                op2 = "";
            }else{
                result = parseFloat(op1);
            }
            fflag = 0;
        }
        else if(str[i] == '-'){
            console.log("second op1: "+ op1+ " op2: "+op2);
            if(fflag == 0){
                result += parseFloat(op2);
                op1 = result;
                op2 = "";
            }else if(fflag == 1){
                result-=parseFloat(op2);
                op1 = result;
                op2 = "";
            }
            
            else{
                result = parseFloat(op1);
            }
            fflag = 1;
        }
        else{
            if(fflag == -1){
                op1+=str[i];
            }
            else{
                op2+=str[i];
            }

        }

    }
    /*console.log("op1" + op1 + " op2: " + op2);
    console.log("result: " + result);*/
    console.log(fflag);
    if(fflag == 0){
        result+= parseFloat(op2)
    }
    else if(fflag == 1){
        result -= parseFloat(op2);
    }
    else{
        result = parseFloat(str);
    }
    
    //console.log("result: " + result);
    result = result.toFixed(4);
    result = parseFloat(result);
    input.textContent = result;
    output.textContent = result;
    //for(let i = 0)


    calculateStr = result;
    //console.log(calculateStr);

    
}



function clearFunc(){

    input.textContent = "0";
    calculateStr = "";
    output.textContent = "";
    initial = 1;

}

function deleteeFunc(){
    
    let currentStr = input.textContent;
    let len = currentStr.length;
    let len2 = calculateStr.length;    //console.log(len);
    if(len == 1){
        input.textContent = "0";
        initial = 1;
        return;
    }
    if(currentStr[len - 1] == ' '){
        input.textContent = currentStr.substring(0, len - 3);
    }else{
        input.textContent = currentStr.substring(0, len - 1);
    }
    calculateStr = calculateStr.substring(0, len2 - 1);
    
    //console.log(currentStr.substring(0, len - 1))
}




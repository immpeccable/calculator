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
            if(initial != 1){
                input.textContent += '.';
                calculateStr+='.';
            }
            
        }
        //here we go
        //bölme
        if(event.target.textContent == btns[3].textContent){
            calculateStr+= '/';
            input.textContent +=' ÷ ';
        }
        //carpma
        if(event.target.textContent == btns[7].textContent){
            calculateStr+= 'x';
            input.textContent += ' × ';
        }
        //cıkarma
        if(event.target.textContent == btns[11].textContent){
            calculateStr+= '-';
            input.textContent += ' - ';
        }
        //esittir
        if(event.target.textContent == btns[14].textContent){
            
            calculationFunc(calculateStr);
        }
        //toplama
        if(event.target.textContent == btns[15].textContent){
            calculateStr+= '+';
            input.textContent +=  ' + ';
            
        }


        

       

    });

}


function calculationFunc(str){
    console.log(str);
}

function clearFunc(){

    input.textContent = "0";
    initial = 1;

}

function deleteeFunc(){
    
    let currentStr = input.textContent;
    let len = currentStr.length;
    //console.log(len);
    if(len == 1){
        input.textContent = "0";
        initial = 1;
        return;
    }
    input.textContent = currentStr.substring(0, len - 1);
    //console.log(currentStr.substring(0, len - 1))
}




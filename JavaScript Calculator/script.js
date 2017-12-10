document.getElementById('inputHere').innerHTML='0';
            
            // Display overall input values on keypress
            function inpVal(inp){
                var initialVal = document.getElementById('inputHere');
                if(initialVal.innerHTML==0)
                    initialVal.innerHTML=inp;
                else
                    initialVal.innerHTML = initialVal.innerHTML + inp;
            }

            // Output Produce On Clicking = sign
            function produceOutput(){
                var inpData = document.getElementById("inputHere").innerHTML;
                validateInput(inpData);
                
                var result = eval(inpData);
                var noDecimal = countDecimals(result);
                if(noDecimal>=17)
                {
                    document.getElementById('outputHere').innerHTML=result.toFixed(18);
                }
                else{
                    document.getElementById('outputHere').innerHTML=result;
                }
            }

            // validate input for no sign error
            function validateInput(inpData)
            {
                var lastDigit = inpData[inpData.length-1];
                console.log(lastDigit);
                switch(lastDigit)
                {
                    case '+':
                    case '-':
                    case '*':
                    case '/':
                    case '.':
                        {
                            document.getElementById('outputHere').innerHTML='Sign Error';
                            break;
                        }
                }
            }
            // For standard output of result i.e. limited no. of digits after decimal
            function countDecimals(value) {
                if (Math.floor(value) !== value)
                    return value.toString().split(".")[1].length || 0;
                return 0;
            }


            function minus1digit(){
                var inputData = document.getElementById("inputHere").innerHTML;
                var returnInp ='';
                if(inputData.length==1)
                {
                    returnInp = '0';
                }
                else{
                    for(var i=0; i<inputData.length-1;i++)
                    {
                        returnInp+=inputData[i];
                    }
                }
                
                document.getElementById("inputHere").innerHTML=returnInp;
                
            }

            function clrScr(){
                var inphere = document.getElementById('inputHere');
                var outhere = document.getElementById('outputHere');
                inphere.innerHTML='0';
                outhere.innerHTML='';
            }
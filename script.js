const container = document.getElementById('container');

// create grid boxes
for (let i = 0; i < 19; i++) {
    let child = document.createElement('div');
    child.classList.add('child');
    child.classList.add(`box${i}`);
    
    container.append(child);
}


//buttons selections
let box = new Array();

for (let i = 0; i < 19; i++) {
    box[i] = (document.querySelector(`.box${i}`));
}

// buttons filling
box[1].textContent = 7;
box[2].textContent = 8;
box[3].textContent = 9;

box[4].textContent = 'A';
box[5].textContent = 'AC';
box[6].textContent = 4;
box[7].textContent = 5;
box[8].textContent = 6;
box[9].textContent = ' / ';
box[10].textContent = ' - ';
box[11].textContent = 1;
box[12].textContent = 2;
box[13].textContent = 3;
box[14].textContent = ' * ';
box[15].textContent = ' + ';
box[16].textContent = 0;
box[17].textContent = ".";
box[18].textContent = "=";


//buttons functionnalities

for (let i = 1; i < box.length; i++) {
    const element = box[i];
    if (i == 4 || i == 5 || i==18){
        continue;
    }else{
        element.onclick= ()=>{
            box[0].textContent += element.textContent;
        }
    }
}

box[4].onclick = ()=> {
    box[0].textContent= box[0].textContent.slice(0,-1);
}

box[5].onclick = ()=> {
    box[0].textContent= '';
}


// validation or result
box[18].onclick= ()=>{
    
    operators= box[0].textContent.split(' ');
    
    //Multiplication case
    do {
        timesIndex= operators.indexOf('*');
        if(timesIndex>-1){
            res = multiply(operators[timesIndex-1], operators[timesIndex+1]);
            switch (timesIndex) {
                case operators.length-2:
                    operators = operators.slice(0,-2);
                    operators[timesIndex-1]= res;
                    break;
            
                case 1:
                    operators = operators.slice(2);
                    operators[0]= res;
                    break;

                default:
                    operators = operators.slice(0,timesIndex).concat(operators.slice(timesIndex+2));
                    operators[timesIndex-1]= res;
                    break;
            }
        operators.join(' ');
        console.log(operators);
        }
        timesIndex= operators.indexOf('*');
    } while (timesIndex>-1);

    // division case
    do {
        timesIndex= operators.indexOf('/');
        if(timesIndex>-1){
            res = divide(operators[timesIndex-1], operators[timesIndex+1]);
            switch (timesIndex) {
                case operators.length-2:
                    operators = operators.slice(0,-2);
                    operators[timesIndex-1]= res;
                    break;
            
                case 1:
                    operators = operators.slice(2);
                    operators[0]= res;
                    break;
                    
                    default:
                        operators = operators.slice(0,timesIndex).concat(operators.slice(timesIndex+2));
                    operators[timesIndex-1]= res;
                    break;
            }
        operators.join(' ');
        console.log(operators);
        }
        timesIndex= operators.indexOf('/');
    } while (timesIndex>-1);


    // addition case
    do {
        timesIndex= operators.indexOf('+');
        if(timesIndex>-1){
            res = add(operators[timesIndex-1], operators[timesIndex+1]);
            switch (timesIndex) {
                case operators.length-2:
                    operators = operators.slice(0,-2);
                    operators[timesIndex-1]= res;
                    break;
            
                case 1:
                    operators = operators.slice(2);
                    operators[0]= res;
                    break;

                    default:
                    operators = operators.slice(0,timesIndex).concat(operators.slice(timesIndex+2));
                    operators[timesIndex-1]= res;
                    break;
            }
        operators.join(' ');
        console.log(operators);
    }
    timesIndex= operators.indexOf('+');
} while (timesIndex>-1);


// substraction case
do {
    timesIndex= operators.indexOf('-');
    if(timesIndex>-1){
        res = substract(operators[timesIndex-1], operators[timesIndex+1]);
            switch (timesIndex) {
                case operators.length-2:
                    operators = operators.slice(0,-2);
                    operators[timesIndex-1]= res;
                    break;
            
                case 1:
                    operators = operators.slice(2);
                    operators[0]= res;
                    break;

                default:
                    operators = operators.slice(0,timesIndex).concat(operators.slice(timesIndex+2));
                    operators[timesIndex-1]= res;
                    break;
            }
        operators.join(' ');
        console.log(operators);
        }
        timesIndex= operators.indexOf('-');
    } while (timesIndex>-1);
    box[0].textContent += box[18].textContent;
    box[0].textContent += operators[0];
}

//the four basics functions
function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return (b == 0)? 'Error inf': a/b;
}
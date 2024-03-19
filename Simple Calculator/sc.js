function nm0(){
    let n0 = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = n0 + 0;
}

function nm1(){
    let n1 = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = n1 + 1;
}

function nm2(){
    let n2 = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = n2 + 2;
}

function nm3(){
    let n3 = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = n3 + 3;
}

function nm4(){
    let n4 = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = n4 + 4;
}
function nm5(){
    let n5 = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = n5 + 5;
}
function nm6(){
    let n6 = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = n6 + 6;
}
function nm7(){
    let n7 = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = n7 + 7;
}
function nm8(){
    let n8 = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = n8 + 8;
}
function nm9(){
    let n9 = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = n9 + 9;
}

// clear
function Clear(){
    document.getElementById("display").innerHTML = "";
    // document.getElementById("display").innerHTML = n9 + 9;
}

//eraser
function erase(){
    let previous = document.getElementById("display").innerHTML;
    let erasePre = previous.slice(0, -1);
    document.getElementById("display").innerHTML = erasePre;

}


// calculate button
let op;
let fristSave;
function AD(){
    fristSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
    op = 1;
}

function SUB(){
    fristSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
    op = 2;
}

function DIV(){
    fristSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
    op = 3;
}

function MUL(){
    fristSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
    op = 4;
}

function EQ(){
    let secondSave = document.getElementById("display").innerHTML;
    if (op == 1){
        document.getElementById("display").innerHTML = parseInt(fristSave) + parseInt(secondSave);
    }else if (op == 2){
        document.getElementById("display").innerHTML = parseInt(fristSave) - parseInt(secondSave);
    }else if (op == 3){
        document.getElementById("display").innerHTML = parseInt(fristSave) / parseInt(secondSave);
    }else if (op == 4){
        document.getElementById("display").innerHTML = parseInt(fristSave) * parseInt(secondSave);
    }else{
        document.getElementById("display").innerHTML = "invalid";
    }
}
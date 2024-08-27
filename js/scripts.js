


const parolaUno = prompt('Prima parola?');
console.log('prima parola', parolaUno, typeof parolaUno );


const parolaDue = prompt('Prima parola?');
console.log('prima parola', parolaDue.length, typeof parolaDue);

function myArray(a, b) {


    if (a.lenght == b.lenght) {
        return true;
        // console.log('sono lunghe uguali', parolaUno + parolaDue )
        
    }
    else {
        return false;
        // console.log('parola più lunga', parolaPiuLunga )
    }
    
}

if (myArray(parolaUno, parolaDue)) {
    console.log('sono lunghe uguali', parolaUno + parolaDue )
    
} else if (parolaUno.length > parolaDue.length) {
    console.log(parolaUno )
    
}
else {
    console.log(parolaDue )
    
};
function sum(val1, val2) {
    return val1 + val2
}
function findsum(val1, val2){
    val1test = /^\d+$/.test(val1.value)
    val2test = /^\d+$/.test(val2.value)
    if (val1test && val2test){
        document.getElementById("sum").innerHTML = parseInt(val1.value) + parseInt(val2.value);
    } else {
        document.getElementById("sum").innerHTML = "";
        if (!val1test) {
            document.getElementById("sum").innerHTML += val1.value + " is not an integer! <br>"
        }
        if (!val2test){
            document.getElementById("sum").innerHTML += val2.value + " is not an integer! <br>"
        }
    }
}
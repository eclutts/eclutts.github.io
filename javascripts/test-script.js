function myFunction() {
    if (document.getElementById("flipflop").innerHTML == "flip") {
        document.getElementById("flipflop").innerHTML = "flop"
    } else {
        document.getElementById("flipflop").innerHTML = "flip"
    }
    
}
function increment() {
    var str = ""
    let q = document.getElementById("fizbuzz").data-val
    q = q + 1
    document.getElementById("fizbuzz").setAttribute(data-val, q)
    if (q % 3 == 0) {
        str = str.concat("fizz")
    }
    if (q % 5 == 0) {
        str = str.concat("buzz")
    }
    if (str == "") {
        document.getElementById("fizbuzz").innerHTML = q
    } else {
        document.getElementById("fizbuzz").innerHTML = str
    }
}
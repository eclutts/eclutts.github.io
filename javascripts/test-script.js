function myFunction() {
    if (document.getElementById("flipflop").innerHTML == "flip") {
        document.getElementById("flipflop").innerHTML = "flop"
    } else {
        document.getElementById("flipflop").innerHTML = "flip"
    }
    
}
function increment() {
    var str = ""
    let h = document.getElementById("value")
    let q = parseInt(h.getAttribute('val'))
    q = q + 1
    h.setAttribute('val', q.toString())

    if (q % 3 == 0) {
        str = str.concat("fizz")
    }
    if (q % 5 == 0) {
        str = str.concat("buzz")
    }
    if (str == "") {
        document.getElementById("fizbuzz").innerHTML = q.toString()
    } else {
        document.getElementById("fizbuzz").innerHTML = str
    }
}
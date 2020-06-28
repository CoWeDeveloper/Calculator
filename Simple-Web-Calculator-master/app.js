function getNumber(num) {
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = ""
}

function calcResult() {
    var result = document.getElementById("result");
    // result.value = eval(result.value);
    result.value = eval(result.value)
}
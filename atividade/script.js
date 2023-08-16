// atividade 4
alert(15 * 2);
console.log(15 * 2);

// atividade 5
var nome = "João Vitor";
document.getElementById('atividade5').innerHTML= nome;

// atividade 6
function subtracao(a,b){
    resposta = a - b;
    return resposta;
}

// atividade 7
var num1 = 43;
var num2 = 25;
var retorno = subtracao(num1, num2);
document.getElementById('atividade7').innerHTML= retorno;

//atividade 8
function checkTime() {
    let date = new Date();
    let hour = date.getHours();
    let message = "";
  
    if (hour >= 0 && hour < 9) {
      message = "Hora do almoço!";
    } else if (hour >= 9 && hour < 13) {
      message = "hora do almoço!";
    } else if (hour >= 13 && hour < 18) {
      message = "hora do café da tarde!";
    } else {
      message = "hora da janta!";
    }
  
    document.getElementById("atividade8").innerHTML = message;
  }
  checkTime()
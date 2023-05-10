function inserirAluno(total_aulas) {
  var matricula = prompt("Digite a sua matrícula:");

  var nome = prompt("Digite o seu nome:");

  var qt_falta = parseInt(prompt("Digite a quantidade de faltas:"));

  var nota_b1 = parseFloat(prompt("Digite a nota do B1:"));

  var nota_b2 = parseFloat(prompt("Digite a nota do B2:"));

  var media = (nota_b1 + nota_b2) / 2;

  var percentual_faltas = qt_falta / total_aulas;

  if (percentual_faltas > 0.25) {
    var situacao = "Reprovado por Falta";

    var pfinal = "n/a";

    var media_final = media;
  } else {
    if (media >= 7) {
      var situacao = "Aprovado";

      var media_final = media;

      var pfinal = "n/a";
    } else {
      var pfinal = parseFloat(prompt("Digite a nota da Prova Final:"));

      var media_final = (pfinal + media) / 2;

      if (media_final > 5) {
        var situacao = "Aprovado";
      } else {
        var situacao = "Reprovado";
      }
    }
  }

  var tabela = document.querySelector("#tabela");

  var nova_linha = tabela.insertRow();

  nova_linha.insertCell(0).innerText = matricula;
  nova_linha.insertCell(1).innerText = nome;
  nova_linha.insertCell(2).innerText = qt_falta;
  nova_linha.insertCell(3).innerText = nota_b1;
  nova_linha.insertCell(4).innerText = nota_b2;
  nova_linha.insertCell(5).innerText = media;
  nova_linha.insertCell(5).innerText = pfinal;
  nova_linha.insertCell(7).innerText = media_final;
  nova_linha.insertCell(8).innerText = situacao;
}

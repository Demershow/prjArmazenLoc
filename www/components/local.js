var valor = 0;

$(document).on("click", "#salvar", function(){
  localStorage.setItem(valor, $("#nome").val());
  valor++;
});

$(document).on("click", "#buscar", function(){
  var pessoa = localStorage.getItem($("#identificador").val());
  $("#nomeBusca").val(pessoa);
});


$(document).on("click", "#removRegistro", function(){
  localStorage.clear();
  limparcampos();
});


$(document).on("click", "#remover", function(){
  localStorage.removeItem($("#identificador").val());
  limparcampos();
});

function limparcampos(){
  $("#nome").val("");
  $("#nomeBusca").val("");
  $("#identificador").val("");
}
function cara(){
  
}
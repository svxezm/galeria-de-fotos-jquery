$(document).ready(function() {
  console.log(document.querySelector("header button"))
  console.log($("#botao-cancelar"))

  $("header button").click(function() {
    //alert("Expandindo formulário.")
    $("form").slideDown();
  })

  $("#botao-cancelar").click(function() {
    $("form").slideUp();
  })

  $("form").on("submit", function(e) {
    e.preventDefault();
    const enderecoNovaImagem = $("#endereco-imagem-nova").val();
    const novoItem = $("<li style='display: none'></li>");
    $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
    $(`
      <div class="overlay-imagem-link">
        <a href="${enderecoNovaImagem}" target="_blank">Abrir imagem</a>
      </div>
      `).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn();
    $("#endereco-imagem-nova").val("");
  })
})

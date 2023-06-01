document.addEventListener("DOMContentLoaded", function () {
  var card = document.getElementById("card");
  var modal = document.getElementById("modal");

  card.addEventListener("click", function () {
    // Exibe o modal, alterando o estilo do CSS
    modal.style.display = "block";
  });

  // when click on modal, close it
  modal.addEventListener("click", function () {
    modal.style.display = "none";
  });
});

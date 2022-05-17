$(document).ready(function () {
  $('.carousel').carousel({
    interval: 3000
  });
});


$(document).ready(function () {
  $.get("carousel.json", function (data) {
    $("#car-in").html(`
      <div class="carousel-item active">
        <img class="d-block h-100 foto-carousel" src=\" ${data.fotos[0].ubicacion} \" alt=\" ${data.fotos[0].alt} \">
        </div>
    `);

    $("#indic").html('<li data-target="#carousel" data-slide-to="0" class="active"></li>');

    for (let i in data.fotos) {
      if (i > 0) {
        $("#car-in").append(`
          
        <div class="carousel-item">
            <img class="d-block h-100 foto-carousel" src=\" ${data.fotos[i].ubicacion}\" alt=\" ${data.fotos[i].alt}\">
            </div>
          
          `);

        $("#indic").append('<li data-target="#carousel" data-slide-to=\"' + i + '\"></li>');
      }
    }

  }, "json");
});


function fadereserva() {
  $("#reserva").fadeOut(800);
  $("#reserva").fadeIn(800);
}


$(document).ready(function () {
  window.setInterval(fadereserva, 1610);
});





var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');



// Armado de grilla y de paleta colores

var paleta = document.getElementById('paleta')
var grilla = document.getElementById('grilla-pixeles')


function recorrerColores (){
  for (var i=0 ; i<nombreColores.length; i++){
    var nvoDiv = document.createElement('div')
    nvoDiv.className = 'color-paleta';
    nvoDiv.style.backgroundColor = nombreColores[i];
    paleta.appendChild(nvoDiv);
  }
}

recorrerColores();

function armadoGrilla (){
  for (var i=0 ; i<1750; i++){
    var nvoDivDos = document.createElement('div');
    nvoDivDos.className = 'pixelGrilla';
    nvoDivDos.style.backgroundColor = 'light-grey';
   grilla.appendChild(nvoDivDos);
  }
}

armadoGrilla();

// Control de que jQuery está cargado: 
// $(document).ready(function() {
//   alert("jQuery esta funcionando !!");
// });


// Selección de color   https://www.w3schools.com/jquery/jquery_css.asp
$(document).ready(function(){
  $(".color-paleta").click(function(){
    var $colorSeleccionado = $(this).css("background-color");
    var $indicadorDeColor= $('#indicador-de-color');
    $indicadorDeColor.css("background-color", $colorSeleccionado);
  });
});

//Pintado de grilla
$(document).ready(function(){
   $('.pixelGrilla').click(function(){
      var $indicadorDeColor= $('#indicador-de-color').css('background-color');
     $(this).css("background-color", $indicadorDeColor);
  })

})

//Color personalizado
colorPersonalizado.addEventListener('change', (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    var indicadorDeColor = document.getElementById('indicador-de-color');
    indicadorDeColor.style.backgroundColor = colorActual;
  })
);


//Pintar en movimiento. https://stackoverflow.com/questions/7700066/check-if-mousedown-with-an-if-statement

var mouseDown=false;

$(document).ready(function(){
  $('.pixelGrilla').mousedown(function(){
    mouseDown=true;
  }).mouseup(function(){
    mouseDown=false;
  });
});


  $(document).ready(function(){
    $('.pixelGrilla').mouseover(function(){
      if (mouseDown===true) { 
      var $indicadorDeColor= $('#indicador-de-color').css('background-color');
      $(this).css("background-color", $indicadorDeColor);
      }
    })
  })

//Borrar la pantalla   https://github.com/jquery/jquery-color     https://api.jquery.com/animate/ 
$(document).ready(function(){
  $("#borrar").click(function(){
   var $divsGrilla =  $("#grilla-pixeles").find("div.pixelGrilla");
   $($divsGrilla).animate({backgroundColor:'white'},1000);
  });
});


//Cargar superhéroe
$(document).ready(function(){
  $("#batman").click(function(){
    cargarSuperheroe(batman);
  });
});

$(document).ready(function(){
  $("#wonder").click(function(){
    cargarSuperheroe(wonder);
  });
});

$(document).ready(function(){
  $("#flash").click(function(){
    cargarSuperheroe(flash);
  });
});

$(document).ready(function(){
  $("#invisible").click(function(){
    cargarSuperheroe(invisible);
  });
});


//Guardar en png
$(document).ready(function(){
  $('#guardar').click(function(){
    guardarPixelArt();
  })
})
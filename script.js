console.log("Practica 7");
/** Variables Globales */
let map;
let marcadoresArray = [];
let marcador;
let lat = 18.9038592;
let lng = -98.9736192;

function iniciarMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 18.9038592, lng: -98.9736192 },
    zoom: 8,
  });

  marcador = new google.maps.Marker({
    position: { lat: 18.9038592, lng: -98.9736192 },
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: "Marcador 1",
  });
}

function agregarMarcadores() {
  let long = document.getElementById("txtLong").value;
  let lat = document.getElementById("txtLat").value;
  let nombre = document.getElementById("txtNombre").value;

  marcador = new google.maps.Marker({
    position: { lat: parseFloat(lat), lng: parseFloat(long) },
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    icon:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    title: nombre,
  });

  let infowindow = new google.maps.InfoWindow();
  infowindow.setContent(nombre);

  marcador.addListener("click", () => {
    infowindow.open(map, marcador);
  });

  marcadoresArray.push(marcador);
}

function eliminarMarcadores(params) {
  marcadoresArray.forEach((e) => {
    e.setMap(null);
  });
  marcadoresArray = [];
}

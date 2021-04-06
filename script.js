<<<<<<< HEAD
console.log("Practica 7");
/** Variables Globales */
let map;
let btnEliminar;
let marcadoresArray = [];
let markersArray = [];
let lat = 18.8690435;
let lng = -97.0984946;

let nombre = "";
const colors = ["blue", "red", "black", "green", "orange"];
let colorIndex = 0;

/** Clase global para los valores de Latitud y Longitud. */
let myLatLng = { lat: lat, lng: lng };

/** Opciones iniciales del mapa. */
let mapOptions = {
  center: myLatLng,
  zoom: 8,
};

function iniciarMap() {
  btnEliminar = document.getElementById("btnEliminar");
  btnEliminar.disabled = true;
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  let marker = new google.maps.Marker({
    position: myLatLng,
    animation: google.maps.Animation.DROP,
    icon:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    title: "Universidad del Valle de Orizaba",
  });

  marker.setMap(map);

  let infowindow = new google.maps.InfoWindow();
  infowindow.setContent(
    "<strong>" +
      marker.title +
      "</strong><br /><strong> Coordenadas:</strong>" +
      marker.position
  );

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}

function agregarMarcadores() {
  document.getElementById("divTablaMarcadores").innerHTML = "";
  let txtLat = document.getElementById("txtLat").value;
  let txtLng = document.getElementById("txtLng").value;
  let txtNombre = document.getElementById("txtNombre").value;

  lat = txtLat;
  lng = txtLng;
  nombre = txtNombre;
  myLatLng = { lat: parseFloat(lat), lng: parseFloat(lng) };

  const svgMarker = {
    path:
      "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: colors[colorIndex++ % colors.length],
    fillOpacity: 1.0,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };

  let marker = new google.maps.Marker({
    position: myLatLng,
    animation: google.maps.Animation.DROP,
    icon: svgMarker,
    title: nombre,
  });

  marker.setMap(map);

  let infowindow = new google.maps.InfoWindow();
  infowindow.setContent(
    "<strong>" +
      marker.title +
      "</strong><br /><strong> Coordenadas: </strong>" +
      marker.position
  );

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

  /** Agregar Marcador */
  markersArray.push(marker);
  agregarMarcador();
  mostrarTablaMarcadores();
  limpiarInputs();
}

/** Elimina Marcadores del mapa. */
function eliminarMarcadores() {
  markersArray.forEach((e) => {
    e.setMap(null);
  });
  markersArray = [];
  marcadoresArray = [];
  document.getElementById("divTablaMarcadores").innerHTML = "";
  btnEliminar.disabled = true;
}

/** Arma el arreglo de marcadores. */
function agregarMarcador() {
  marcadoresArray.push({
    _nombre: nombre,
    _lat: lat,
    _lng: lng,
  });
  btnEliminar.disabled = false;
}

function mostrarTablaMarcadores() {
  let resultado =
    "<table><thead> <tr> <th>Nombre</th> <th>Latitud</th> <th>Longitud</th> </tr> </thead>";
  resultado += "<tbody>";
  marcadoresArray.forEach((e) => {
    resultado += "<tr>";
    resultado += "<td>" + e._nombre + "</td>";
    resultado += "<td>" + e._lat + "</td>";
    resultado += "<td>" + e._lng + "</td>";
    resultado += "</tr>";
  });
  resultado += "</tbody> </table>";
  document.getElementById("divTablaMarcadores").innerHTML = resultado;
}

/** Limpia los inputs del formularios. */
function limpiarInputs() {
  document.getElementById("txtNombre").value = "";
  document.getElementById("txtLng").value = "";
  document.getElementById("txtLat").value = "";
}
=======
console.log("Practica 7");
/** Variables Globales */
let map;
let btnEliminar;
let marcadoresArray = [];
let markersArray = [];
let lat = 18.8690435;
let lng = -97.0984946;

let nombre = "";
const colors = ["blue", "red", "black", "green", "orange"];
let colorIndex = 0;

/** Clase global para los valores de Latitud y Longitud. */
let myLatLng = { lat: lat, lng: lng };

/** Opciones iniciales del mapa. */
let mapOptions = {
  center: myLatLng,
  zoom: 8,
};

function iniciarMap() {
  btnEliminar = document.getElementById("btnEliminar");
  btnEliminar.disabled = true;
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  let marker = new google.maps.Marker({
    position: myLatLng,
    animation: google.maps.Animation.DROP,
    icon:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    title: "Universidad del Valle de Orizaba",
  });

  marker.setMap(map);

  let infowindow = new google.maps.InfoWindow();
  infowindow.setContent(
    "<strong>" +
      marker.title +
      "</strong><br /><strong> Coordenadas:</strong>" +
      marker.position
  );

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}

function agregarMarcadores() {
  document.getElementById("divTablaMarcadores").innerHTML = "";
  let txtLat = document.getElementById("txtLat").value;
  let txtLng = document.getElementById("txtLng").value;
  let txtNombre = document.getElementById("txtNombre").value;

  lat = txtLat;
  lng = txtLng;
  nombre = txtNombre;
  myLatLng = { lat: parseFloat(lat), lng: parseFloat(lng) };

  const svgMarker = {
    path:
      "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: colors[colorIndex++ % colors.length],
    fillOpacity: 1.0,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };

  let marker = new google.maps.Marker({
    position: myLatLng,
    animation: google.maps.Animation.DROP,
    icon: svgMarker,
    title: nombre,
  });

  marker.setMap(map);

  let infowindow = new google.maps.InfoWindow();
  infowindow.setContent(
    "<strong>" +
      marker.title +
      "</strong><br /><strong> Coordenadas:</strong>" +
      marker.position
  );

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

  /** Agregar Marcador */
  markersArray.push(marker);
  agregarMarcador();
  mostrarTablaMarcadores();
  limpiarInputs();
}

/** Elimina Marcadores del mapa. */
function eliminarMarcadores() {
  markersArray.forEach((e) => {
    e.setMap(null);
  });
  markersArray = [];
  marcadoresArray = [];
  document.getElementById("divTablaMarcadores").innerHTML = "";
  btnEliminar.disabled = true;
}

/** Arma el arreglo de marcadores. */
function agregarMarcador() {
  marcadoresArray.push({
    _nombre: nombre,
    _lat: lat,
    _lng: lng,
  });
  btnEliminar.disabled = false;
}

function mostrarTablaMarcadores() {
  let resultado =
    "<table><thead> <tr> <th>Nombre</th> <th>Latitud</th> <th>Longitud</th> </tr> </thead>";
  resultado += "<tbody>";
  marcadoresArray.forEach((e) => {
    resultado += "<tr>";
    resultado += "<td>" + e._nombre + "</td>";
    resultado += "<td>" + e._lat + "</td>";
    resultado += "<td>" + e._lng + "</td>";
    resultado += "</tr>";
  });
  resultado += "</tbody> </table>";
  document.getElementById("divTablaMarcadores").innerHTML = resultado;
}

/** Limpia los inputs del formularios. */
function limpiarInputs() {
  document.getElementById("txtNombre").value = "";
  document.getElementById("txtLng").value = "";
  document.getElementById("txtLat").value = "";
}
>>>>>>> parent of 26ac7bc (Revert Practica 7)

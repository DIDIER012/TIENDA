function mapa(){
    let coord = {lat:-31.6215505 ,lng: -60.6986118};
    let map = new google.maps.Map(document.getElementById('map'),{
        zoom: 15,
        center: coord
    });
    let marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}
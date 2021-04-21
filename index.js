function initMap() {

    const radius = 14;
    let OutTriangleEdge = radius * 2;

    const BuuDien = { lat: 10.779855257442978, lng: 106.69990481493451}; 
    const VanMieu = { lat: 21.0274173, lng: 105.8354395};

    const BuuDienPoint =  new google.maps.LatLng(BuuDien.lat, BuuDien.lng);
    const VanMieuPoint =  new google.maps.LatLng(VanMieu.lat, VanMieu.lng);

    const BuuDienIcon = './buudien.jpg'; 
    const VanMieuIcon = './vanmieu.jpg';
    
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {lat: 15.8514043,lng: 102.6081569},
    });

    const BuuDienInfo = 'Bưu điện TP. Hồ Chí Minh . ';

    const BuuDienMarker = new google.maps.Marker({
        position: BuuDien,
        map,
        title: 'Bưu điện',
        icon: {
            url: BuuDienIcon,
            scaledSize: new google.maps.Size(50, 50)
        }
    });

    const BuuDienWindow = new google.maps.InfoWindow({
        content: BuuDienInfo,
        position: BuuDienMarker.getPosition()
    });
    
    //Bưu điện - hình tròn
    const BuuDienCircle = new google.maps.Circle({
        strokeColor: "#00FFFF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#00FFFF",
        fillOpacity: 0.35,
        map,
        center: BuuDien,
        radius: radius
    });

    BuuDienMarker.addListener('click', () => {
        myInfoWindow.open(map, BuuDienMarker);
    });

    // Bưu điện - hình tam giác đều ngoại tiếp đường tròn này
    var BDNnT1 = google.maps.geometry.spherical.computeOffset(BuuDienPoint, OutTriangleEdge, 0);
    var BDNnT2 = google.maps.geometry.spherical.computeOffset(BuuDienPoint, OutTriangleEdge, 120);
    var BDNnT3 = google.maps.geometry.spherical.computeOffset(BuuDienPoint, OutTriangleEdge, -120);
    var BDNnT = [BDNnT1, BDNnT2, BDNnT3];
    const TGBDNnT = new google.maps.Polygon({
        path: BDNnT,
        strokeColor: '#FF33FF',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF33FF',
        fillOpacity: 0.35
    });
    TGBDNnT.setMap(map);

    // Bưu điện - hình tam giác nội tiếp đường tròn trên
    var BDNT1 = google.maps.geometry.spherical.computeOffset(BuuDienPoint, radius, 0);
    var BDNT2 = google.maps.geometry.spherical.computeOffset(BuuDienPoint, radius, 120);
    var BDNT3 = google.maps.geometry.spherical.computeOffset(BuuDienPoint, radius, -120);
    var BDNT = [BDNT1, BDNT2, BDNT3];
    const TGBDNT = new google.maps.Polygon({
        path: BDNT,
        strokeColor: '#00EE00',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF33FF',
        fillOpacity: 0.35
    });
    TGBDNT.setMap(map);

    //Văn Miếu
    const VanMieuinfo = 'Văn Miếu được xây dựng năm 1070 dưới thời vua Lý Thánh Tông.';

    const VanMieuMaker = new google.maps.Marker({
        position: VanMieu,
        map,
        title: 'Văn Miếu',
        icon: {
            url: VanMieuIcon,
            scaledSize: new google.maps.Size(50, 50)
        }
    })
    
    const VanMieuinfoWindow = new google.maps.InfoWindow({
        content: VanMieuinfo,
        position: VanMieuMaker.getPosition()
    });

    VanMieuinfoWindow.addListener('click', () => {
        VanMieuinfoWindow.open(map, VanMieuMaker);
    });

    // Văn Miếu - hình tròn
    const VanMieuCircle = new google.maps.Circle({
        strokeColor: "#00FFFF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#00FFFF",
        fillOpacity: 0.35,
        map,
        center: VanMieu,
        radius: radius
    });

    // Văn Miếu - hình tam giác đều nội tiếp đường tròn này
    var VMNnT1 = google.maps.geometry.spherical.computeOffset(VanMieuPoint, OutTriangleEdge, 0);
    var VMNnT2 = google.maps.geometry.spherical.computeOffset(VanMieuPoint, OutTriangleEdge, 120);
    var VMNnT3 = google.maps.geometry.spherical.computeOffset(VanMieuPoint, OutTriangleEdge, -120);
    var VMNnT = [VMNnT1, VMNnT2, VMNnT3];
    const TGVMNnT = new google.maps.Polygon({
        path: VMNnT,
        strokeColor: '#FF33FF',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF33FF',
        fillOpacity: 0.35
    });
    TGVMNnT.setMap(map);

    // Văn Miếu - hình tam giác ngoại tiếp đường tròn trên
    var VMNT1 = google.maps.geometry.spherical.computeOffset(VanMieuPoint, radius, 0);
    var VMNT2 = google.maps.geometry.spherical.computeOffset(VanMieuPoint, radius, 120);
    var VMNT3 = google.maps.geometry.spherical.computeOffset(VanMieuPoint, radius, -120);
    var VMNT = [VMNT1, VMNT2, VMNT3];
    const TGVMNT = new google.maps.Polygon({
        path: VMNT,
        strokeColor: '#FF33FF',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF33FF',
        fillOpacity: 0.35
    });
    TGVMNT.setMap(map);

    directionsRenderer.setMap(map);
    directionsService.route(
    {
        origin: BuuDienMarker.getPosition() , 
        destination:  VanMieuMaker.getPosition(),
        travelMode: google.maps.TravelMode.DRIVING
    },
    (response, status)=>{
    if (status === "OK") {
        directionsRenderer.setDirections(response);
    } else {
        window.alert("Direction request failed due to " + status);
    }
    }
);
google.maps.event.addDomListener(window, "load", initMap);
function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  directionsService.route(
    {
      origin: {
        query: document.getElementById("start").value,
      },
      destination: {
        query: document.getElementById("end").value,
      },
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}
}

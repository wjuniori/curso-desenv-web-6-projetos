/**
 * Created by rgcs on 16/07/15.
 */

// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

window.jQuery || alert('jQuery is required to run this app!');

(function ($) {

    $(document).ready(function () {
        $('form').submit(function (e) {
            e.preventDefault();
            var
                form = $(this),
                data = form.serialize();

            $.ajax({
                'url': 'api/email',
                'type': 'POST',
                'dataType': 'json',
                'data': data
            })
                .done(function (data) {
                    console.log(data);
                    if (data && data.alert) {
                        swal(data.alert.title, data.alert.message, data.alert.template);
                    }
                    form[0].reset();
                });
            return false;
        });
    });

}(jQuery));

/*
 * Google Maps
 */
(function () {

    $(document).ready(function () {

        var map;
        var infoWindow;
        //var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        //var labelIndex = 0;

        function initialize() {
            var mapOptions = {
                zoom: 13,
				disableDoubleClickZoom: false,
                gestureHandling: 'auto',
				panControl: false,
				zoomControl: true,
				streetViewControl: false,
                center: new google.maps.LatLng(-12.916711, -38.326270),
				mapTypeControlOptions: {
				  mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID]
				}
            };

            map = new google.maps.Map(document.getElementById('coverage-area-map'),
                mapOptions);

            // Define the LatLng coordinates for the polygon.
            //Stella Maris
            var coordsA = [
                new google.maps.LatLng(-12.9222,-38.352842),
                new google.maps.LatLng(-12.936882,-38.346041),
                new google.maps.LatLng(-12.951772,-38.338873),
                new google.maps.LatLng(-12.928548,-38.315129),
                new google.maps.LatLng(-12.912643,-38.303189),
                new google.maps.LatLng(-12.911252,-38.304091),
                new google.maps.LatLng(-12.908412,-38.306097),
                new google.maps.LatLng(-12.906598,-38.307352),
                new google.maps.LatLng(-12.908993,-38.310104),
                new google.maps.LatLng(-12.909882,-38.313199),
                new google.maps.LatLng(-12.914462,-38.316858),
                new google.maps.LatLng(-12.924344,-38.323681),
                new google.maps.LatLng(-12.929039,-38.325612),
                new google.maps.LatLng(-12.931695,-38.33235),
                new google.maps.LatLng(-12.930587,-38.337007),
                new google.maps.LatLng(-12.933076,-38.341148),
                new google.maps.LatLng(-12.924438,-38.345375),
                new google.maps.LatLng(-12.920538,-38.347178),
                new google.maps.LatLng(-12.9222,-38.352842)
            ];

            //Aeroporto
            var coordsB = [
                new google.maps.LatLng(-12.920538,-38.347178),
                new google.maps.LatLng(-12.933128,-38.341041),
                new google.maps.LatLng(-12.930639,-38.336899),
                new google.maps.LatLng(-12.931748,-38.332243),
                new google.maps.LatLng(-12.929092,-38.325505),
                new google.maps.LatLng(-12.924344,-38.323681),
                new google.maps.LatLng(-12.917139,-38.31903),
                new google.maps.LatLng(-12.909882,-38.313199),
                new google.maps.LatLng(-12.908993,-38.310104),
                new google.maps.LatLng(-12.907759,-38.308833),
                new google.maps.LatLng(-12.906598,-38.307352),
                new google.maps.LatLng(-12.906776,-38.305721),
                new google.maps.LatLng(-12.903952,-38.306236),
                new google.maps.LatLng(-12.904684,-38.308854),
                new google.maps.LatLng(-12.904099,-38.310227),
                new google.maps.LatLng(-12.904914,-38.313661),
                new google.maps.LatLng(-12.905479,-38.317266),
                new google.maps.LatLng(-12.903388,-38.31748),
                new google.maps.LatLng(-12.900627,-38.32057),
                new google.maps.LatLng(-12.900836,-38.325462),
                new google.maps.LatLng(-12.901144,-38.325827),
                new google.maps.LatLng(-12.901662,-38.326406),
                new google.maps.LatLng(-12.901406,-38.3269),
                new google.maps.LatLng(-12.901066,-38.327222),
                new google.maps.LatLng(-12.900867,-38.327683),
                new google.maps.LatLng(-12.903722,-38.33205),
                new google.maps.LatLng(-12.904344,-38.333402),
                new google.maps.LatLng(-12.904925,-38.334303),
                new google.maps.LatLng(-12.90481,-38.335505),
                new google.maps.LatLng(-12.904622,-38.336921),
                new google.maps.LatLng(-12.903848,-38.33816),
                new google.maps.LatLng(-12.90391,-38.339335),
                new google.maps.LatLng(-12.906039,-38.339453),
                new google.maps.LatLng(-12.906242,-38.341856),
                new google.maps.LatLng(-12.904622,-38.343852),
                new google.maps.LatLng(-12.906316,-38.345547),
                new google.maps.LatLng(-12.907466,-38.346405),
                new google.maps.LatLng(-12.908763,-38.347006),
                new google.maps.LatLng(-12.91052,-38.347135),
                new google.maps.LatLng(-12.917045,-38.345042),
                new google.maps.LatLng(-12.918656,-38.345182),
                new google.maps.LatLng(-12.919576,-38.345718),
                new google.maps.LatLng(-12.920538,-38.347178)
            ];

            //Centro
            var coordsC = [
                new google.maps.LatLng(-12.904622,-38.343852),
                new google.maps.LatLng(-12.906242,-38.341856),
                new google.maps.LatLng(-12.906039,-38.339453),
                new google.maps.LatLng(-12.90391,-38.339335),
                new google.maps.LatLng(-12.903848,-38.33816),
                new google.maps.LatLng(-12.904622,-38.336921),
                new google.maps.LatLng(-12.904925,-38.334303),
                new google.maps.LatLng(-12.904344,-38.333402),
                new google.maps.LatLng(-12.903722,-38.33205),
                new google.maps.LatLng(-12.900867,-38.327683),
                new google.maps.LatLng(-12.901662,-38.326406),
                new google.maps.LatLng(-12.900836,-38.325462),
                new google.maps.LatLng(-12.900627,-38.32057),
                new google.maps.LatLng(-12.902614,-38.318338),
                new google.maps.LatLng(-12.90161,-38.316622),
                new google.maps.LatLng(-12.897238,-38.321064),
                new google.maps.LatLng(-12.896888,-38.31704),
                new google.maps.LatLng(-12.896307,-38.314476),
                new google.maps.LatLng(-12.897871,-38.31152),
                new google.maps.LatLng(-12.898263,-38.310453),
                new google.maps.LatLng(-12.89796,-38.308645),
                new google.maps.LatLng(-12.897615,-38.308318),
                new google.maps.LatLng(-12.892218,-38.30467),
                new google.maps.LatLng(-12.892004,-38.305056),
                new google.maps.LatLng(-12.891873,-38.306),
                new google.maps.LatLng(-12.891486,-38.307674),
                new google.maps.LatLng(-12.889949,-38.310109),
                new google.maps.LatLng(-12.88862,-38.312824),
                new google.maps.LatLng(-12.88632,-38.315839),
                new google.maps.LatLng(-12.885567,-38.318145),
                new google.maps.LatLng(-12.889687,-38.322973),
                new google.maps.LatLng(-12.892239,-38.325848),
                new google.maps.LatLng(-12.89477,-38.328166),
                new google.maps.LatLng(-12.898389,-38.331428),
                new google.maps.LatLng(-12.902436,-38.334088),
                new google.maps.LatLng(-12.902927,-38.334668),
                new google.maps.LatLng(-12.903252,-38.335896),
                new google.maps.LatLng(-12.903408,-38.338712),
                new google.maps.LatLng(-12.903764,-38.34265),
                new google.maps.LatLng(-12.904622,-38.343852)
            ];

            //Vila Praiana
            var coordsD = [
                new google.maps.LatLng(-12.903973,-38.306408),
                new google.maps.LatLng(-12.903638,-38.304949),
                new google.maps.LatLng(-12.900072,-38.309069),
                new google.maps.LatLng(-12.899351,-38.308157),
                new google.maps.LatLng(-12.898629,-38.307256),
                new google.maps.LatLng(-12.897782,-38.305979),
                new google.maps.LatLng(-12.896862,-38.305936),
                new google.maps.LatLng(-12.896234,-38.307352),
                new google.maps.LatLng(-12.897322,-38.308082),
                new google.maps.LatLng(-12.89796,-38.308645),
                new google.maps.LatLng(-12.898305,-38.310603),
                new google.maps.LatLng(-12.896402,-38.314444),
                new google.maps.LatLng(-12.896977,-38.317094),
                new google.maps.LatLng(-12.897259,-38.320988),
                new google.maps.LatLng(-12.90161,-38.316622),
                new google.maps.LatLng(-12.902614,-38.318338),
                new google.maps.LatLng(-12.903388,-38.31748),
                new google.maps.LatLng(-12.905479,-38.317266),
                new google.maps.LatLng(-12.904977,-38.314015),
                new google.maps.LatLng(-12.904099,-38.310227),
                new google.maps.LatLng(-12.904684,-38.308854),
                new google.maps.LatLng(-12.903973,-38.306408)
            ];

            //Ipitanga
            var coordsE = [
                new google.maps.LatLng(-12.892218,-38.30467),
                new google.maps.LatLng(-12.896234,-38.307352),
                new google.maps.LatLng(-12.896862,-38.305936),
                new google.maps.LatLng(-12.897782,-38.305979),
                new google.maps.LatLng(-12.900072,-38.309069),
                new google.maps.LatLng(-12.903638,-38.304949),
                new google.maps.LatLng(-12.903952,-38.306236),
                new google.maps.LatLng(-12.906776,-38.305721),
                new google.maps.LatLng(-12.906598,-38.307352),
                new google.maps.LatLng(-12.912643,-38.303189),
                new google.maps.LatLng(-12.900627,-38.295464),
                new google.maps.LatLng(-12.892218,-38.30467)
            ];

            // Construct the polygon.
            addPolygon(coordsA, '#FFD600', '<h5>Stella Maris/Salvador</h5>');
            addPolygon(coordsB, '#0F9D58', '<h5>Aeroporto/Salvador</h5>');
            addPolygon(coordsC, '#0288D1', '<h5>Centro/Lauro de Freitas</h5>');
            addPolygon(coordsD, '#FF5252', '<h5>Vila Praiana/Lauro de Freitas</h5>');
            addPolygon(coordsE, '#9C27B0', '<h5>Ipitanga/Lauro de Freitas</h5>');

            // Define the LatLng coordinates for the marker.
            //Praia Stella Maris/Pedra do Sal
            var coordsF = new google.maps.LatLng(-12.9426221,-38.3309769);
            //Praia Flamengo/Aleluia
            var coordsG = new google.maps.LatLng(-12.9282131,-38.3157632);
            //Praia Ipitanga
            var coordsH = new google.maps.LatLng(-12.9121929,-38.3037689);

            // Construct the marker.
			addMarker(coordsF, '<h5>Praia Stella Maris/Pedra do Sal</h5>');
            addMarker(coordsG, '<h5>Praia Flamengo/Aleluia</h5>');
            addMarker(coordsH, '<h5>Praia Ipitanga</h5>');

            infoWindow = new google.maps.InfoWindow();
        }

        /** @this {google.maps.Polygon} */
        function showMessage(event,contentString) {

            // Replace the info window's content and position.
            infoWindow.setContent(contentString);
            infoWindow.setPosition(event.latLng);

            infoWindow.open(map);
        }

        function addPolygon(location, color, contentString) {
            // Construct the polygon.
            var polygon = new google.maps.Polygon({
                paths: location,
                strokeColor: color,
                strokeOpacity: 0.8,
                strokeWeight: 3,
                fillColor: color,
                fillOpacity: 0.35
            });
            
            polygon.setMap(map);

            // Add a listener for the click event.
            google.maps.event.addListener(polygon, 'click', function(event) {
                showMessage(event,contentString);
            });
        }
		
		function addMarker(location, contentString) {
			// Add the marker at the location, and add the next-available label
			// from the array of alphabetical characters.
			var marker = new google.maps.Marker({
    			position: location //,
    			//label: labels[labelIndex++ % labels.length]
			});
			
			marker.setMap(map);

            // Add a listener for the click event.
            google.maps.event.addListener(marker, 'click', function(event) {
                showMessage(event,contentString);
            });
		}

        google.maps.event.addDomListener(window, 'load', initialize);
    });
}());
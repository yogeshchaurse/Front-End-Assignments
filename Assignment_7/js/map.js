
	var myCenter=new google.maps.LatLng(13.792574900000000000,100.574202300000020000);

	function initialize()
	{
		var mapProp = {
  		center: myCenter,
  		zoom:9,
  		mapTypeId: google.maps.MapTypeId.ROADMAP
  	};

		var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
		var marker = new google.maps.Marker({
  		position: myCenter, title:'Click to zoom'
  	});

		marker.setMap(map);

		}
		google.maps.event.addDomListener(window, 'load', initialize);

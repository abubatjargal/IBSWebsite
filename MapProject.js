var locations=[
	//Blank Template
	// {
	// 	'NAME':, 
	// 	'LATITUDE':,
	// 	'LONGITUDE':, 
	// 	'ID':,
	// 	'ADDRESS':,
	// },
	{
		'NAME':'Walker & Dunlop', 
		'LATITUDE':42.297126,
		'LONGITUDE':-71.211177, 
		'ID':'walkerdunlop',
		'ADDRESS':'63 Kendrick St, Needham, MA 02494',
		'INDUSTRY': 'Real Estate',
		'SIZE': 'Medium',
		'PHONE': '(781) 707-9300',
		'LOGO': "https://pbs.twimg.com/profile_images/1241274606/Walker-Dunlop-Twitter_400x400.png",
		'WEBSITE' : "https://www.walkerdunlop.com/Pages/default.aspx",
	},
	{
		'NAME':'Sun Life Financial', 
		'LATITUDE':42.314664, 
		'LONGITUDE':-71.236079, 
		'ID':'sunlifefinancial',
		'ADDRESS':'1 Sun Life Executive Park, Wellesley, MA 02481',
		'INDUSTRY': 'Insurance',
		'SIZE': 'Large',
		'PHONE': '(781) 237-6030',
		'LOGO': 'https://pbs.twimg.com/profile_images/479739990507651073/21IOMeQP_400x400.jpeg',
		'WEBSITE' : 'http://www.sunlife.com/',
	},
	{
		'NAME': 'Paytronix Systems', 
		'LATITUDE': 42.363186,
		'LONGITUDE': -71.202605, 
		'ID': 'paytronixsystems',
		'ADDRESS': '80 Bridge St, Newton, MA 02458',
		'INDUSTRY': 'Financial',
		'SIZE': 'Small',
		'PHONE': '(617) 649-3300',
		'LOGO': 'http://www.ifbta.org/digital/wp-content/uploads/2014/11/Logo_Header.png',
		'WEBSITE' : 'http://www.paytronix.com/',	
	},
	{
		'NAME': 'New York Life', 
		'LATITUDE': 42.354846,
		'LONGITUDE': -71.263071, 
		'ID': 'newyorklife',
		'ADDRESS': '800 South St #600, Waltham, MA 02453', 
		'INDUSTRY': 'Insurance',
		'SIZE': 'Medium',
		'PHONE': '(781) 547-5876',
		'LOGO': 'https://pbs.twimg.com/profile_images/459400178143752192/t-PzmG4L.png',
		'WEBSITE' : 'https://www.newyorklife.com/',
	},
	{
		'NAME': 'Ballentine Partners, LLC', 
		'LATITUDE': 42.389622,
		'LONGITUDE': -71.260919, 
		'ID': 'ballentinepartners',
		'ADDRESS': '230 3rd Ave, Waltham, MA 02451',
		'INDUSTRY': 'Financial',
		'SIZE': 'Medium',
		'PHONE': '(781) 314-1300',
		'LOGO': 'https://ballentinepartners.com/wp-content/uploads/2015/04/Ballentine-Partners-Logo.png',
		'WEBSITE' : 'https://ballentinepartners.com/',
	},
	{
		'NAME': 'Perkin Elmer', 
		'LATITUDE': 42.404263, 
		'LONGITUDE': -71.273728, 
		'ID': 'parkinelmer',
		'ADDRESS': '900 Winter St, Waltham, MA 02451',
		'INDUSTRY': 'Financial',
		'SIZE': 'Startup',
		'PHONE': '(781) 663-6900',
		'LOGO': 'http://marmacs.org/2012/graf/logo_PERKINELMER.jpg',
		'WEBSITE' : 'http://www.perkinelmer.com/',
	},
	{
		'NAME': 'Welch\'s', 
		'LATITUDE': 42.459713,
		'LONGITUDE': -71.389900, 
		'ID': 'welchs',
		'ADDRESS': '300 Baker Ave #101, Concord, MA 01742',
		'INDUSTRY': 'Beverages & Foods',
		'SIZE': 'Large',
		'PHONE': '(978) 371-1000',
		'LOGO': 'http://vignette2.wikia.nocookie.net/disney/images/c/cf/Welchs_logo.jpg/revision/latest?cb=20140302061018',
		'WEBSITE' : 'https://www.welchs.com/',
	},
	{
		'NAME': 'EasCorp', 
		'LATITUDE': 42.493889,
		'LONGITUDE': -71.189909, 
		'ID': 'eascorp',
		'ADDRESS': '35 Corporate Dr #300, Burlington, MA 02803',
		'INDUSTRY': 'Financial',
		'SIZE': 'Medium',
		'PHONE': '(781) 505-9837',
		'LOGO': 'https://www.octant.us/uploads/image/logo-eascorp.gif',
		'WEBSITE' : 'http://www.eascorp.org/',
	},
	{
		'NAME': 'Education Development Center', 
		'LATITUDE': 42.370495,
		'LONGITUDE': -71.218971, 
		'ID': 'educationdevelopmentcenter',
		'ADDRESS': '43 Foundry Ave, Waltham, MA 02453',
		'INDUSTRY': 'Education',
		'SIZE': 'Medium',
		'PHONE': '(617) 969-7100',
		'LOGO': 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAgpAAAAJDAwM2VmYTlmLTNlNWItNDQxMy1iZGYyLWUwNzYwNGZhNmQ4ZQ.png',
		'WEBSITE' : 'https://www.edc.org/',
	},
];

var divOpen = null;
var currentID = null;
write_letters();
var testWords;
var adminUser = false;
var modal = document.getElementById('myModal');
var btn = document.getElementById("addButton");
var span = document.getElementById("closeModal");

$(document).ready(function() {
    $('#header').addClass('bounceInDown');

	setTimeout(function(){
		$('#map').removeClass('invisible');
		$('#map').addClass('bounceInRight');
	}, 1000);

    setTimeout(function(){
    	$('#locationContainer').removeClass('invisible');
		$('#locationContainer').addClass('animated bounceInUp');
	}, 500);

	var adminCheck = setInterval(function(){ 
		if(adminUser == false) {
			document.getElementById("addButton").style.display = 'none';
		} else {
			document.getElementById("addButton").style.display = 'block';
		}
	}, 1000);

}); 



// When the user clicks on the button, open the modal 
// btn.onclick = function() {
// 	modal.className = "modal animated";
// 	modal.className += " fadeIn";
//     modal.style.display = "block";
// }

var addCompany = function() {
	alert("hello");
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
// 	modal.className = "modal animated";
// 	modal.className += " fadeOut";
// 	setTimeout(function(){
// 		modal.style.display = "none";
// 	}, 1000);
   
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function write_letters(){
    var items = document.getElementById("locationContainer");

    for (var i = 0; i < locations.length; i++ ) {
    	locationTab = document.createElement("div");
    	locationTab.id = "locationTab";
    	locationTab.className = "locationTab";

    	var location = document.createElement("a");
    	location.innerHTML = locations[i].NAME;
    	location.id = locations[i].ID;
    	location.className = "location";

    	locationTab.appendChild(location);
    	items.appendChild(locationTab);
    }

}

function initMap() {

	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: new google.maps.LatLng(42.364641,-71.264467),
	});


	var contentString, infowindow = null, marker, i;

	for (i = 0; i < locations.length; i++) {  
		var lat = locations[i].LATITUDE;
		var lng = locations[i].LONGITUDE;
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(lat, lng),
			animation: google.maps.Animation.DROP,
			map: map,
			title: locations[i].NAME,
			logo: locations[i].LOGO,
		});

		
		//contentString = ;

		google.maps.event.addDomListener(document.getElementById(locations[i].ID), 'click', (function(marker, i) {
			marker.addListener('click', function() {
				alert("clicked");
		        map.setCenter(marker.getPosition());
		        infowindow = showInfoWindow(i, infowindow, marker);
		        			console.log(infowindow == null);

		        infowindow.open(map, marker);
		    });
			return function() {
				map.panTo(marker.getPosition());
			 	setTimeout(function() {
			 			console.log("1");

			 		infowindow = getInfoWindow(i, infowindow, marker);
			 		showInfoWindow();
					infowindow.open(map, marker);
				},80);
			}
		})(marker, i));
	}
}

function showText() {
	console.log("YAAAAAASSS");
}

function showInfoWindow() {

	setTimeout(function(){
    	$('#title').removeClass('invisible');
		$('#title').addClass('animated bounceInUp');
	},100);
	setTimeout(function(){
    	$('#companyLogo').removeClass('invisible');
		$('#companyLogo').addClass('animated bounceInRight');
	},500);
	setTimeout(function(){
		$('#industry').removeClass('invisible');
		$('#industry').addClass('animated slideInLeft');
	},600);
	setTimeout(function(){
		$('#size').removeClass('invisible');
		$('#size').addClass('animated slideInLeft');
	},700);
	setTimeout(function(){
		$('#phone').removeClass('invisible');
		$('#phone').addClass('animated slideInLeft');
	},800);
	setTimeout(function(){
		$('#address').removeClass('invisible');
		$('#address').addClass('animated slideInLeft');
	},900);
	setTimeout(function(){
		$('#companyLink').removeClass('invisible');
		$('#companyLink').addClass('animated slideInLeft');
	},1000);
	setTimeout(function(){
		$('#links').removeClass('invisible');
		$('#links').addClass('animated slideInLeft');
	},1100);

}

function getInfoWindow(i, infowindow, marker) {

	if (infowindow) {
        infowindow.close();
    }
	contentString = '<div id="infowindow">' 

						+ '<div id="title" class="invisible" >' 
							+ marker.title
						+ '</div>' 

						+'<div id="companyLogo" class="invisible" >'

							+'<img id="logo" src=' + locations[i].LOGO + ' />'

						+'</div>'

						+ '<div id="description">'

							+ '<div id="address" class="invisible" >'
								+ locations[i].ADDRESS 
							+ '</div>'

							+ '<div id="phone" class="invisible" >'
								+ locations[i].PHONE 
							+ '</div>'

						+'</div>'

						+ '<div id="descriptionBottom">'

							+ '<div id="links" class="invisible" >'
								+ '<a id="companyLink" target="_blank" href='+ locations[i].WEBSITE + '>Website</a>'
								+ '</br>'
								+ '<a id="jobLink" target="_blank" href=URL_GOES_HERE>Career Listings</a>'
							+ '</div>'

							+ '<div id="attributes">'

								+ '<div id="industry" class="invisible" >'
										+ '<span>Industry: </span>' 
										+ locations[i].INDUSTRY
								+ '</div>'

								+ '</br>'

								+ '<div id="size" class="invisible" >'
									+ '<span>Size: </span>' 
									+ locations[i].SIZE
								+ '</div>'
							+ '</div>'

						+'</div>'


					+ '</div>';
	infowindow = new google.maps.InfoWindow({
		content: contentString
	})

	return infowindow;

}

function dropPin(i,lat,lng,map) {

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(lat, lng),
		animation: google.maps.Animation.DROP,
		map: map,
		title: locations[i].NAME,
	});

	marker.addListener('click', function() {
        map.setCenter(marker.getPosition());
    });

	return marker;
}

function toggleBounce() {
	if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}

$(".locationTab").click(function (e) {
  // Remove any old one
  $(".ripple").remove();

  // Setup
  var posX = $(this).offset().left,
      posY = $(this).offset().top,
      buttonWidth = $(this).width(),
      buttonHeight =  $(this).height();

  // Add the element
  $(this).prepend("<span class='ripple'></span>");


 // Make it round!
  if(buttonWidth <= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight; 
  }

  // Get the center of the element
  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;


  // Add the ripples CSS and start the animation
  $(".ripple").css({
    width: buttonWidth + 'px',
    height: buttonHeight + 'px',
    top: y + 'px',
    left: x + 'px'
  }).addClass("rippleEffect");
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function authenticate() {
	var username = document.getElementsByName('username')[0].value;
	var password = document.getElementsByName('password')[0].value;
	if(username.trim() == "admin" && password.trim() == "1234") {
		adminUser = true;
		closeNav();
	} else {
		alert("Yikes! Your username and password combination is not correct!");
	}
}

function signOut() {
	adminUser = false;
}







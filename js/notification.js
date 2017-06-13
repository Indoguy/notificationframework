//--------------------------------------------------------------------------//
//----------------------Permission request, on page load--------------------//
//--------------------------------------------------------------------------//
document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

//--------------------------------------------------------------------------//
//-----------------------------Framework Code-------------------------------//
//--------------------------------------------------------------------------//
//var Vp = "first assigned value"
//var myFunction2;

function popup() {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Confirmed!', {
      icon: 'images/up.jpg',
      body: "You are oh so confirmed!",
    });

	  
	  var link = "confirmation.html";
    notification.onclick = function () {
      window.open(link);      
    };
  }
}

function timer() {
	var delay = setTimeout(popup, 2000);
}
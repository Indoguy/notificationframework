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
//var link = "confirmation.html";

function popup(link) {
	console.log(link)
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Confirmed!', {
      icon: 'images/up.jpg',
      body: "You are oh so confirmed!",
    });

    notification.onclick = function () {
      window.open(link);      
    };
  }
}

function timer() {
	var delay = setTimeout(popup, 2000);
}
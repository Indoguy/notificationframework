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
function popup(title, icon, body, link) {
	var title = "Confirmed!";
	var icon = "images/up.jpg";
	var body = "You are oh so confirmed!";
	var link = "confirmation.html";
	
	console.log(link)
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification(title, {
      icon: icon,
      body: body,
    });

    notification.onclick = function () {
      window.open(link);      
    };
  }
}

function timer() {
	var delay = setTimeout(popup, 5000);
}
// Permission request, on page load
document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

function popup() {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Confirmed!', {
      icon: 'images/up.jpg',
      body: "You are oh so confirmed!",
    });

    notification.onclick = function () {
      window.open("confirmation.html");      
    };

  }

}

function timer() {
	var delay = setTimeout(popup, 2000);
}
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
function PopupNotification(title, body, icon, link, delay) {
	this.title = title;
	this.body = body;
	this.icon = icon;
	this.link = link;
	this.delay = delay;
	
	// The normal popup
	this.popup = function () {
		if (Notification.permission !== "granted") Notification.requestPermission();
		else {
			var notification = new Notification(title, {
				icon: icon
				, body: body
			, });
			notification.onclick = function () {
				window.open(link);
			};
		}
	}
	
	// The delayed popup
	this.popupdelay = function () {
		var timer = setTimeout(this.popup, this.delay);
	}
}
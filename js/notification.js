//--------------------------------------------------------------------------//
//-------------------------------Library Code-------------------------------//
//--------------------------------------------------------------------------//
function PopupNotification(title, body, icon, link, delay) {
	this.title = title || 'Default title';
	this.body = body || 'Default Message';
	this.icon = icon || 'images/default.png';
	this.link = link || 'https://github.com/Indoguy/notificationframework';
	this.delay = delay || 1000;
	
	// The normal popup
	this.popup = function () {
		// Permission request, on page load
		document.addEventListener('DOMContentLoaded', function () {
		  if (!Notification) {
			alert('Desktop notifications not available in your browser. Try Chromium.'); 
			return;
		  }

		  if (Notification.permission !== "granted")
			Notification.requestPermission();
		});
		
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
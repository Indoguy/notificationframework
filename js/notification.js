// Notification will pop up after the page is loaded + x ms delay
document.addEventListener('DOMContentLoaded', function(e){
	
	//--------------------------------------------------------//
	//------------Customise the notification here-------------//
	//--------------------------------------------------------//
	
	// Notification title
	var messagetitle = 'Message from The Study Sessions!';
	
	// Notification Message
	var messagebody = 'Click here to sign up for a session.';
	
	// Notification Icon
	var messageicon = 'images/icon.png';
	
	// Notification onclick link
	var messagelink = 'reservation.html';
	
	
	
	var popup;
	e.preventDefault();

	if(Notification.permission === 'default'){
		alert('please allow notifications.');
	} else {
		popup = new Notification(messagetitle,{
			body: messagebody, icon: messageicon
		});
		
		popup.onclick = function(){
			window.open(messagelink, '_blank');
		}
	}
}, false);


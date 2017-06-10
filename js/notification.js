var dnperm = document.getElementById('dnperm');
var dntrigger = document.getElementById('dntrigger');

dnperm.addEventListener('click', function(e){
	e.preventDefault();

	if(!window.Notification){
		alert('Sorry, notifications are not supported.');
	} else {
		Notification.requestPermission(function(p){
			if (p === 'denied'){
				alert('You have denied notifications.');
			} else if (p === 'granted'){
				alert('You have granted notifications.');
			}
		});
	}
});

// Simulate an event, with the trigger button
dntrigger.addEventListener('click', function(e){
	var notify;
	
	e.preventDefault();
	
	if(Notification.permission === 'default'){
		alert('please allow notifications.');
	} else {
		notify = new Notification('New message from The Study Session.',{
			body: 'Click here to sign up for The Study Sessions.',
			icon: 'images/icon.png',
			tag: 'hi'
		});
		
		notify.onclick = function(){
			window.open('reservation.html', '_blank');
		}
	}
});
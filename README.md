NOTIFICATION LIBRARY
===

Made By Ties
---

---

Intro
---

With this framework you're able to pop up a custom notification message, when clicking on a button, on the desired page.

What is customisable?
* The title
* The message
* The icon
* The notification link, this means that when you click on the notification it will guide you to the desired link
* The delay speed, the time it will take for the notification until it pops up

---

How To Implement?
---

### ADD LIBRARY

Include the library at the bottom of your page, inside the body tag.

```<script src="js/notification.js"></script>```

*In this case the notification.js is located inside the js folder.*

### MAKE A NEW OBJECT

```
	<script>
		var confirm = new PopupNotification(
			'Confirmation', 		// Edit title, string
			'Click here to confirm!', 	// Edit Message, string
			'images/up.jpg', 		// Change Icon, string
			'confirmation.html', 		// Change onclick Link, string
			3000				// Edit delay speed [1000 = 1ms], int
		);
	</script>
```

In the code above you can see that I made a new object called "confirm" by doing:

```var confirm = new PopupNotification(```

PopupNotification comes with the following parameters, ('title', 'body', 'icon', 'link', 'delay').

---

### INSTANT NOTIFICATION

By adding *onclick="confirm.popup()"* to your button, your notification will pop up instantly with a buttonclick.

```<button onclick="confirm.popup()">Confirm!</button>```

### DELAYED NOTIFICATION

By adding *onclick="confirm.popupdely()"* to your button, your notification will pop up with the given delay on a buttonclick.
**In this case it is important to define the DELAY parameter!**

```<button onclick="confirm.popupdelay()">Confirm!</button>```

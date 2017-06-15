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

Include the library at the bottom of your page, inside the body tag.

```<script src="js/notification.js"></script>```

*In this case the notification.js is located inside the js folder.*


```
	var confirm = new PopupNotification(
				'Confirmation', 				// Edit title
				'Click here to confirm!', 		// Edit Message
				'images/up.jpg', 				// Change Icon
				'confirmation.html', 			// Change onclick Link
				3000							// Edit delay speed [1000 = 1ms]
			);
```

How To Customise?
---


NOTIFICATION FRAMEWORK
===

Made By Ties
---

---

Intro
---

With this framework you're able to pop up a custom notification message on the desired page.

What is customisable?
* The notification title
* The notification message
* The notification icon
* When you click on the notification, you will be guided to the link you chose

---

How To Implement?
---

Include this script tag at the bottom of your page, inside the body tag.

```<script src="js/notification.js"></script>```

In this case the notification.js is located inside the js folder. It's better if you also put your js files in a seperate folder, it creates a better overview.

How To Customise?
---

To edit the title, change this value ```var messagetitle = 'Message from The Study Sessions!';```

To edit the message, change this value ```var messagebody = 'Click here to sign up for a session.';```

To change the icon, add a png or jpg image here ```var messageicon = 'images/icon.png';```

To change the link where the notification will guide you to, change this value ```var messagelink = 'reservation.html';```
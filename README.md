<h1 align="center">Welcome to One Dionys - Event Handling Library! 👋 </h1>

<p align="center">A library for easily handling events in web applications. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-event-handling-library?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-event-handling-library?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-event-handling-library?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-event-handling-library?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-event-handling-library.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-event-handling-library?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-event-handling-library?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const EventHandler = require('./src/eventHandler');

// Create an instance of EventHandler
const eventHandler = new EventHandler();

// Add event listener
eventHandler.addEventListener('testEvent', function(data) {
    console.log('Event Triggered:', data);
});

// Fire event
eventHandler.fireEvent('testEvent', { message: 'Hello World!' });

// Remove event listener
eventHandler.removeEventListener('testEvent', function(data) {
    console.log('Event Triggered:', data);
});
```

#### Explanation

This library provides a simple way to handle events in JavaScript applications. It allows you to add event listeners, remove event listeners, and trigger events.

* `addEventListener(event, callback)`: Adds an event listener for the specified event.
* `removeEventListener(event, callback)`: Removes an event listener for the specified event.
* `fireEvent(event, data)`: Triggers the specified event, optionally passing data to the event listeners.

#### Return Value

* `addEventListener()`: No return value.
* `removeEventListener()`: No return value.
* `fireEvent()`: No return value.

## 📆 Release Date

* v1.0.0 : 08 March 2024
* v1.0.1 : 11 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Event Handling Library is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Event Handling Library? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**

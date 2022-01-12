importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDRVMFWfoV5vgEI82Qy0jbIOT-q9ZyTWTQ",
    authDomain: "csp-fcm.firebaseapp.com",
    projectId: "csp-fcm",
    storageBucket: "csp-fcm.appspot.com",
    messagingSenderId: "1063903322339",
    appId: "1:1063903322339:web:72f81dfb12fbb4c991a5d6"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notification = JSON.parse(payload.data.notification);
    // Customize notification here
    //const notificationTitle = notification.title;
    const notificationTitle = "Testing";
    // const notificationOptions = {
    //     body: notification.body,
    //     icon: notification.icon
    // };
    const notificationOptions = {
        body: "this is testing"
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});
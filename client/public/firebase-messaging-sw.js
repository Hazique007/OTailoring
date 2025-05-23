importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDPu_C1mmfI4ifLRwvBsP-p6tAiGeEYxoc",
  authDomain: "online-tailoring-2f8a3.firebaseapp.com",
  projectId: "online-tailoring-2f8a3",
  storageBucket: "online-tailoring-2f8a3.firebasestorage.app",
  messagingSenderId: "169332957426",
  appId: "1:169332957426:web:3f3ebe28ecc474002df06b",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

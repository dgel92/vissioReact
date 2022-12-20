importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js")



const firebaseConfig = {
    apiKey: "AIzaSyB_TzxO9IElkQQC85JzlShaWhsOqHSUFTM",
    authDomain: "vissio-9f7f5.firebaseapp.com",
    projectId: "vissio-9f7f5",
    storageBucket: "vissio-9f7f5.appspot.com",
    messagingSenderId: "240102329970",
    appId: "1:240102329970:web:bc4c577fda5474240f7ceb",
    measurementId: "G-L6N1JNZ1XN"
    };

    
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload => {
    console.log("recibiste una compra");
    const notificacionTitle = payload.notificacion.title;
    const notificacionOptions = {
        body: payload.notificacion.body,
        icon: "/logo192.png"

    }

    return self.registration.showNotification(
        notificacionTitle,
        notificacionOptions
    )
})
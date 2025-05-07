// Firebase config — replace with your actual config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
    const username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const email = `${username}@game.local`;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            document.body.innerHTML = `<h2>Welcome ${username}!</h2><p>You are now logged in.</p>`;
            startGame(username);
        })
        .catch(error => {
            document.getElementById("login-status").textContent = "Login failed. Check your credentials.";
            console.error("Login error:", error.message);
        });
}

function startGame(username) {
    // Init your game logic here (like Phaser or canvas setup)
    console.log("Start game as:", username);
}

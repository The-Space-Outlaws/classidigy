// Prodigy Rewritten — Firebase client config for the "classdigy" project.
// This is a client-side web config, NOT a secret: Firestore security rules are
// what restrict reads/writes to the owning user (players/{uid}, saves/{uid}).
// Multiplayer relay (new in this fork). Point this at the Render deployment
// from render.yaml in the repo root, e.g.
//   "https://old-prodigy-relay.onrender.com/"
// For local development with server/ running, use:
//   "http://127.0.0.1:3100/"
// Leave "" to keep multiplayer disabled: signed-in players will see
// "multiplayer unavailable" and play offline (their data still syncs).
window.PRODIGY_RELAY_URL = "http://127.0.0.1:3100/";

window.FIREBASE_CONFIG = {
	apiKey: "AIzaSyCA3M-GSB9nVajwQpoSOga_aQHclwk_Ng8",
	authDomain: "classdigy.firebaseapp.com",
	projectId: "classdigy",
	storageBucket: "classdigy.firebasestorage.app",
	messagingSenderId: "30943947736",
	appId: "1:30943947736:web:384f814f08d71830bee0ad"
};

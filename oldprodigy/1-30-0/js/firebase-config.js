// Prodigy Rewritten — Firebase client config for the "classdigy" project.
// This is a client-side web config, NOT a secret: Firestore security rules are
// what restrict reads/writes to the owning user (players/{uid}, saves/{uid}).
// Multiplayer relay (new in this fork). Deployed on Render, see render.yaml
// in the repo root and server/README.md.
//   Production: "https://old-prodigy-relay.onrender.com/"
//   Local dev (server/ running): "http://127.0.0.1:3100/"
// For local development, swap in the local URL instead.
// Smart relay resolution: if explicitly requested via ?relay=..., or on localhost, use local; otherwise use production Render relay.
if (window.location.search.indexOf("relay=render") >= 0 || window.location.search.indexOf("relay=prod") >= 0) {
	window.PRODIGY_RELAY_URL = "https://old-prodigy-relay.onrender.com/";
} else if (window.location.search.indexOf("relay=") >= 0) {
	var match = window.location.search.match(/[?&]relay=([^&]+)/);
	window.PRODIGY_RELAY_URL = match ? decodeURIComponent(match[1]) : "http://127.0.0.1:3100/";
} else if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
	window.PRODIGY_RELAY_URL = "http://127.0.0.1:3100/";
} else {
	window.PRODIGY_RELAY_URL = "https://old-prodigy-relay.onrender.com/";
}

window.FIREBASE_CONFIG = {
	apiKey: "AIzaSyCA3M-GSB9nVajwQpoSOga_aQHclwk_Ng8",
	authDomain: "classdigy.firebaseapp.com",
	projectId: "classdigy",
	storageBucket: "classdigy.firebasestorage.app",
	messagingSenderId: "30943947736",
	appId: "1:30943947736:web:384f814f08d71830bee0ad"
};

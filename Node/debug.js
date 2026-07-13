const debug = require("debug");

const debugServer = debug("app:server");
const debugDatabase = debug("app:database");
const debugAuth = debug("app:auth");

debugServer("Server starting on port %d", 3000);
debugDatabase("Connected to database: %s", "mongodb://localhost");
debugAuth("User %s authenticated", "john@example.com")
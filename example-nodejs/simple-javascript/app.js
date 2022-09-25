const Express = require("express");
const Auth = require("../");
const app = Express();

/**
 * Initialize auth client
 */
const helloAuth = new Auth([
  {
    name: "app1",
    url: "http://localhost:5001",
    clientId: "6330b2cb11af8b2fe7c33394",
    clientSecret: "29420246-4601-4bfa-835e-1f64fdf8a832",
    redirectUri: "http://localhost:3000/callback",
    processor: (profile, next) => {

      /** get access to entire data here */
      console.log("received user profile > ", profile);
      next();
    },
    endpoint: {
      auth: "account/o/login",
      profile: "account/o/access",
    },
  },
]);

/** homepage */
app.get("/", (req, res) => {
  res.json({
    alive: true,
    login: "open /login to initiate auth",
  });
});

/** start helloAuth login process */
app.get("/login", helloAuth.authenticate("app1"));


/** receive and process data */
app.get("/callback", helloAuth.callback("app1"), (req, res) => {
  res.json("user logged in");
});

/** listen for incoming connections */
app.listen(3000, () => console.log("Listening on http://localhost:3000"));

module.exports = app;

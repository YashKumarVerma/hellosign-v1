const Auth = require("../");
import express from "express";
const app = express();

/**
 * Initialize auth client
 */
const helloAuth = new Auth([
  {
    name: "server1",
    url: "http://localhost:5000",
    clientId: "600ee6ec924dd75267384cb4",
    clientSecret: "986727d0-c253-4adb-a9b8-c233a89cdb25",
    redirectUri: "http://localhost:3000/callback",
    processor: (profile: any, next: any) => {
      /**
       * operate with data received from user
       */
      console.log("received user profile > ", profile);
      next();
    },
    endpoint: {
      auth: "account/o/login",
      profile: "account/o/access"
    }
  }
]);

/** homepage */
app.get("/", (req, res) => {
  res.json({
    alive: true,
    login: "open /login to initiate auth"
  });
});

/** adding login */
app.get("/login", helloAuth.authenticate("server1"));

/** specify the url to receive callback */
app.get("/callback", helloAuth.callback("server1"), (req, res) => {
  res.json("user logged in");
});

/** listen for incoming connections */
app.listen(3000, () => console.log("Listening on http://localhost:3000"));

export default app;

const express = require("express");
const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
const socketIO = require("socket.io");
const passport = require("./src/service/authGoogle");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const connectDB = require("./src/config/database");
const routes = require("./src/router/index");
const { corsWhiteList } = require("./src/router/cors");
const { logVisit } = require("./src/controller/admin/adminController");
const driverLocationWS = require("./src/socketHandler/driverLocationWS");
const socketHandle = require("./src/socketHandler/socketHandle");
const notificationWS = require("./src/socketHandler/notificationHandler");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3005;

// CORS Middleware
app.use(corsWhiteList);
app.use(cookieParser());

// Session Middleware
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Chỉ set secure cookie khi ở production
    },
  })
);

// Passport Initialization
app.use(passport.initialize());
app.use(passport.session());

// Body Parser
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Logging Visits
app.use(logVisit);

// Routes
routes(app);

// Create HTTP server and WebSocket
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "https://xetai-fe.vercel.app", // CORS Origins
    methods: ["GET", "POST", "PUT", "PATCH"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    preflightContinue: true,
  },
});

// Attach io to requests
app.use((req, res, next) => {
  req.io = io; // Attach socket.io instance to request object
  next();
});

// WebSocket Handlers
driverLocationWS(io);
socketHandle(io);
notificationWS(io);

// Connect to MongoDB and Start Server
connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");
    server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
  });

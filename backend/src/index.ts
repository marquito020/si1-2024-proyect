import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import http from "http";
import { dbConnet } from "./config/mongoose";
import { Server } from "socket.io";

import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import roleRoutes from "./routes/role.routes";
import personRoutes from "./routes/person.routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/persons", personRoutes);

app.get("/", (req, res) => {
    res.send("Hello world");
});

const server = http.createServer(app);
export const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

async function startServer() {
    try {
        await dbConnet();
        console.log("Database connected");
        io.on("connection", (socket) => {
            console.log("a user connected");

            socket.on("hello from client", () => {
                console.log("user disconnected");
            });

            socket.on("userConnected", (user) => {
                console.log("user", user);
                socket.broadcast.emit("userConnected", user);
            });
        });

        io.on("hello-from-client", (...args) => {
            console.log(args);
        });

        const PORT = process.env.PORT || 3000;

        server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    } catch (error) {
        console.log("Error connecting to database");
        console.log(error);
    }
}

startServer();

/*
export const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

console.log("Connecting to database...");

        io.on("connection", (socket) => {
            console.log("a user connected");

            socket.on("hello from client", () => {
                console.log("user disconnected");
            });
        });

        io.on("hello-from-client", (...args) => {
            console.log(args);
        });

        const PORT = process.env.PORT || 3000;

        server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    } catch (error) {
        console.log("Error connecting to database");
        console.log(error);
    }
}

startServer(); */
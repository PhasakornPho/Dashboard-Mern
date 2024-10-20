import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDb from "./mongodb/connect.js";
import userRouter from "./routes/user.routes.js";
import propertyRouter from "./routes/property.routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/properties", propertyRouter);

const startServer = async (req, res, next) => {
	try {
		connectDb(process.env.MONGO_URL);
		app.listen(process.env.PORT || 8080, () =>
			console.log(`Server running on port ${process.env.PORT}`),
		);
	} catch (error) {
		console.log(error);
		next(error);
	}
};

startServer();

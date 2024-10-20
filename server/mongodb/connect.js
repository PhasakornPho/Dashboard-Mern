import { mongoose } from "mongoose";

const connectDb = async (url) => {
	mongoose.set("strictQuery", true);
	try {
		await mongoose.connect(url);
		console.log("Connected to MongoDB successfully.");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error.message);
	}
};

export default connectDb;

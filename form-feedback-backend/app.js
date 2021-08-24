import express from "express";
//DB Connection
import "./dbConnect.js";
const port = 5000;

//import the model
import formDataModel from "./models/formData.js";

const app = express();
app.use(express.json());

app.post("/form", async (req, res) => {
  try {
    const formdata = new formDataModel(req.body);
    console.log(formdata);
    await formdata.save();

    res.status(200).json({ success: "Form submitted successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Server Error. Try Again." });
  }
});

app.listen(port, () => {
  console.log(`The Server started at ${port}`);
});

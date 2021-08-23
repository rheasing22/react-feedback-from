import mongoose from "mongoose";

async function dbConnect() {
  try {
    await mongoose.connect(
      `mongodb+srv://rheasingh:rheasingh123@cluster.xhpn1.mongodb.net/reactfeedback?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`Mongo DB Connected`);
  } catch (err) {
    console.error(err);
  }
}
dbConnect();

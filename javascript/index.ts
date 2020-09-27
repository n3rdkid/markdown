
import { app } from "./app";
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    // if (!process.env.JWT_KEY) {
    //   throw new Error("JWT must be defined!");
    // }
  } catch (error) {
    console.log(error);
  }
  app.listen(PORT, () => {
    console.log(`JavaScript service listening at port :: ${PORT} !!`);
  });
};
start();

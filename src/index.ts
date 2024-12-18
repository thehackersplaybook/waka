import app from "./app";
import { Constants } from "./constants";

const port = process.env.PORT || Constants.DEFAULT_APP_PORT;

app.listen(port, () => {
  console.log(`Waka Server is running on http://localhost:${port}`);
});

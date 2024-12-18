import app from "./app";
import { Constants } from "./constants";
import { DetectionRouter } from "./routers";

const port = process.env.PORT || Constants.DEFAULT_APP_PORT;

app.use("/api/v1/ai-detection", DetectionRouter);

app.listen(port, () => {
  console.log(`Waka Server is running on http://localhost:${port}`);
});

import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(process.cwd(), "public")));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/testingcicd', (req, res) => {
  res.send('Testing CI/CD pipeline for infrastructure deployment!')
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const express = require('express');
const { OpenAI } = require('openai');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 150,
      temperature: 0.7,
    });
    res.json(response.data.choices[0].text.trim());
  } catch (error) {
    console.error(error);
    res.status(500).send("Error communicating with OpenAI API");
  }
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});






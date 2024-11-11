const express = require('express');
//const { OpenAI } = require('openai');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

//const openai = new OpenAI(process.env.OPENAI_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.API_KEYgem);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
   

app.use(cors());
app.use(express.json());

// open AI chatGPT
// app.post("/api/chat", async (req, res) => {
//   const { prompt } = req.body;
//   try {
//     const response = await openai.completions.create({
//       model: "text-davinci-003",
//       prompt: prompt,
//       max_tokens: 150,
//       temperature: 0.7,
//     });
//     res.json(response.data.choices[0].text.trim());
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error communicating with OpenAI API");
//   }
// });

//google AI
app.post("/api/chatGem", async (req, res) => {
  const { prompt } = req.body;
  try {
    
   
   if (!prompt) prompt  = "Write a story about a magic backpack.";
   
   const result = await model.generateContent(prompt);
   console.log(result.response.text());
   return result.response.text();
    
   
   

    
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Error communicating with AI API", ERROR);
  }
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});






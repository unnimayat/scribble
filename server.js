const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const  {Configuration,OpenAIApi}=require("openai");

const config=new Configuration({
    apiKey:"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",
})

const openai=new OpenAIApi(config);

const app=express();

app.use(bodyParser.json());
app.use(cors());

app.post("/chat",async(req,res)=>{
    const {newPrompt}=req.body;

    const completion=await openai.createCompletion({
        model:"text-davinci-003",
        max_tokens:512,
        temperature:0.5,
        prompt:newPrompt,

    });
    res.send(completion.data.choices[0].text);
});
const PORT=8020;
app.listen(PORT,()=>{
    console.log(`server running on :${PORT}`);
});
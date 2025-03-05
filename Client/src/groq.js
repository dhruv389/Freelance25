import Groq from 'groq-sdk';
const key=import.meta.env.APIKEY || "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"
const groq = new Groq({ apiKey: key,dangerouslyAllowBrowser:true }); // Replace with your actual API key [4, 5]


export const  getGroqCompletion= async (data1,data2)=> {
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [{ role: 'user', content:   "the project uploaded by client on our freelancing website " +
            data2 +
            "and the freelancer has skills and previous experience in data : " +
            data1 +
            "Can you make proposal for the project from the freelancer side and in this proposal you can include your previous work and skills which was required in your project and experience and why you are the best fit for this project. And Please make sure that all text should be in plain text format.", }],
            model: 'llama3-70b-8192', // Or your preferred model
            temperature: 0.7, // Adjust as needed
        });
        return chatCompletion.choices[0].message.content;
    } catch (error) {
        console.error("Error calling Groq API:", error);
        return null;
    }
}
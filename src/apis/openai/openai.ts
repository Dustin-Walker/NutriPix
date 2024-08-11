import {openAI} from "../keys.ts";
import axios from "axios";

const openai = axios.create({
    baseURL: 'https://api.openai.com/v1',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openAI}`,
    },
});

export const getOpenAIResponse = async (prompt: string) => {
    const response = await openai.post('/chat/completions', {
        model: "gpt-3.5-turbo",
        max_tokens: 100,
        messages: [
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": prompt
            }
        ]
    });
    return response.data;
};

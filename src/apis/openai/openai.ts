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
                "content": "You are a nutrition analyzer. You will look at a description of some food and provide an accurate estimation of calories using the JSON schema {totalCalories: number, lipidCalories: number, carbohydrateCalories: number, proteinCalories: number}."
            },
            {
                "role": "user",
                "content": prompt
            }
        ]
    });
    return response.data;
};

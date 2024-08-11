import {openAI} from "../keys.ts";
import axios from "axios";

const openai = axios.create({
    baseURL: 'https://api.openai.com/v1',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openAI}`,
    },
});

export const getOpenAIResponse = async (imageData: string) => {
    const response = await openai.post('/chat/completions', {
        model: "gpt-4o-mini",
        max_tokens: 100,
        response_format: {
            "type": "json_object"
        },
        messages: [
            {
                "role": "system",
                "content": "You are a nutrition analyzer."
            },
            {
                "role": "user",
                "content": [
                    {
                        type: "text",
                        text: "Determine what type of food this is and provide an accurate estimation of calories using the JSON schema {totalCalories: number, lipidCalories: number, carbohydrateCalories: number, proteinCalories: number}."
                    },
                    {
                        type: "image_url",
                        image_url: {
                            url: imageData,
                        },
                    },
                ]
            },

        ]
    });
    return response.data;
};

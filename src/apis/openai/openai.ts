import axios from "axios";

const openai = axios.create({
    baseURL: 'https://api.openai.com/v1',
    headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        'Authorization': `Bearer ${window.keys?.openAI}`,
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
                        text: "Determine what type of food this is and provide a brief description and an accurate estimation of calories using the JSON schema {description: string, totalCalories: number, lipidCalories: number, carbohydrateCalories: number, proteinCalories: number}."
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

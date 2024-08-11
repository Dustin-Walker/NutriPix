import MobilePageWrapper from "../../components/MobilePageWrapper/MobilePageWrapper.tsx";
import {getOpenAIResponse} from "../../apis/openai/openai.ts";
import {useState} from "react";

const onSnapMeal = async (setNutritionInfo: any) => {
    const response = await getOpenAIResponse('write a haiku about cake');
    const responseMessage = response.choices[0].message.content;
    setNutritionInfo(responseMessage);
}

const Snap = () => {
    const [nutritionInfo, setNutritionInfo] = useState<string | undefined>()

    return (
        <MobilePageWrapper>
            <button className="snap-meal-btn" onClick={() => onSnapMeal(setNutritionInfo)}>Snap a Meal</button>
            {
                nutritionInfo &&
                <section className="nutrition-estimate">
                    {nutritionInfo}
                </section>
            }
        </MobilePageWrapper>
    )
}

export default Snap;

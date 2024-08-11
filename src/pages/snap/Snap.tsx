import MobilePageWrapper from "../../components/MobilePageWrapper/MobilePageWrapper.tsx";
import {getOpenAIResponse} from "../../apis/openai/openai.ts";
import {useState} from "react";

interface NutritionInfo {
    totalCalories: number,
    lipidCalories: number,
    carbohydrateCalories: number,
    proteinCalories: number
}

const fileDataURL = (file: any) => new Promise<string>((resolve,reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve( fr.result as string);
    fr.onerror = reject;
    fr.readAsDataURL( file)
});

const onSnapMeal = async (event: any, setNutritionInfo: any) => {
    const imageFile = event.target.files[0];
    const imageBase64: string = await fileDataURL(imageFile);
    const response = await getOpenAIResponse(imageBase64);
    const responseMessage = response.choices[0].message.content;
    const nutritionInfo: NutritionInfo = JSON.parse(responseMessage);
    setNutritionInfo(nutritionInfo);
}

const Snap = () => {
    const [nutritionInfo, setNutritionInfo] = useState<NutritionInfo | undefined>(undefined)

    return (
        <MobilePageWrapper>
            Snap a Meal
            <input
                type="file"
                name="food-image"
                className="snap-meal-btn"
                onChange={
                    (event) => onSnapMeal(event, setNutritionInfo)
                }
            />
            {
                nutritionInfo &&
                <section className="nutrition-estimate">
                    <div>{`Total calories: ${nutritionInfo.totalCalories}`}</div>
                    <div>{`Carbohydrate calories: ${nutritionInfo.carbohydrateCalories}`}</div>
                    <div>{`Lipid calories: ${nutritionInfo.lipidCalories}`}</div>
                    <div>{`Protein calories: ${nutritionInfo.proteinCalories}`}</div>
                </section>
            }
        </MobilePageWrapper>
    )
}

export default Snap;

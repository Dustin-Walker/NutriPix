import MobilePageWrapper from "../../components/MobilePageWrapper/MobilePageWrapper.tsx";
import {getOpenAIResponse} from "../../apis/openai/openai.ts";
import {useState} from "react";
import Title from "../../components/Title/Title.tsx";
import "./Snap.scss";

interface NutritionInfo {
    totalCalories: number,
    lipidCalories: number,
    carbohydrateCalories: number,
    proteinCalories: number
    description: string;
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
            <article className="snap-meal">
                <Title title="Snap a Meal" />
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
                        <div className="nutrition-data">
                            {nutritionInfo.description}
                        </div>
                        <div className="nutrition-data">
                            {`Total calories: ${nutritionInfo.totalCalories}`}
                        </div>
                        <div className="nutrition-data">
                            {`Carbohydrate calories: ${nutritionInfo.carbohydrateCalories}`}
                        </div>
                        <div className="nutrition-data">
                            {`Lipid calories: ${nutritionInfo.lipidCalories}`}
                        </div>
                        <div className="nutrition-data">
                            {`Protein calories: ${nutritionInfo.proteinCalories}`}
                        </div>
                    </section>
                }
            </article>
        </MobilePageWrapper>
    )
}

export default Snap;

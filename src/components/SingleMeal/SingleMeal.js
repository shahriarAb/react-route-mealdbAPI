import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const SingleMeal = () => {
    const { mealId } = useParams();
    const history = useHistory();
    const [meal, setMeal] = useState({});

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]));
    }, []);

    const handleAllMeals = () => {
        history.push('/restaurent');
    }

    return (
        <div className="flex justify-center">
            <div className="border-2 border-gray-300 rounded-md shadow-lg lg:w-1/2 md:w-3/4 sm:w-full my-4 p-2">
                <div className="flex justify-center">
                    <img className="rounded-lg" src={meal.strMealThumb} alt="" />
                </div>
                <div>
                    <h2 className="font-bold text-3xl">{meal.strMeal}</h2>
                    <small>Category: <span className="font-bold">{meal.strCategory}</span></small>
                    <br />
                    <small>Category: <span className="font-bold">{meal.strArea}</span></small>
                    <p className="px-4 text-left"><span className="underline font-semibold">Details:</span> {meal.strInstructions}</p>
                    <div className="flex justify-evenly">
                        <button
                            className="bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-4 rounded-lg text-white font-semibold shadow-md my-2"
                            onClick={handleAllMeals}
                        >&lt; See All Meals</button>
                        <button
                            className="bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 py-2 px-4 rounded-lg text-white font-semibold shadow-md my-2"
                        ><a target="blank" href={meal.strYoutube}>Recipee and Review</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMeal;
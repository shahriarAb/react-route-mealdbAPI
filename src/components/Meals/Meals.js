import React from 'react';
import { useHistory } from 'react-router';

const Meals = (props) => {
    const { idMeal, strMeal, strMealThumb, strCategory, strInstructions } = props.meal

    let history = useHistory();
    const url = `/singlemeal/${idMeal}`;
    const singleMealDetail = () => {
        history.push(url);
    }

    return (
        <div className="border-2 border-purple-100 rounded-lg shadow-lg">
            <div>
                <img className="rounded-lg" src={strMealThumb} alt="" />
            </div>
            <div>
                <h2 className="font-bold text-2xl">{strMeal}</h2>
                <small>Category: {strCategory}</small>
                <p className="px-4 text-left"><span className="underline">Details:</span> {strInstructions.slice(0, 200)}...</p>
                <button
                    className="bg-purple-600 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 py-2 px-4 rounded-lg text-white font-semibold shadow-md my-2"
                    onClick={singleMealDetail}
                >See more...</button>
            </div>
        </div>
    );
};

export default Meals;
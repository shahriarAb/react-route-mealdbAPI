import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';

const Restaurent = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText]);

    const handleSearch = e => {
        setSearchText(e.target.value);
    }

    return (
        <div>
            <input
                className="focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-transparent border-2 shadow-inner shadow-mg rounded-md w-2/5 p-2 mb-2"
                placeholder="search meals"
                onChange={handleSearch} />
            <div className="grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 mx-4">
                {
                    meals.map(meal => <Meals
                        key={meal.idMeal}
                        meal={meal}
                    ></Meals>)
                }
            </div>
        </div>
    );
};

export default Restaurent;
'use client'

import axios from "axios"
import { useState } from "react";

export default function Search() {

    const [meals, setMeals] = useState([])
    const [MealOfClick, setMealOfClick] = useState(null)
    async function searchByName(value) {
        try {
            let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
            console.log(data.meals);
            setMeals(data.meals)
        } catch (error) {
            console.log(error);

        }
    }


    async function searchByLatter(value) {
        try {
            let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`)
            console.log(data.meals);
            setMeals(data.meals)
        } catch (error) {
            console.log(error);

        }
    }


    return (
        <>
            <div className="searchCatogery  m-auto my-4 ">
                <div className="container w-75">
                    <div className="my-4">
                        <div className="row">
                            <div className="col-md-6">
                                <input onChange={(e) => searchByName(e.target.value)} id='searchByName' type="text" placeholder="Search By Name" className="w-100 form-control bg-transparent text-white" />
                            </div>
                            <div className="col-md-6">
                                <input onChange={(e) => searchByLatter(e.target.value)} type="text" maxLength="1" pattern="^[0-9a-zA-Z]$" id='searchByLetter' placeholder="Search By First Letter" className="w-100 form-control bg-transparent text-white" />
                            </div>
                        </div>
                    </div>



                </div>


                <div className="container  my-3">
                    <div className="row row-gap-3">
                        {meals?.map((meal, index) => <div onClick={() => setMealOfClick(meals[index])} key={meal.idMeal} className="cursor meal  col-lg-3 col-md-6 overflow-hidden ">

                            <div data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                <div >
                                    <div className="w-100 position-relative ">
                                        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-100 rounded-4 " />
                                        <div className="text-meal   rounded-4 w-100  d-flex align-items-center  ">
                                            <p className="fs-2 ps-1 text-black">{meal.strMeal}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        )}

                        <div className="modal bg-black fade w-100 " id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className='modal-dialog vh-100 w-100 '>
                                <div className="modal-content vh-100 w-100">

                                    <div >
                                        <div className="container">
                                            {MealOfClick ? <div className="row">
                                                <div className="col-md-4">
                                                    <div className="img-detailes w-100 ">
                                                        <img src={MealOfClick?.strMealThumb} className="w-100 rounded-3" alt={MealOfClick?.strMeal} />
                                                    </div>
                                                    <p className="fs-3 text-white fw-fw-semibold ">{MealOfClick?.strMeal}</p>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="text-white d-flex justify-content-between align-items-center">
                                                        <h2 className="text-white">Instructions</h2>
                                                        <i data-bs-dismiss="modal" className="fa-solid text-white cursor fa-xmark fa-2x"></i>
                                                    </div>
                                                    <p className="text-white ">{MealOfClick?.strInstructions}</p>
                                                    <p className="text-white fs-2"><span >Area :</span><span>{MealOfClick?.strArea}</span></p>
                                                    <p className="text-white fs-2"><span >Category : </span><span>{MealOfClick?.strCategory}</span></p>
                                                    <p className="text-white fs-2">Recipes :</p>
                                                    <div className="flex " >
                                                        <span className="badge text-bg-info p-2 fs-5 m-2">{MealOfClick?.strMeasure1} {MealOfClick?.strIngredient1}</span>
                                                        <span className="badge text-bg-info p-2 fs-5 m-2">{MealOfClick?.strMeasure2} {MealOfClick?.strIngredient2}</span>
                                                        <span className="badge text-bg-info p-2 fs-5 m-2">{MealOfClick?.strMeasure3} {MealOfClick?.strIngredient3}</span>
                                                        <span className="badge text-bg-info p-2 fs-5 m-2">{MealOfClick?.strMeasure4} {MealOfClick?.strIngredient4}</span>
                                                        <span className="badge text-bg-info p-2 fs-5 m-2">{MealOfClick?.strMeasure5} {MealOfClick?.strIngredient5}</span>
                                                        <span className="badge text-bg-info p-2 fs-5 m-2">{MealOfClick?.strMeasure6} {MealOfClick?.strIngredient6}</span>
                                                        <span className="badge text-bg-info p-2 fs-5 m-2">{MealOfClick?.strMeasure7} {MealOfClick?.strIngredient7}</span>
                                                        {MealOfClick?.strMeasure8 != "" ? <span className="badge text-bg-info p-2 fs-5 m-2">{MealOfClick?.strMeasure8} {MealOfClick?.strIngredient8}</span> : ''}
                                                        <p className="text-white fs-2">Tags :</p>
                                                        <button type="button" className="btn btn-success me-2"><a className="text-white" onClick={() => { window.open(MealOfClick?.strSource, '_blank') }}>Source</a></button>
                                                        <button type="button" className="btn btn-danger"><a className="text-white" onClick={() => { window.open(MealOfClick?.strYoutube, '_blank') }}>Youtube</a></button>
                                                    </div>
                                                </div>
                                            </div> : ''}
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>






                </div>


            </div>




        </>
    )
}

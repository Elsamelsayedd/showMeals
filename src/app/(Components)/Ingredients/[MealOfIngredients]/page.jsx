'use client'

import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import '../../../globals.css'

export default function MealOfIngredients() {

    const [subIngredients, setSubIngredients] = useState([])
    const [subMealIngredientsOfClick, setSubMealIngredientsOfClick] = useState([])
    let { MealOfIngredients } = useParams()




    async function getSubIngredients(MealOfIngredients) {

        try {
            let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${MealOfIngredients}`)
            console.log(data.meals);
            setSubIngredients(data.meals)

        } catch (error) {
            console.log(error);

        }
    }


    async function getMealSubIngredients(id) {

        try {
            let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            console.log(data.meals);
            setSubMealIngredientsOfClick(data.meals[0])

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getSubIngredients(MealOfIngredients)
    }, [])


    return (
        <div className="container  my-3">
            <div className="row row-gap-3">
                {subIngredients?.map((subIngredient, index) => <div onClick={() => getMealSubIngredients(subIngredient.idMeal)} key={subIngredient.idMeal} className="cursor meal  col-lg-3 col-md-6 overflow-hidden ">

                    <div data-bs-toggle="modal" data-bs-target="#exampleModal" >
                        <div >
                            <div className="w-100 position-relative ">
                                <img src={subIngredient.strMealThumb} alt={subIngredient.strMeal} className="w-100 rounded-4 " />
                                <div className="text-meal   rounded-4 w-100  d-flex align-items-center  ">
                                    <p className="fs-2 ps-1 text-black">{subIngredient.strMeal}</p>
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
                                <div className="container ">
                                    <div className="d-flex justify-content-end my-2">
                                        <i data-bs-dismiss="modal" className="fa-solid text-white cursor fa-xmark fa-2x"></i>

                                    </div>
                                    {subMealIngredientsOfClick ? <div className="row">
                                        <div className="col-md-4">
                                            <div className="img-detailes w-100 ">
                                                <img src={subMealIngredientsOfClick?.strMealThumb} className="w-100 rounded-3" alt={subMealIngredientsOfClick?.strMeal} />
                                            </div>
                                            <p className="fs-3 text-white fw-fw-semibold ">{subMealIngredientsOfClick?.strMeal}</p>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="text-white d-flex justify-content-between align-items-center">
                                                <h2 className="text-white">Instructions</h2>
                                            </div>
                                            <p className="text-white ">{subMealIngredientsOfClick?.strInstructions}</p>
                                            <p className="text-white fs-2"><span >Area :</span><span>{subMealIngredientsOfClick?.strArea}</span></p>
                                            <p className="text-white fs-2"><span >Category : </span><span>{subMealIngredientsOfClick?.strCategory}</span></p>
                                            <p className="text-white fs-2">Recipes :</p>
                                            <div className="flex " >
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealIngredientsOfClick?.strMeasure1} {subMealIngredientsOfClick?.strIngredient1}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealIngredientsOfClick?.strMeasure2} {subMealIngredientsOfClick?.strIngredient2}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealIngredientsOfClick?.strMeasure3} {subMealIngredientsOfClick?.strIngredient3}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealIngredientsOfClick?.strMeasure4} {subMealIngredientsOfClick?.strIngredient4}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealIngredientsOfClick?.strMeasure5} {subMealIngredientsOfClick?.strIngredient5}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealIngredientsOfClick?.strMeasure6} {subMealIngredientsOfClick?.strIngredient6}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealIngredientsOfClick?.strMeasure7} {subMealIngredientsOfClick?.strIngredient7}</span>
                                                {subMealIngredientsOfClick?.strMeasure8 != "" ? <span className="badge text-bg-info p-2 fs-5 m-2">{subMealIngredientsOfClick?.strMeasure8} {subMealIngredientsOfClick?.strIngredient8}</span> : ''}
                                                <p className="text-white fs-2">Tags :</p>
                                                <button type="button" className="btn btn-success me-2"><a className="text-white" onClick={() => { window.open(subMealIngredientsOfClick?.strSource, '_blank') }}>Source</a></button>
                                                <button type="button" className="btn btn-danger"><a className="text-white" onClick={() => { window.open(subMealIngredientsOfClick?.strYoutube, '_blank') }}>Youtube</a></button>
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
    )
}

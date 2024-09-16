'use client'

import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import '../../../globals.css'

export default function MealOfArea() {

    const [subAreas, setSubAreas] = useState([])
    const [subMealAreaOfClick, setSubMealAreaOfClick] = useState([])
    let { MealOfArea } = useParams()



    async function getSubArea(MealOfArea) {

        try {
            let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${MealOfArea}`)
            console.log(data.meals);
            setSubAreas(data.meals)

        } catch (error) {
            console.log(error);

        }
    }


    async function getMealSubAreas(id) {

        try {
            let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            console.log(data.meals);
            setSubMealAreaOfClick(data.meals[0])

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getSubArea(MealOfArea)
    }, [])


    return (
        <div className="container  my-3">
            <div className="row row-gap-3">
                {subAreas?.map((subArea, index) => <div onClick={() => getMealSubAreas(subArea.idMeal)} key={subArea.idMeal} className="cursor meal  col-lg-3 col-md-6 overflow-hidden ">

                    <div data-bs-toggle="modal" data-bs-target="#exampleModal" >
                        <div >
                            <div className="w-100 position-relative ">
                                <img src={subArea.strMealThumb} alt={subArea.strMeal} className="w-100 rounded-4 " />
                                <div className="text-meal   rounded-4 w-100  d-flex align-items-center  ">
                                    <p className="fs-2 ps-1 text-black">{subArea.strMeal}</p>
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
                                    {subMealAreaOfClick ? <div className="row">
                                        <div className="col-md-4">
                                            <div className="img-detailes w-100 ">
                                                <img src={subMealAreaOfClick?.strMealThumb} className="w-100 rounded-3" alt={subMealAreaOfClick?.strMeal} />
                                            </div>
                                            <p className="fs-3 text-white fw-fw-semibold ">{subMealAreaOfClick?.strMeal}</p>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="text-white d-flex justify-content-between align-items-center">
                                                <h2 className="text-white">Instructions</h2>
                                            </div>
                                            <p className="text-white ">{subMealAreaOfClick?.strInstructions}</p>
                                            <p className="text-white fs-2"><span >Area :</span><span>{subMealAreaOfClick?.strArea}</span></p>
                                            <p className="text-white fs-2"><span >Category : </span><span>{subMealAreaOfClick?.strCategory}</span></p>
                                            <p className="text-white fs-2">Recipes :</p>
                                            <div className="flex " >
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealAreaOfClick?.strMeasure1} {subMealAreaOfClick?.strIngredient1}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealAreaOfClick?.strMeasure2} {subMealAreaOfClick?.strIngredient2}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealAreaOfClick?.strMeasure3} {subMealAreaOfClick?.strIngredient3}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealAreaOfClick?.strMeasure4} {subMealAreaOfClick?.strIngredient4}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealAreaOfClick?.strMeasure5} {subMealAreaOfClick?.strIngredient5}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealAreaOfClick?.strMeasure6} {subMealAreaOfClick?.strIngredient6}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealAreaOfClick?.strMeasure7} {subMealAreaOfClick?.strIngredient7}</span>
                                                {subMealAreaOfClick?.strMeasure8 != "" ? <span className="badge text-bg-info p-2 fs-5 m-2">{subMealAreaOfClick?.strMeasure8} {subMealAreaOfClick?.strIngredient8}</span> : ''}
                                                <p className="text-white fs-2">Tags :</p>
                                                <button type="button" className="btn btn-success me-2"><a className="text-white" onClick={() => { window.open(subMealAreaOfClick?.strSource, '_blank') }}>Source</a></button>
                                                <button type="button" className="btn btn-danger"><a className="text-white" onClick={() => { window.open(subMealAreaOfClick?.strYoutube, '_blank') }}>Youtube</a></button>
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

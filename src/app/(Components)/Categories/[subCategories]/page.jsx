'use client'

import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import '../../../globals.css'

export default function SubCategories() {

    const [subCategoriess, setSubCategoriess] = useState([])
    const [subMealCategorieOfClick, setSubMealCategorieOfClick] = useState([])
    let { subCategories } = useParams()

    async function getSubCategories(subCategories) {

        try {
            let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${subCategories}`)
            console.log(data.meals);
            setSubCategoriess(data.meals)

        } catch (error) {
            console.log(error);

        }
    }


    async function getMealSubCategories(id) {

        try {
            let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            console.log(data.meals);
            setSubMealCategorieOfClick(data.meals[0])

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getSubCategories(subCategories)
    }, [])


    return (
        <div className="container  my-3">
            <div className="row row-gap-3">
                {subCategoriess?.map((subCategorie, index) => <div onClick={() => getMealSubCategories(subCategorie.idMeal)} key={subCategorie.idMeal} className="cursor meal  col-lg-3 col-md-6 overflow-hidden ">

                    <div data-bs-toggle="modal" data-bs-target="#exampleModal" >
                        <div >
                            <div className="w-100 position-relative ">
                                <img src={subCategorie.strMealThumb} alt={subCategorie.strMeal} className="w-100 rounded-4 " />
                                <div className="text-meal   rounded-4 w-100  d-flex align-items-center  ">
                                    <p className="fs-2 ps-1 text-black">{subCategorie.strMeal}</p>
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
                                    {subMealCategorieOfClick ? <div className="row">
                                        <div className="col-md-4">
                                            <div className="img-detailes w-100 ">
                                                <img src={subMealCategorieOfClick?.strMealThumb} className="w-100 rounded-3" alt={subMealCategorieOfClick?.strMeal} />
                                            </div>
                                            <p className="fs-3 text-white fw-fw-semibold ">{subMealCategorieOfClick?.strMeal}</p>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="text-white d-flex justify-content-between align-items-center">
                                                <h2 className="text-white">Instructions</h2>
                                            </div>
                                            <p className="text-white ">{subMealCategorieOfClick?.strInstructions}</p>
                                            <p className="text-white fs-2"><span >Area :</span><span>{subMealCategorieOfClick?.strArea}</span></p>
                                            <p className="text-white fs-2"><span >Category : </span><span>{subMealCategorieOfClick?.strCategory}</span></p>
                                            <p className="text-white fs-2">Recipes :</p>
                                            <div className="flex " >
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealCategorieOfClick?.strMeasure1} {subMealCategorieOfClick?.strIngredient1}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealCategorieOfClick?.strMeasure2} {subMealCategorieOfClick?.strIngredient2}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealCategorieOfClick?.strMeasure3} {subMealCategorieOfClick?.strIngredient3}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealCategorieOfClick?.strMeasure4} {subMealCategorieOfClick?.strIngredient4}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealCategorieOfClick?.strMeasure5} {subMealCategorieOfClick?.strIngredient5}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealCategorieOfClick?.strMeasure6} {subMealCategorieOfClick?.strIngredient6}</span>
                                                <span className="badge text-bg-info p-2 fs-5 m-2">{subMealCategorieOfClick?.strMeasure7} {subMealCategorieOfClick?.strIngredient7}</span>
                                                {subMealCategorieOfClick?.strMeasure8 != "" ? <span className="badge text-bg-info p-2 fs-5 m-2">{subMealCategorieOfClick?.strMeasure8} {subMealCategorieOfClick?.strIngredient8}</span> : ''}
                                                <p className="text-white fs-2">Tags :</p>
                                                <button type="button" className="btn btn-success me-2"><a className="text-white" onClick={() => { window.open(subMealCategorieOfClick?.strSource, '_blank') }}>Source</a></button>
                                                <button type="button" className="btn btn-danger"><a className="text-white" onClick={() => { window.open(subMealCategorieOfClick?.strYoutube, '_blank') }}>Youtube</a></button>
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

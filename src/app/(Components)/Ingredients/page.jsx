'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import '../../globals.css'
import Link from "next/link";


export default function Ingredients() {

    const [Ingredients, setIngredients] = useState([])
    const [categoieOfClick, setCategoieOfClick] = useState(null)

    async function getIngredients() {
        try {
            let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
            console.log(data.meals);
            setIngredients(data.meals)

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {

        getIngredients()

    }, [])



    return (
        <>
            <div className="container  my-3">
                <div className="row row-gap-3">
                    {Ingredients?.map((Ingredient, index) => <Link href={`/Ingredients/${Ingredient.strIngredient}`} key={index} className="  col-lg-3 col-md-6  ">


                        <div >
                            <div className="w-100  ">
                                <div className=" text-center  rounded-4 w-100    ">
                                    <i className="fa-solid text-center fa-drumstick-bite fa-4x text-white"></i>
                                    <p className="fs-2 ps-1 text-white">{Ingredient.strIngredient}</p>
                                    <p className=" ps-1 text-white">{Ingredient.strDescription?.split(' ').slice(0, 20).join(' ')}</p>
                                </div>
                            </div>

                        </div>

                    </Link>
                    )}


                </div>






            </div>


        </>
    )
}

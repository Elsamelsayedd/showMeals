'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import '../../globals.css'
import Link from "next/link";


export default function Categories() {

    const [categories, setCategories] = useState([])
    const [categoieOfClick, setCategoieOfClick] = useState(null)

    async function getCategories() {
        try {
            let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            console.log(data.categories);
            setCategories(data.categories)

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {

        getCategories()

    }, [])



    return (
        <>
            <div className="container  my-3">
                <div className="row row-gap-3">
                    {categories?.map((categorie, index) => <Link href={`/Categories/${categorie.strCategory}`} key={categorie.idCategory} className="cursor meal  col-lg-3 col-md-6 overflow-hidden ">


                        <div >
                            <div className="w-100 position-relative ">
                                <img src={categorie.strCategoryThumb} alt={categorie.strCategory} className="w-100 rounded-4 " />
                                <div className="text-meal text-center  rounded-4 w-100    ">
                                    <p className="fs-2 ps-1 text-black">{categorie.strCategory}</p>
                                    <p className=" px-1 text-black">{categorie.strCategoryDescription.split(' ').slice(0, 15).join(' ')}</p>
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

'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import '../../globals.css'
import Link from "next/link";


export default function Area() {

    const [Areas, setAreas] = useState([])
    const [categoieOfClick, setCategoieOfClick] = useState(null)

    async function getAreas() {
        try {
            let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
            console.log(data.meals);
            setAreas(data.meals)

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {

        getAreas()

    }, [])



    return (
        <>
            <div className="container  my-3">
                <div className="row row-gap-3">
                    {Areas?.map((area, index) => <Link href={`https://showmeals.vercel.app/Area/${area.strArea}`} key={index} className="  col-lg-3 col-md-6  ">


                        <div >
                            <div className="w-100  ">
                                <div className=" text-center  rounded-4 w-100    ">
                                    <i className="fa-solid fa-house-laptop fa-4x text-white"></i>
                                    <p className="fs-2 ps-1 text-white">{area.strArea}</p>
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

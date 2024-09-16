"use client"

import { Circles } from "react-loader-spinner";


export default function loading() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Circles
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>

        </>
    )
}

import React from 'react'
import ComingSoon from '../lottie/lottie-coming-soon.json'
import Lottie from "lottie-react";

export default function Projects() {
    return (
        <div className={"h-screen bg-black  flex"}>
            <div className={"lg:h-82 lg:w-82  h-42 w-42 m-auto pb-28"}>
                <Lottie animationData={ComingSoon} />
            </div>
        </div>
    )
}

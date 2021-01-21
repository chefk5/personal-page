import React from 'react'
import Lottie from "lottie-react";
import ProgrammingAnimation from '../lottie/programmingLottie.json'
import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
        <div className={"lg:h-screen md:h-screen sm:h-screen h-screen bg-black"}>
            <div class="bg-black flex flex-col flex-1 ">
                <div className={"bg-black flex flex-1 flex-col self-center lg:mt-12 md:mt-10 sm:mt-8 mt-6 lg:mx-48 md:mx-32 sm:mx-20 mx-10"}>
                    <div className={"text-white font-mono lg:text-4xl md:text-2xl"}>
                        <Typewriter
                            options={{
                                strings: ['Hello!', 'Ola!', '!مرحباً'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className={"text-white font-mono lg:text-xl md:text-lg sm:text-sm text-sm pt-5"}>
                    I am Khaled Charkie, a software engineer living in Tallinn, Estonia. <br /><br />
                    I hold a master's degree in software engineering from the University of Tartu in Estonia. My research interests include Agile methodologies, productivity, and team performance in software development.<br /><br />
                    Currently, I work as a mobile application developer at <a href={"https://www.entirebody.com"}>Entirebody</a>. I am currently focusing on React Native, Expo, JavaScript, React and Express JS. I have also worked with Spring Boot, Elixir, and PHP.<br /><br />
                    When I am not coding, I am usually reading, cycling, or improving my photography skills. <br /><br />
                    Feel free to contact me on my e-mail: <a href={"mailto:khaledncharkie@gmail.com"}>khaledncharkie@gmail.com</a>
                   </div>
                    <div class="self-center  lg:h-92 lg:w-92 md:h-92 md:w-92 sm:h-42 sm:w-42 ">
                        <Lottie animationData={ProgrammingAnimation} />
                    </div>
                </div>
            </div>
        </div>






    )
}

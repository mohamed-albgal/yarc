import React from 'react'
import TopicCard from './homogenous/TopicCard'
import { FcProcess } from 'react-icons/fc'
import { FcSerialTasks } from 'react-icons/fc'
import { FcMultipleInputs } from 'react-icons/fc'


//uses 3 icons
export default () => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
                <Card1 />
                <Card2 />
                <Card3 />
            </div>
        </div>
    )
}

const Card1 = () => {
    return (
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <TopicCard tagline="Community Togetherness"
            mainText="We offer spaces for our community to come together and exchange our experiences"
            iconComponent={FcMultipleInputs}
            iconColor={"indigo-900"}
            size={"1x"}
            />
        </div>
    )
}

const Card2 = () => {
    return (
        <div className="w-full md:w-4/12 px-4 text-center">
            <TopicCard  tagline="Local Resources Include The Community's Brightest" 
            mainText="We enable those traveling the path to speak and interact with those who have met their destination."
            iconComponent={FcSerialTasks}
            iconColor={"indigo-300"}
            size={"1x"}
            />
        </div>
    )
}

const Card3 = () => {
    return (
        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <TopicCard tagline="You're All I'll Ever Need"
            mainText="Give me what you want, I'll show you something"
            iconComponent={FcProcess}
            iconColor={"indigo-700"}
            size={"1x"}
            />
        </div>
    )
}
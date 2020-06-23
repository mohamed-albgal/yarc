import React from 'react'
import TopicCard from './homogenous/TopicCard'
import { FcProcess } from 'react-icons/fc'
import { FcSerialTasks } from 'react-icons/fc'
import { FcMultipleInputs } from 'react-icons/fc'


//uses 3 icons defined here and 3 card with content defined in referring page
export default ({card1Head, card1Body, card2Head, card2Body, card3Head, card3Body}) => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
                <Card1 head={card1Head} body={card1Body} />
                <Card2 head={card2Head} body={card2Body}/>
                <Card3 head={card3Head} body={card3Body}/>
            </div>
        </div>
    )
}

const Card1 = ({head, body}) => {
    return (
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <TopicCard tagline={head}
            mainText={body}
            iconComponent={FcMultipleInputs}
            iconColor={"indigo-900"}
            size={"1x"}
            />
        </div>
    )
}

const Card2 = ({head, body}) => {
    return (
        <div className="w-full md:w-4/12 px-4 text-center">
            <TopicCard  tagline={head}
            mainText={body}
            iconComponent={FcSerialTasks}
            iconColor={"indigo-300"}
            size={"1x"}
            />
        </div>
    )
}

const Card3 = ({head, body}) => {
    return (
        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <TopicCard tagline={head}
            mainText={body}
            iconComponent={FcProcess}
            iconColor={"indigo-700"}
            size={"1x"}
            />
        </div>
    )
}
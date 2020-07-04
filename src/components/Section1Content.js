import React from 'react'
import TopicCard from './homogenous/TopicCard'
import { FcProcess } from 'react-icons/fc'
import { FcSerialTasks } from 'react-icons/fc'
import { FcMultipleInputs } from 'react-icons/fc'


//uses 3 icons defined here and 3 card with content defined in referring page
export default ({ section1 }) => {
    const { card1, card2, card3 } = section1;
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
                <Card1 head={card1.head} body={card1.body} />
                <Card2 head={card2.head} body={card2.body}/>
                <Card3 head={card3.head} body={card3.body}/>
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
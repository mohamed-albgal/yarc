import React from 'react'
import StaffCard from './homogenous/StaffDisplayCard'
import lights from  "../assets/img/headshot3.jpg"
import kids from    "../assets/img/headshot4.jpg"
import head1 from    "../assets/img/headshot1.jpg"
import head2 from "../assets/img/headshot2.jpg"

export default () => {
    return (
        <>
            <div className="w-full px-4 mb-16">
                    <p className="lg:text-6xl text-4xl font-bold text-center">
                        Our Contributors
                    </p>
                    <p className="text-center text-lg text-gray-600">
                        Without the hard work and contributions of these people, none of this would be possible!
                    </p>
            </div>
            <div className="flex flex-wrap">
                
                <StaffCard name={"FirstN LastN"} title={"Leader"} image={lights}/>
                <StaffCard name={"FirstN LastN"} title={"Developer"} image={kids}/>
                <StaffCard name={"FirstN LastN"} title={"Executive Director"} image={head1}/>
                <StaffCard name={"FirstN LastN"} title={"General Coordinator"} image={head2}/>
            </div>
        </>
    );
}
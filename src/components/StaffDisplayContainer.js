import React from 'react'
import StaffCard from './StaffDisplayCard'
import lights from  "../assets/img/headshot3.jpg"
import kids from    "../assets/img/headshot4.jpg"
import head1 from    "../assets/img/headshot1.jpg"
import head2 from "../assets/img/headshot2.jpg"

export default () => {
    return (
        <div className="flex flex-wrap">
            <StaffCard name={"FirstN LastN"} title={"Leader"} image={lights}/>
            <StaffCard name={"FirstN LastN"} title={"Developer"} image={kids}/>
            <StaffCard name={"FirstN LastN"} title={"Executive Director"} image={head1}/>
            <StaffCard name={"FirstN LastN"} title={"General Coordinator"} image={head2}/>
        </div>
    );
}
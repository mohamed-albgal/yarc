import React, { useState, useEffect} from 'react'


export default (data) => {
    const [upcoming, setUpcoming] = useState([]);
    const [passed, setPassed] = useState([]);
    useEffect(() => {
        splitData(data.allMarkdownRemark.edges);
    }, []);
    //divide events into 2 buckets, passed and current, update state with each
    const splitData = (nodes) => {
        const neu = [];
        const old = [];
        nodes.forEach( ( { node } )  => {
            const currentDate = Date.now()
            const endDate = new Date(node.frontmatter.startDate)
            const isFutureEvent = endDate >= currentDate
            
            if (isFutureEvent) {
                neu.push(node);
            }    
            else { 
                old.push(node);
            }
        });
        setUpcoming(neu);
        setPassed(old);
    }
    
    return [upcoming, passed];
}
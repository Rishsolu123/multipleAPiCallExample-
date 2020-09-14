import React from 'react';
import axios from axios;


function Example(){
    const fetchData = ()=>{
        let one = "https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt";
        let two = "https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt";
        let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt";

        const requestOne = axios.get(one);
        const requestTwo = axios.get(two);
        const requestThree = axios.get(three);

        axios.all([requestOne,requestTwo,requestThree]).then(axios.spread((...response)=>{
            const responseOne = response[0];
            const responseTwo = response[1];
            const responseThree = response[2];
        })).catch( errors => {
            
        })
    }

    return(
        <div>

        </div>
    )
}
export default Example;
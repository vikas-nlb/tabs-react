import React, { useState, useEffect } from 'react'
import Title from './Title';
import Names from './Names'
import Details from './Details'

function Main() {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);
    const url = 'https://course-api.com/react-tabs-project'

    const fetchJobs = async () =>{
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs);
        setLoading(false); 
    }

    useEffect(() =>{
        fetchJobs();
    },[])
    function settingValue(val){
        setValue(val);
    }
    if (loading) {
        return (
            <div>
                <Title title='Career Experience' />
                <h3>...loading</h3>
            </div>
        )
    }
        return (
            <div>
                <Title title='Career Experience' />
                <div className='main-container'>
                    <Names  jobList={jobs} onButtonClick = {settingValue}/>
                    <Details jobDetails={jobs[value]}/>
                </div>
            </div>
        )
    }
export default Main;
import React from 'react';

function Details(props){
    const details = props.jobDetails;
    return (
        <div className="details-container">
            {console.log(details)}
            <h2>{details.title}</h2>
            <h4>{details.company}</h4>
            <h4>{details.dates}</h4>
            <div className='duty-container'>
                <ul>
                    {details.duties.map((items) =>(
                        <li>{items}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Details;
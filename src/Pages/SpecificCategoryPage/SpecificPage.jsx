import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SpecificPage() {
    const type = useParams();

    useEffect(() => {
        console.log(type)
    })
    return (
        <div>
            specific page
        </div>
    )
}

export default SpecificPage
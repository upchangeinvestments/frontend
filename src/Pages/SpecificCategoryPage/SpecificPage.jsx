import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SpecificPage() {
    useEffect(() => {
        const type = useParams();
        console.log(type)
    })
    return (
        <div>SpecificPage</div>
    )
}

export default SpecificPage
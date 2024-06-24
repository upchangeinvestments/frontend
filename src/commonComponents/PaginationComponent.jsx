import React, { useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const PaginationComponent = ({ totalPages = 1, updateCurrentPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // console.log("totalPages: " + totalPages);

    const handleChange = (event, newPage) => {
        // console.log("event: ", event);
        setCurrentPage(newPage);
        updateCurrentPage(newPage);
    };

    return (
        <div className="flex items-center justify-center mt-24">
            <Stack spacing={2}>
                <Pagination count={totalPages} color="secondary" size="large" shape="rounded" page={currentPage} onChange={handleChange} />
            </Stack>
        </div>
    );
}

export default PaginationComponent;
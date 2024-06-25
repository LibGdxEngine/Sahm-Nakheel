// components/Pagination.js

import React from 'react';

const Pagination = ({ page, totalPages, onPageChange }) => {
    const getPages = () => {
        let pages = [];
        if (totalPages <= 5) {
            pages = [...Array(totalPages).keys()].map((x) => x + 1);
        } else {
            if (page < 3) {
                pages = [1, 2, 3, '...', totalPages - 1, totalPages];
            } else if (page > totalPages - 2) {
                pages = [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
            } else {
                pages = [1, '...', page - 1, page, page + 1, '...', totalPages];
            }
        }
        return pages;
    };

    const pages = getPages();

    return (
        <div className={`flex items-center justify-center my-16`}>
            <div
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
                className="mt-4 mx-8 p-2 bg-darkGreen text-white rounded-full w-5 h-5 flex items-center justify-center"
            >
                &lt;
            </div>
            <div className="flex justify-center items-center space-x-2 mt-4">

                {pages.map((p, index) => (
                    <div
                        key={index}
                        onClick={() => p !== '...' && onPageChange(p)}
                        disabled={p === '...'}
                        className={`px-2 py-2 text-xs w-5 h-5 flex items-center justify-center rounded-full ${
                            p === page ? 'bg-darkGreen text-white' : 'bg-lighterGray'
                        }`}
                    >
                        {p}
                    </div>
                ))}

            </div>
            <div
                onClick={() => onPageChange(page + 1)}
                disabled={page === totalPages}
                className="mt-4 mx-8 p-2 bg-darkGreen text-white rounded-full w-5 h-5 flex items-center justify-center"
            >
                &gt;
            </div>
        </div>
    );
};

export default Pagination;

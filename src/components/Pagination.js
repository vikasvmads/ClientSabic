import React from 'react';

const Pagination = ({ postPerPages, totalPosts }) => {
    console.log("called =>", postPerPages)
    console.log("totalPosts =>",totalPosts)
    
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPages); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item' color="primary">
                        <a  href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;







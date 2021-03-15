import React from 'react';

const Pages = ({ postPerPages, totalPosts , paginate}) => {
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
                        <a onClick={ ()=> paginate(number)}  className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pages;







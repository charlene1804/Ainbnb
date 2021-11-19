
import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className=''>
      <ul className='flex justify-center '>
        {pageNumbers.map((number, index) => (
          <li key={number} className='mx-1'>

            <a onClick={() => paginate(number)} href='#' className={` px-2 hover:bg-black hover:rounded-full hover:text-white`}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
// to put in your render component  
// const [currentPage, setCurrentPage] = useState(1);
//     const [postsPerPage] = useState(5);
//     // Get current posts
// const indexOfLastPost = currentPage * postsPerPage;
// const indexOfFirstPost = indexOfLastPost - postsPerPage;
// const currentPosts = searchResult.searchResult.slice(indexOfFirstPost, indexOfLastPost);
// console.log('currentPosts', currentPosts)
//   // Change page
//   const paginate = pageNumber => setCurrentPage(pageNumber);
{/* <Pagination  postsPerPage={postsPerPage} 
totalPosts={searchResult.searchResult.length}
paginate={paginate}
/> */}
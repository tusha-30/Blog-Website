// app/blogs/Pagination.jsx
import Link from 'next/link';

export default function Pagination({ currentPage, totalPages }) {
  const getPaginationItems = () => {
    const paginationItems = [];

  
    if (currentPage > 1) {
      paginationItems.push(
        <Link key="prev" href={`?page=${currentPage - 1}`} className="mx-2 px-4 py-2 rounded  hover:bg-gray-100">
          Previous
        </Link>
      );
    }


    paginationItems.push(
      <Link key={1} href={`?page=1`} className={`mx-2 px-4 py-2 rounded ${currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>
        1
      </Link>
    );

  
    if (currentPage > 3) {
      paginationItems.push(
        <span key="dots-start" className="mx-2">...</span>
      );
    }

 
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      paginationItems.push(
        <Link key={i} href={`?page=${i}`} className={`mx-2 px-4 py-2 rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>
          {i}
        </Link>
      );
    }

    
    if (currentPage < totalPages - 2) {
      paginationItems.push(
        <span key="dots-end" className="mx-2">...</span>
      );
    }


    if (totalPages > 1) {
      paginationItems.push(
        <Link key={totalPages} href={`?page=${totalPages}`} className={`mx-2 px-4 py-2 rounded ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>
          {totalPages}
        </Link>
      );
    }

 
    if (currentPage < totalPages) {
      paginationItems.push(
        <Link key="next" href={`?page=${currentPage + 1}`} className="mx-2 px-4 py-2 rounded  hover:bg-gray-100">
          Next
        </Link>
      );
    }

    return paginationItems;
  };

  return (
    <div className="flex justify-center mt-8">
      {getPaginationItems()}
    </div>
  );
}

import { useNavigate } from "react-router";

interface PaginationProps {
  currentPage: number;
  pageSize: number;
  totalEntries: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function Pagination(props: PaginationProps) {
  const { currentPage, onNext, onPrev, pageSize, totalEntries } = props;
  const totalPages = Math.ceil(totalEntries / pageSize);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  // Function to update the page in the URL
  const handleChange = (page: number) => {
    searchParams.set("page", (page).toString()); // Adjust page index to 0-based
    navigate(`${location.pathname}?${searchParams.toString()}`); // Update the URL with new searchParams
  };

  return (
    <div className="flex flex-col mt-3">
      <nav aria-label="Page navigation" className="inline-flex mt-2 xs:mt-0">
        {/* Previous button */}
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={onPrev}
          disabled={currentPage === 1}
        >
          Trước
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={`flex items-center justify-center px-3 h-8 leading-tight ${page === currentPage
              ? 'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
              : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              }`}
            onClick={() => {
              if (page !== currentPage) {
                handleChange(page)
              }
            }}
          >
            {page}
          </button>
        ))}
        {/* Next button */}
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-s border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={onNext}
          disabled={currentPage === totalPages}
        >
          Sau
        </button>
      </nav>
    </div>
  );
}

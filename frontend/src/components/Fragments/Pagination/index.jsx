const Pagination = (props) => {

    const { handleNext, handlePrevious, next, previous, totalPages, page, handlePageChange } = props

    return (
        
        <nav className="mt-10 flex items-center justify-center gap-1.5">
            <button onClick={handlePrevious} disabled={!previous} type="button" className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

                <span aria-hidden="true" className="sr-only">Previous</span>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                <button key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    disabled={page === pageNumber}
                    type="button" className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary" aria-current="page">
                    {pageNumber}
                </button>
            ))}
            <button onClick={handleNext} disabled={!next} type="button" className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-light text-center text-dark transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary">
                <span aria-hidden="true" className="sr-only">Next</span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </nav>
    )
}

export default Pagination
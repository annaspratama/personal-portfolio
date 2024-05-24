import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">

      {/* Header */}
      <header className="sticky top-0 z-50">
        <div className="flex items-center justify-between rounded-2xl bg-white p-3 shadow dark:bg-black dark:shadow-dark">
          {/* Logo */}
          <a href="index.html" className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
              <path fill="currentColor" d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z" />
            </svg>
            <span> Annas Pratama's<span className="text-primary"> Portfolio</span> </span>
          </a>
          {/* Navigation menu */}
          <ul className="hidden flex-1 flex-wrap items-center justify-center lg:flex">
            <li className="group/menu-item active">
              <a href="index.html" className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" className="h-6 w-6 text-[/#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                  <path d="M15.833 7.258 11.39 3.802a2.222 2.222 0 0 0-2.728 0L4.216 7.258a2.22 2.22 0 0 0-.858 1.754v6a1.667 1.667 0 0 0 1.667 1.667h10a1.667 1.667 0 0 0 1.667-1.666v-6c0-.686-.317-1.334-.859-1.755Z" />
                  <path d="M13.333 12.5c-1.841 1.11-4.826 1.11-6.667 0" />
                </svg>
                <span>Home</span>
              </a>
            </li>
            <li className="group/menu-item ">
              <a href="about.html" className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" className="h-6 w-6 text-[/#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                  <path d="M10.5 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M10.5 2.5c6 0 7.5 1.5 7.5 7.5s-1.5 7.5-7.5 7.5S3 16 3 10s1.5-7.5 7.5-7.5Z" />
                  <path d="M5.5 16.708v-.041a3.333 3.333 0 0 1 3.333-3.334h3.334a3.333 3.333 0 0 1 3.333 3.334v.041" />
                </svg>
                <span>About</span>
              </a>
            </li>
            {/* <li className="group/menu-item ">
              <a href="services.html" className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" className="h-6 w-6 text-[/#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                      <path d="M10.5 3.333 3.833 6.667 10.5 10l6.667-3.333L10.5 3.333ZM3.833 10l6.667 3.333L17.167 10M3.833 13.333l6.667 3.334 6.667-3.334" />
                  </svg>
                  <span>Services</span>
              </a>
            </li> */}
            <li className="group/menu-item ">
              <a href="portfolio.html" className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" className="h-6 w-6 text-[/#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                  <path d="m3.503 5.998 5.949-2.591a.8.8 0 0 1 1.058.439l4.103 9.918a.834.834 0 0 1-.428 1.087l-5.948 2.59a.8.8 0 0 1-1.059-.438l-4.103-9.92a.833.833 0 0 1 .428-1.085ZM13 3.333h.833a.833.833 0 0 1 .834.834v2.916M17.167 5c.22.093.433.18.64.263a.833.833 0 0 1 .442 1.092l-1.915 4.478" />
                </svg>
                <span>Works</span>
              </a>
            </li>
            <li className="group/menu-item ">
              <a href="blog.html" className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" className="h-6 w-6 text-[/#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                  <path d="m14.667 9.167 1.25-1.25a2.357 2.357 0 1 0-3.333-3.334l-8.75 8.75v3.334h3.333L8.834 15m2.916-9.583 3.333 3.333m.417 9.583 2.792-2.736a1.785 1.785 0 0 0 .004-2.56 1.87 1.87 0 0 0-2.608-.005l-.186.184-.186-.184a1.869 1.869 0 0 0-2.607-.005 1.787 1.787 0 0 0-.005 2.56l2.796 2.746Z" />
                </svg>
                <span>Blog</span>
              </a>
            </li>
            <li className="group/menu-item ">
              <a href="contact.html" className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" className="h-6 w-6 text-[/#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                  <path d="M6.667 7.5h6.666m-6.666 3.333h5M15 3.333a2.5 2.5 0 0 1 2.5 2.5V12.5A2.5 2.5 0 0 1 15 15h-4.167l-4.166 2.5V15H5a2.5 2.5 0 0 1-2.5-2.5V5.833a2.5 2.5 0 0 1 2.5-2.5h10Z" />
                </svg>
                <span>Contact</span>
              </a>
            </li>
            <li className="group/menu-item ">
              <Link to="/hello-world" className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" className="h-6 w-6 text-[/#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                  <path d="M6.667 7.5h6.666m-6.666 3.333h5M15 3.333a2.5 2.5 0 0 1 2.5 2.5V12.5A2.5 2.5 0 0 1 15 15h-4.167l-4.166 2.5V15H5a2.5 2.5 0 0 1-2.5-2.5V5.833a2.5 2.5 0 0 1 2.5-2.5h10Z" />
                </svg>
                <span>Hello World</span>
              </Link>
            </li>
          </ul>
          {/* Header buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            {/* Theme appearance toggler */}
            <div className="hidden">
              <button type="button" className="hs-dark-mode group flex h-10 w-10 items-center justify-center rounded-lg text-center font-medium text-dark transition hover:bg-light hs-dark-mode-active:hidden dark:text-gray-400 dark:hover:text-gray-500" data-hs-theme-click-value="dark">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                  <path d="M11.8 3a8.656 8.656 0 0 0-4.523 1.28A8.918 8.918 0 0 0 4.04 7.756a9.167 9.167 0 0 0 .44 9.24 8.863 8.863 0 0 0 3.553 3.137 8.633 8.633 0 0 0 4.624.824 8.69 8.69 0 0 0 4.381-1.723 8.973 8.973 0 0 0 2.892-3.78c.3-.738-.419-1.48-1.142-1.179a5.604 5.604 0 0 1-3.892.15 5.74 5.74 0 0 1-3.083-2.431 5.956 5.956 0 0 1-.848-3.886c.17-1.357.8-2.61 1.78-3.541l.069-.072c.485-.567.099-1.488-.668-1.488h-.234l-.06-.005L11.8 3Z" />
                </svg>
              </button>
              <button type="button" className="hs-dark-mode group hidden h-10 w-10 items-center justify-center rounded-lg text-center font-medium text-dark transition hover:bg-light hs-dark-mode-active:flex dark:text-[/#FD7E41] dark:hover:bg-dark dark:hover:text-[/#FD7E41]" data-hs-theme-click-value="light">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
                  <path d="M10 15.833a.833.833 0 0 1 .828.736l.005.098v.833a.833.833 0 0 1-1.66.097l-.006-.097v-.833a.833.833 0 0 1 .833-.834Zm5.26-1.741.08.069.582.583a.833.833 0 0 1-1.1 1.248l-.078-.07-.583-.583a.833.833 0 0 1 1.015-1.306l.085.059Zm-9.42.068a.833.833 0 0 1 .068 1.1l-.069.08-.583.582a.833.833 0 0 1-1.248-1.1l.07-.078.583-.583a.833.833 0 0 1 1.178 0ZM3.333 9.167a.833.833 0 0 1 .098 1.66l-.098.006H2.5a.833.833 0 0 1-.098-1.66l.098-.006h.833Zm14.167 0a.833.833 0 0 1 .098 1.66l-.098.006h-.833a.833.833 0 0 1-.098-1.66l.098-.006h.833ZM5.178 4.008l.078.07.583.583a.833.833 0 0 1-1.1 1.247l-.078-.069-.583-.583A.833.833 0 0 1 5.092 3.95l.086.058Zm10.744.069a.833.833 0 0 1 .07 1.1l-.07.079-.583.583a.833.833 0 0 1-1.247-1.1l.069-.078.583-.584a.833.833 0 0 1 1.178 0ZM10 1.667a.833.833 0 0 1 .828.736l.005.097v.833a.833.833 0 0 1-1.66.098l-.006-.098V2.5A.833.833 0 0 1 10 1.667Zm0 4.166a4.167 4.167 0 1 1-4.163 4.348L5.833 10l.004-.18A4.167 4.167 0 0 1 10 5.832Z" />
                </svg>
              </button>
            </div>

            <a href="contact.html" className="inline-flex items-center gap-2 rounded-lg bg-dark px-6 py-4 text-center text-base font-semibold leading-tight text-white transition hover:bg-primary dark:bg-dark-2 dark:text-white dark:hover:bg-primary dark:hover:text-white">
              <span>Let's Talk</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" className="h-5 w-5">
                <path d="M17.5 11.667v-5h-5" />
                <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
          </div>
          {/* Navigation toggler */}
          <button type="button" className="text-dark transition dark:text-white/70 lg:hidden" data-hs-overlay="/#mobile-menu" aria-controls="mobile-menu" aria-label="Toggle navigation">
            <span className="sr-only">Toggle Navigation</span>
            <svg className="h-9 w-9 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
        </div>
      </header>
      {/* Header end */}

      {/* Mobile menu */}
      <div id="mobile-menu" className="hs-overlay fixed bottom-0 start-0 top-0 z-[60] hidden h-full w-64 -translate-x-full transform overflow-y-auto bg-white transition-all duration-300 hs-overlay-open:translate-x-0 dark:bg-black [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2">
        <div className="flex h-full flex-col justify-between gap-5 p-5">
          <div className="">
            {/* Logo */}
            <a href="index.html" className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                <path fill="currentColor" d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z" />
              </svg>

              <span> Annas Pratama's<span className="text-primary"> Portfolio</span> </span>
            </a>
          </div>

          <ul className="mt-4 flex flex-1 flex-col gap-2">
            <li className="group/menu-item active">
              <a href="index.html" className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" className="h-6 w-6 text-[/#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                  <path d="M15.833 7.258 11.39 3.802a2.222 2.222 0 0 0-2.728 0L4.216 7.258a2.22 2.22 0 0 0-.858 1.754v6a1.667 1.667 0 0 0 1.667 1.667h10a1.667 1.667 0 0 0 1.667-1.666v-6c0-.686-.317-1.334-.859-1.755Z" />
                  <path d="M13.333 12.5c-1.841 1.11-4.826 1.11-6.667 0" />
                </svg>
                <span>Home</span>
              </a>
            </li>
            <li className="group/menu-item ">
              <a href="about.html" className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" className="h-6 w-6 text-[/#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                  <path d="M10.5 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M10.5 2.5c6 0 7.5 1.5 7.5 7.5s-1.5 7.5-7.5 7.5S3 16 3 10s1.5-7.5 7.5-7.5Z" />
                  <path d="M5.5 16.708v-.041a3.333 3.333 0 0 1 3.333-3.334h3.334a3.333 3.333 0 0 1 3.333 3.334v.041" />
                </svg>
                <span>About</span>
              </a>
            </li>
            <li className="group/menu-item ">
              <a href="services.html" className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" className="h-6 w-6 text-[/#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                  <path d="M10.5 3.333 3.833 6.667 10.5 10l6.667-3.333L10.5 3.333ZM3.833 10l6.667 3.333L17.167 10M3.833 13.333l6.667 3.334 6.667-3.334" />
                </svg>
                <span>Services</span>
              </a>
            </li>
            <li className="group/menu-item ">
              <a href="portfolio.html" className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" className="h-6 w-6 text-[/#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                  <path d="m3.503 5.998 5.949-2.591a.8.8 0 0 1 1.058.439l4.103 9.918a.834.834 0 0 1-.428 1.087l-5.948 2.59a.8.8 0 0 1-1.059-.438l-4.103-9.92a.833.833 0 0 1 .428-1.085ZM13 3.333h.833a.833.833 0 0 1 .834.834v2.916M17.167 5c.22.093.433.18.64.263a.833.833 0 0 1 .442 1.092l-1.915 4.478" />
                </svg>
                <span>Works</span>
              </a>
            </li>
            <li className="group/menu-item ">
              <a href="blog.html" className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" className="h-6 w-6 text-[/#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                  <path d="m14.667 9.167 1.25-1.25a2.357 2.357 0 1 0-3.333-3.334l-8.75 8.75v3.334h3.333L8.834 15m2.916-9.583 3.333 3.333m.417 9.583 2.792-2.736a1.785 1.785 0 0 0 .004-2.56 1.87 1.87 0 0 0-2.608-.005l-.186.184-.186-.184a1.869 1.869 0 0 0-2.607-.005 1.787 1.787 0 0 0-.005 2.56l2.796 2.746Z" />
                </svg>
                <span>Blog</span>
              </a>
            </li>
            <li className="group/menu-item ">
              <a href="contact.html" className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" className="h-6 w-6 text-[/#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white">
                  <path d="M6.667 7.5h6.666m-6.666 3.333h5M15 3.333a2.5 2.5 0 0 1 2.5 2.5V12.5A2.5 2.5 0 0 1 15 15h-4.167l-4.166 2.5V15H5a2.5 2.5 0 0 1-2.5-2.5V5.833a2.5 2.5 0 0 1 2.5-2.5h10Z" />
                </svg>
                <span>Contact</span>
              </a>
            </li>
          </ul>

          <div className="flex flex-col gap-3">
            <button data-hs-theme-click-value="dark" className="hs-dark-mode flex w-full items-center justify-start gap-2 rounded-lg px-4 py-2 text-center text-sm text-muted transition hover:bg-light hs-dark-mode-active:hidden dark:hover:bg-dark dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M11.8 3a8.656 8.656 0 0 0-4.523 1.28A8.918 8.918 0 0 0 4.04 7.756a9.167 9.167 0 0 0 .44 9.24 8.863 8.863 0 0 0 3.553 3.137 8.633 8.633 0 0 0 4.624.824 8.69 8.69 0 0 0 4.381-1.723 8.973 8.973 0 0 0 2.892-3.78c.3-.738-.419-1.48-1.142-1.179a5.604 5.604 0 0 1-3.892.15 5.74 5.74 0 0 1-3.083-2.431 5.956 5.956 0 0 1-.848-3.886c.17-1.357.8-2.61 1.78-3.541l.069-.072c.485-.567.099-1.488-.668-1.488h-.234l-.06-.005L11.8 3Z" />
              </svg>

              <span>Change appearance</span>
            </button>

            <button data-hs-theme-click-value="light" className="hs-dark-mode hidden w-full items-center justify-start gap-2 rounded-lg px-4 py-2 text-center text-sm text-muted transition hover:bg-light hs-dark-mode-active:flex dark:hover:bg-dark dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M10 15.833a.833.833 0 0 1 .828.736l.005.098v.833a.833.833 0 0 1-1.66.097l-.006-.097v-.833a.833.833 0 0 1 .833-.834Zm5.26-1.741.08.069.582.583a.833.833 0 0 1-1.1 1.248l-.078-.07-.583-.583a.833.833 0 0 1 1.015-1.306l.085.059Zm-9.42.068a.833.833 0 0 1 .068 1.1l-.069.08-.583.582a.833.833 0 0 1-1.248-1.1l.07-.078.583-.583a.833.833 0 0 1 1.178 0ZM3.333 9.167a.833.833 0 0 1 .098 1.66l-.098.006H2.5a.833.833 0 0 1-.098-1.66l.098-.006h.833Zm14.167 0a.833.833 0 0 1 .098 1.66l-.098.006h-.833a.833.833 0 0 1-.098-1.66l.098-.006h.833ZM5.178 4.008l.078.07.583.583a.833.833 0 0 1-1.1 1.247l-.078-.069-.583-.583A.833.833 0 0 1 5.092 3.95l.086.058Zm10.744.069a.833.833 0 0 1 .07 1.1l-.07.079-.583.583a.833.833 0 0 1-1.247-1.1l.069-.078.583-.584a.833.833 0 0 1 1.178 0ZM10 1.667a.833.833 0 0 1 .828.736l.005.097v.833a.833.833 0 0 1-1.66.098l-.006-.098V2.5A.833.833 0 0 1 10 1.667Zm0 4.166a4.167 4.167 0 1 1-4.163 4.348L5.833 10l.004-.18A4.167 4.167 0 0 1 10 5.832Z" />
              </svg>

              <span>Change appearance</span>
            </button>

            <a href="contact.html" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-dark px-6 py-4 text-center text-base font-semibold leading-tight text-white transition hover:bg-primary dark:bg-dark-2 dark:text-white dark:hover:bg-primary dark:hover:text-white">
              <span>Let's Talk</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" className="h-5 w-5">
                <path d="M17.5 11.667v-5h-5" />
                <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">

        {/* Intro */}
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
          <div className="aspect-6/4 overflow-hidden rounded-lg bg-light pt-4 text-center dark:bg-dark-2">
            <img src="./assets/images/profile.png" alt="Img Profile"
              className="inline-block h-full w-full scale-110 object-contain object-bottom" />
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold dark:text-light">Annas Pratama 👋</h3>
            <p className="mt-2 text-muted dark:text-light/70">
              A Passionate
              <span className="font-semibold text-dark dark:text-white mx-1">
                Back End Developer
              </span>
              &
              <span className="font-semibold text-dark dark:text-white mx-1">
                Full Stack Developer
              </span>
              🖥️ having
              <span className="font-semibold text-dark dark:text-white mx-1"> 4+ years </span>
              of experiences in Web Development.
            </p>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap gap-2">
              <a href="/#"
                className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50">
                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd" />
                  <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                </svg>

                <span>WhatsApp</span>
              </a>
              <button type="button" data-clipboard-text="annaspratama@icloud.com"
                data-clipboard-action="copy" data-clipboard-success-text="Copied to clipboard"
                className="js-clipboard hs-tooltip inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-6 py-4 font-medium text-dark transition [--trigger:focus] hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  className="h-6 w-6">
                  <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z" />
                  <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
                <span>Copy Email</span>

                <span
                  className="hs-tooltip-content invisible z-10 hidden rounded-lg bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                  role="tooltip">
                  Copied to clipboard
                </span>
              </button>
            </div>

            {/* Social */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <a href="/#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  className="h-6 w-6">
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10Z" />
                </svg>
              </a>
              <a href="/#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  className="h-6 w-6">
                  <path
                    d="M13.37 2.094A10.003 10.003 0 0 0 8.002 21.17a7.757 7.757 0 0 1 .163-2.293c.185-.839 1.296-5.463 1.296-5.463a3.74 3.74 0 0 1-.324-1.577c0-1.485.857-2.593 1.923-2.593a1.334 1.334 0 0 1 1.342 1.508c0 .9-.578 2.262-.88 3.54a1.544 1.544 0 0 0 1.575 1.923c1.898 0 3.17-2.431 3.17-5.301 0-2.2-1.457-3.848-4.143-3.848a4.746 4.746 0 0 0-4.93 4.794 2.96 2.96 0 0 0 .648 1.97.48.48 0 0 1 .162.554c-.046.184-.162.623-.208.784a.354.354 0 0 1-.51.254c-1.384-.554-2.036-2.077-2.036-3.816 0-2.847 2.384-6.255 7.154-6.255 3.796 0 6.32 2.777 6.32 5.747 0 3.909-2.177 6.848-5.394 6.848a2.862 2.862 0 0 1-2.454-1.246s-.578 2.316-.692 2.754a8.026 8.026 0 0 1-1.019 2.131c.923.28 1.882.42 2.846.416a9.99 9.99 0 0 0 9.996-10.003 10.002 10.002 0 0 0-8.635-9.903l-.002-.001Z" />
                </svg>
              </a>
              <a href="/#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  className="h-6 w-6">
                  <path
                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z" />
                </svg>
              </a>
              <a href="/#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  className="h-6 w-6">
                  <path
                    d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022ZM10 15.5l6-3.5-6-3.5v7Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:gap-6">
          {/* Work Experience */}
          <div className="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-black dark:shadow-dark">
            <h3 className="relative z-10 bg-white pb-2 pt-6 text-2xl font-semibold dark:bg-black dark:text-light">
              Work Experience
            </h3>

            <div
              className="max-h-[200px] space-y-4 overflow-hidden pb-6 pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0">
              <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
                <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                  <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                    2021 - 2023
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                      <img src="./assets/images/google.svg" alt="" className="h-5 w-5" />
                    </div>
                    <div className="">
                      <h6 className="text-base font-semibold text-dark dark:text-light/70">
                        Google Inc.
                      </h6>
                      <p className="text-sm text-muted">
                        Senior Product Designer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                  <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                    2021 - 2023
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                      <img src="./assets/images/meta.svg" alt="" className="h-5 w-5" />
                    </div>
                    <div className="">
                      <h6 className="text-base font-semibold text-dark dark:text-light/70">
                        Meta Inc.
                      </h6>
                      <p className="text-sm text-muted">Product Designer</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                  <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                    2018 - 2021
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                      <img src="./assets/images/adobe.svg" alt="" className="h-5 w-5" />
                    </div>
                    <div className="">
                      <h6 className="text-base font-semibold text-dark dark:text-light/70">
                        Adobe
                      </h6>
                      <p className="text-sm text-muted">Senior UI UX Designer</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                  <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                    2018 - 2021
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                      <img src="./assets/images/adobe.svg" alt="" className="h-5 w-5" />
                    </div>
                    <div className="">
                      <h6 className="text-base font-semibold text-dark dark:text-light/70">
                        Adobe
                      </h6>
                      <p className="text-sm text-muted">Senior UI UX Designer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
                <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                  <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                    2021 - 2023
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                      <img src="./assets/images/google.svg" alt="" className="h-5 w-5" />
                    </div>
                    <div className="">
                      <h6 className="text-base font-semibold text-dark dark:text-light/70">
                        Google Inc.
                      </h6>
                      <p className="text-sm text-muted">
                        Senior Product Designer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                  <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                    2021 - 2023
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                      <img src="./assets/images/meta.svg" alt="" className="h-5 w-5" />
                    </div>
                    <div className="">
                      <h6 className="text-base font-semibold text-dark dark:text-light/70">
                        Meta Inc.
                      </h6>
                      <p className="text-sm text-muted">Product Designer</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                  <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                    2018 - 2021
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                      <img src="./assets/images/adobe.svg" alt="" className="h-5 w-5" />
                    </div>
                    <div className="">
                      <h6 className="text-base font-semibold text-dark dark:text-light/70">
                        Adobe
                      </h6>
                      <p className="text-sm text-muted">Senior UI UX Designer</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                  <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                    2018 - 2021
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                      <img src="./assets/images/adobe.svg" alt="" className="h-5 w-5" />
                    </div>
                    <div className="">
                      <h6 className="text-base font-semibold text-dark dark:text-light/70">
                        Adobe
                      </h6>
                      <p className="text-sm text-muted">Senior UI UX Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
            <h3 className="text-2xl font-semibold dark:text-light">My Expert Area</h3>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img src="./assets/images/figma.svg" alt="" className="h-8 w-8" />
                </div>
                <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                  Figma
                </p>
              </div>
              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img src="./assets/images/notion.svg" alt="" className="h-8 w-8" />
                </div>
                <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                  Notion
                </p>
              </div>
              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img src="./assets/images/mico.svg" alt="" className="h-8 w-8" />
                </div>
                <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                  Mico
                </p>
              </div>
              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img src="./assets/images/framer.svg" alt="" className="h-8 w-8" />
                </div>
                <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                  Framer
                </p>
              </div>
              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img src="./assets/images/webflow.svg" alt="" className="h-8 w-8" />
                </div>
                <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                  Webflow
                </p>
              </div>
              <div className="text-center">
                <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                  <img src="./assets/images/zeplin.svg" alt="" className="h-8 w-8" />
                </div>
                <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                  Zeplin
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-2xl font-semibold dark:text-light">Recent Projects</h3>
            <a href="portfolio.html"
              className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
              <span>All Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" className="h-5 w-5">
                <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
              </svg>
            </a>
          </div>

          <div className="mt-6 space-y-6">
            <div
              className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
              <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                <img src="./assets/images/project-1.png" alt=""
                  className="h-full w-full rounded-t-lg object-cover object-top transition" />

                <a href="./assets/images/project-1.png" data-gall="project-gallry-1"
                  className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5" className="h-6 w-6">
                    <path d="M10 4.167v11.666M4.167 10h11.666" />
                  </svg>
                </a>
              </div>

              <div
                className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
                  Product Design
                </span>
              </div>
            </div>
            <div
              className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
              <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                <img src="./assets/images/project-2.png" alt=""
                  className="h-full w-full rounded-t-lg object-cover object-top transition" />

                <a href="./assets/images/project-2.png" data-gall="project-gallry-2"
                  className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5" className="h-6 w-6">
                    <path d="M10 4.167v11.666M4.167 10h11.666" />
                  </svg>
                </a>
              </div>

              <div
                className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
                  Product Design
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-2xl font-semibold dark:text-light">Services I Offered</h3>
            <a href="services.html"
              className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
              <span>See All Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" className="h-5 w-5">
                <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
              </svg>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
              <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                  <path
                    d="M8 13.333A5.333 5.333 0 0 1 13.333 8h37.334A5.333 5.333 0 0 1 56 13.333v37.334A5.333 5.333 0 0 1 50.667 56H13.333A5.333 5.333 0 0 1 8 50.667V13.333ZM40 8 8 40M25.334 8l-16 16M53.333 9.333 38.667 24M24 40 10.666 53.333" />
                  <path d="M56 24H24v32" />
                </svg>
              </div>
              <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                UI UX Design
              </p>
            </div>
            <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
              <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                  <path
                    d="M26.666 18.667A5.333 5.333 0 0 1 32 13.333h16a5.333 5.333 0 0 1 5.333 5.334v26.666A5.333 5.333 0 0 1 48 50.667H32a5.333 5.333 0 0 1-5.334-5.334V18.667Zm-8 0v26.666m-8-24v21.334" />
                </svg>
              </div>
              <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                Mobile App
              </p>
            </div>
            <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
              <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                  <path
                    d="M10.666 13.333a2.667 2.667 0 0 1 2.667-2.666h37.334a2.667 2.667 0 0 1 2.666 2.666v5.334a2.667 2.667 0 0 1-2.666 2.666H13.332a2.666 2.666 0 0 1-2.667-2.666v-5.334Zm0 21.334A2.667 2.667 0 0 1 13.333 32H24a2.667 2.667 0 0 1 2.666 2.667v16A2.667 2.667 0 0 1 24 53.333H13.333a2.666 2.666 0 0 1-2.667-2.666v-16ZM37.334 32h16m-16 10.667h16m-16 10.666h16" />
                </svg>
              </div>
              <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                Product Design
              </p>
            </div>
            <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
              <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"
                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                  <path
                    d="M36.214 36.773a15.982 15.982 0 0 1 1.12 5.894A15.86 15.86 0 0 1 32 54.56a15.814 15.814 0 0 1-10.666 4.107c-8.827 0-16-7.174-16-16 0-7.36 5.013-13.6 11.786-15.44" />
                  <path
                    d="M46.88 27.227c6.773 1.84 11.787 8.08 11.787 15.44 0 8.826-7.174 16-16 16A15.814 15.814 0 0 1 32 54.56" />
                  <path d="M16 21.333a16 16 0 1 0 32 0 16 16 0 0 0-32 0Z" />
                </svg>
              </div>
              <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                Branding
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
          <marquee behavior="scroll" direction="left" className="overflow-hidden text-nowrap rounded-lg bg-light p-3 text-lg font-medium text-muted dark:bg-dark-2">
            Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire 🚀
            Crafting Digital Experiences 🎨
          </marquee>

          <h2 className="mt-4 text-[40px] font-semibold leading-snug text-dark dark:text-light">
            Let's👋 <br />
            Work Together
          </h2>

          <a href="contact.html"
            className="mt-6 inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
            <span>Let's Talk</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" className="h-5 w-5">
              <path d="M17.5 11.667v-5h-5" />
              <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer class="text-center">
        <p class="text-sm dark:text-light/70">
          Annas Pratama's Portfolio | Copyright @ 2024 | Built with
          <a href="https://www.djangoproject.com" target="_blank" rel="noreferrer" class="inline-block border-b border-b-transparent text-primary transition hover:border-b-primary hover:text-blue-600 ml-1">
            Django
          </a> and
          <a href="https://react.dev" target="_blank" rel="noreferrer" class="inline-block border-b border-b-transparent text-primary transition hover:border-b-primary hover:text-blue-600 ml-1">
            React JS
          </a>
        </p>
      </footer>

      <div class="shapes">
        <div class="fixed -left-1/2 -top-1/2 -z-10 animate-spin-very-slow xl:-left-[20%] xl:-top-1/3">
          <img src="./assets/images/gradient-1.png" alt="" class="" />
        </div>

        <div class="fixed -right-[50%] top-[10%] -z-10 animate-spin-very-slow xl:-right-[15%] xl:top-[10%]">
          <img src="./assets/images/gradient-2.png" alt="" class="" />
        </div>

        <div class="move-with-cursor fixed left-[10%] top-[20%] -z-10">
          <img src="./assets/images/object-3d-1.png" alt="" class="" />
        </div>

        <div class="move-with-cursor fixed bottom-[20%] right-[10%] -z-10">
          <img src="./assets/images/object-3d-2.png" alt="" class="" />
        </div>
      </div>
    </div>
  );
}

export default App;
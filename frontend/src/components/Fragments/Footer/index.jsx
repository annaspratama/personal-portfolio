const Footer = () => {
    return (
        <footer className="text-center mt-10">
            <p className="text-sm dark:text-light/70">
                Annas Pratama's Portfolio | Copyright @ 2024 | Build with
                <a href="https://www.djangoproject.com" target="_blank" rel="noreferrer" className="inline-block border-b border-b-transparent text-primary transition hover:border-b-primary hover:text-blue-600 ml-1">
                    Python Django
                </a>,
                <a href="https://react.dev" target="_blank" rel="noreferrer" className="inline-block border-b border-b-transparent text-primary transition hover:border-b-primary hover:text-blue-600 ml-1">
                    React JS
                </a>, and 
                <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="inline-block border-b border-b-transparent text-primary transition hover:border-b-primary hover:text-blue-600 ml-1">
                    Tailwind CSS
                </a>
            </p>
        </footer>
    )
}

export default Footer
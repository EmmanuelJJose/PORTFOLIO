export default function E() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
            <main className="grid min-h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-9xl font-bold text-indigo-600 mb-3" style={{ fontFamily: 'fantasy' }}>404</p>
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                        Page not found
                    </h1>
                    <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <span
                            className="mt-10 flex items-center justify-center gap-x-6 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                        >
                            Go back home
                        </span>
                    </div>
                </div>
            </main> 
        </>
    )
}

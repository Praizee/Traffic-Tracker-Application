import { FaChevronUp } from "react-icons/fa6";

const ScrollToTop = () => {
    return (
        <div className="h-full">
            <div className="absolute end-4 bottom-4 tablet:end-6 tablet:bottom-6 laptop:end-8 laptop:bottom-8">
                <a
                    className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition cursor-pointer hover:bg-teal-500 tablet:p-3 laptop:p-4"
                >
                    <span className="sr-only">Back to top</span>

                    <FaChevronUp className="h-5 w-5" />
                </a>
            </div>

        </div>
    )
}

export default ScrollToTop
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // listen for scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-4 bottom-4 tablet:right-6 tablet:bottom-6 laptop:right-8 laptop:bottom-8">
      {isVisible && (
        <a
          className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition cursor-pointer hover:bg-teal-500 tablet:p-3 laptop:p-4"
          onClick={scrollToTop}
        >
          <span className="sr-only">Back to top</span>
          <FaChevronUp className="h-5 w-5" />
        </a>
      )}
    </div>
  );
};

export default ScrollToTop;

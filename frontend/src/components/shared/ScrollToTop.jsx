import { ArrowUp } from "lucide-react";
import React from "react";

function ScrollToTop() {
    const [isVisible, setIsVisible] = React.useState(false);
  
    React.useEffect(() => {
      const toggleVisibility = () => {
        setIsVisible(window.pageYOffset > 300);
      };
  
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  
    return (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-16 right-8 p-3 bg-purple-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-purple-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    );
}

export default ScrollToTop;
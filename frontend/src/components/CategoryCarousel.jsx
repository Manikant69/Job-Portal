import React from "react";
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Code,
  LineChart,
  Palette,
  Server,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

function CategoryCarousel() {
  const { allJobs } = useSelector((store) => store.job);

  const categories = [
    {
      icon: Code,
      title: "Frontend Developer",
      count: allJobs.filter((job) => job.title == "Frontend Developer").length,
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
    },
    {
      icon: Server,
      title: "Backend Developer",
      count: allJobs.filter((job) => job.title == "Backend Developer").length,
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
    },
    {
      icon: Palette,
      title: "UI/UX Designer",
      count: allJobs.filter((job) => job.title == "UI/UX").length,
      color: "bg-gradient-to-br from-pink-500 to-pink-700",
    },
    {
      icon: LineChart,
      title: "Data Analyst",
      count: allJobs.filter((job) => job.title == "Data Analyst").length,
      color: "bg-gradient-to-br from-green-500 to-green-700",
    },
    {
      icon: Briefcase,
      title: "Product Manager",
      count: allJobs.filter((job) => job.title == "Product Manager").length,
      color: "bg-gradient-to-br from-orange-500 to-orange-700",
    },
  ];

  const scroll = (direction) => {
    const container = document.getElementById("category-container");
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular <span className="text-purple-600">Categories</span>
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <div
            id="category-container"
            className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-8"
          >
            {categories.map((category, index) => (
              <div
                onClick={() => searchJobHandler(category.title)}
                key={index}
                className="group cursor-pointer"
              >
                <div
                  className={`relative p-6 rounded-xl transition-all duration-300 group-hover:-translate-y-1 min-w-[240px] ${category.color}`}
                >
                  <category.icon className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {category.title}
                  </h3>
                  <p className="text-white/80">{category.count} jobs</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CategoryCarousel;

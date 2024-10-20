import { categories, feedback } from "../data";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import Footer from "./Footer";
function Categories() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 1;

  const scrollleft = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const scrollRight = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, feedback.length - itemsPerPage)
    );
  };

  const handlemore=()=>{
    alert("Login to explore more courses!.")
  }

  return (
    <div className="mb-5 mt-96 transform translate-y-40">
      <div
        className="bg-[#04AF90] mb-5  rounded-md"
        style={{
          width: "calc(100% - 100px)",
          marginLeft: "60px",
          marginRight: "-30px",
          height: "27rem",
        }}
      >
        <div className="ml-96">
        <p className="ml-16 p-7 font-bold text-2xl bebas-neue-regular text-blue-900">Courses Category</p>

        </div>
        
      </div>
      <h1 className="font-normal -mt-96 ml-96 text-md ">
        Onlearning is one powerful online software suite that combines all the tools<br/>
        <p className="ml-20 ">needed to run successfull school or office</p>
      </h1>
      
      <div className="gap-2 grid grid-cols-4 ml-20">
        {categories.map(function (item, index) {
          return (
            <div
              key={index}
              className="w-52 h-60 mt-4  rounded-md shadow-[6px_0px_12px_-2px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-[6px_0px_15px_-2px_rgba(0,0,0,0.5)] bg-green-50"
            >
              <img
                src={item.imageSrc}
                alt=""
                className="w-16 h-16 ml-16 mt-4 rounded-full bg-transparent"
              />
              <h1 className="text-lg font-semibold text-black -ml-1 mt-2 text-center font-sans">
                {item.name}
              </h1>
              <div className="font-sans text-sm mt-4 leading-6">
              <h1 className="ml-5">{item.title}</h1>
              <h1 className="ml-8">{item.title1}</h1>
              </div>
              <div className="bg-orange-400 w-20 h-7 mt-4 ml-16 p-1 rounded-xl">
                <div className="ml-4">
                <button onClick={handlemore} className="justify-self-centercenter transform -translate-y-1 text-white">more</button>
                  </div>
                </div>
              
            </div>
          );
        })}
      </div>
      <div className="mt-40 ml-96">
        <img src={"/one.svg"} alt="" className="w-3 -ml-4 -mb-5" />
        <h1 className="font-semibold font-serif text-2xl ">
          Testimonial from our Students
        </h1>
        <img src={"/two.svg"} alt="" className="w-3 ml-96 -mt-8" />
      </div>
      <hr className="mt-1 border-t-2 border-zinc-100 mb-3" />
      <div className="mt-12 ml-96 mb-5 relative">
        <div className="w-2/3 h-40 border-2 -ml-20 rounded-md border-zinc-100 relative shadow-[4px_5px_5px_3px_rgba(0,0,0,0.2)] transition-shadow duration-300 hover:shadow-[2px_3px_6px_4px_rgba(0,0,0,0.9)">
          <div className="w-20 h-20 bg-gray-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -ml-52"></div>
          <img
            src={"/flame.svg"}
            alt=""
            className="w-7 absolute top-1/2 left-1/2 transform -translate-x-9 -translate-y-12 -ml-52"
          />
        </div>

        <div>
          {feedback.slice(startIndex, startIndex + itemsPerPage).map(function (item, index) {
            return (
              <div className="-mt-36" key={index}>
                <p className="text-lg font-bold text-gray-600 mt-2 ml-32">
                  &nbsp;{item.name}
                </p>
                <div className="ml-14 mt-1">
                  <h1 className="text-md text-gray-500 mt-3">
                    {item.desc}
                    <br />
                    {item.desc1}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between w-1/3 mx-auto -mt-8">
        <div className="-ml-96">
        <button onClick={scrollleft} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 -ml-9">
            <FaChevronLeft className="text-xl" />
          </button>
        </div>
          
          <button onClick={scrollRight} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 ">
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        <img src={"/one.svg"} alt="" className="w-3 -mt-20 ml-28" />
        <img src={"/two.svg"} alt="" className="w-3 -mt-6 ml-48" />
      </div>
      <Footer/>
    </div>
  );
}

export default Categories;

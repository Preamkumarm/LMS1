// import boybanner from "../assets/boybanner.png";
import rightbanner from "../assets/i3.png";
import Categories from "./Categories";
import { list } from "../data";
import { useState, useEffect } from "react";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTitle,setCurrentTitle] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % list.length 
      );

      setCurrentTitle((prevIndex)=>(prevIndex+1) % list.length );
      setStartIndex((prevIndex)=>(prevIndex+1) % list.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);
  return (
    <div>
      <div
        className="w-auto h-96 ml-1 mt-2 rounded-md"
        style={{ background: "linear-gradient(90deg, #027373, #04AF90)" }}
      ></div>

      
      <div className="ml-96 -mt-72 font-bold text-3xl leading-10 text-zinc-200 relative">
       
      </div>

      <div className="ml-96 mt-1 font-bold font-serif text-3xl leading-relaxed prompt-regular">
        <div className="p-8">
          <img src={"/one.svg"} alt="" className="w-3 ml-80 gap-3 transform translate-x-8 -mt-9" />
        </div>{" "}
        <div className="ml-96">
        <h1 className="-mt-20 ml-7">Develop Your Skills</h1>
        <h1 className="-ml-5">Get Personalized Carrer</h1>
        <h1 className="ml-16">Guidance</h1>
        </div>
      </div>
      <div className="ml-96">
      <img src={"/two.svg"} alt="" className="w-4 ml-96 -mt-9 transform translate-x-52" />
      </div>

      <img src={rightbanner} alt="" className="-mt-52 w-2/4 h-auto ml-4 transform translate-y-1"/>
      <div className="w-80 h-96 bg-[#04AF90] mt-40 ml-16 rounded-md p-4 flex flex-col justify-between items-center shadow-[6px_0px_12px_-2px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-[6px_0px_15px_-2px_rgba(0,0,0,0.5)]">
      <h1 className="text-center p-4 font-bold text-2xl protest-strike-regular text-gray-800">{list[currentTitle].title}</h1>
  <h1 className="leading-8 text-start font-sans text-sm -mt-12 ml-3">{list[startIndex].desc}</h1>
  <div className="flex flex-col gap-6 w-full">
    {/* <hr className="border-t-1 border-white" />
    <hr className="border-t-1 border-white" />
    <hr className="border-t-1 border-white" />
    <hr className="border-t-1 border-white" /> */}
  </div>
</div>

      <div>
        {list.map((item, index) => (
        <div key={index}>
          <div className="relative ml-96">
            <div className="ml-96 -mt-96">
              {index === currentImageIndex && (
                <img
                  src={item.imageSrc}
                  alt={`List ${index + 1}`}
                  className="w-3/4 h-auto absolute top-0 transition-all duration-1000 ease-in-out transform  -translate-x-56 -translate-y-8"
                />
              )}
            </div>
          </div>
          {/* <h1 className="transform translate-y-5 text-lg">{item.title}</h1> */}
        </div>
      ))}
      </div>
      <div>
        <Categories />
      </div>
    </div>
  );
}

export default Home;

import { useState } from "react";

export default function Country ({item, handleCountryNames, handleCountryFags}) {
    const {name, flags, population, area} = item;
    const {common} = name;
    const {png} = flags;
    const [visited, setVisited] = useState(false);
    const handleVisit = () => {
        setVisited(!visited)
    }
    return (
        <div className={` border border-sky-400 rounded p-4 text-white shadow-xl font-light text-center space-y-2 ${visited && 'bg-sky-500'} `}>
            <h2>Country : {common} </h2>
            <img src={png} alt="" className="w-[200px] h-[100px] object-contain mx-auto" />
            <h2>Area : {area}</h2>            
            <h2>Population : {population}</h2>
            <button onClick={handleVisit} className="bg-blue-500 font-base shadow-xl px-3.5 py-1.5 rounded-full"> {visited ? "Visited" : "Not Visited"} </button> 
            <br />
            <button onClick={() => {
                handleCountryNames(common)
            }} className="bg-red-500 font-base shadow-xl px-3.5 py-1.5 rounded-full">Show Country Name</button>   
            <br />      
            <button  className="bg-pink-500 font-base shadow-xl px-3.5 py-1.5 rounded-full" onClick={() => {
                handleCountryFags(png)
            }}>Show Country Flag</button>  
        </div>
    );
};

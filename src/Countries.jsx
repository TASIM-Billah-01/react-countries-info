import { useEffect, useState } from "react";
import Country from "./Country";

export default function Countries () {
    const [countries, setCountries] = useState([])
    const [countryName, setCountryName] = useState([])
    const [countryFlag, setCountryFlags] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,languages,currencies,population,area,flags,timezones')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    const handleCountryNames = c => {
        if (!countryName.includes(c)) {
            setCountryName([...countryName, c])
        }
    }
    const handleCountryFags = c => {
        if (!countryFlag.includes(c)) {
            setCountryFlags([...countryFlag, c])
        }
    }
    return (
<div className="bg-gray-700">
    <div className="bg-gray-600 p-4 justify-between  mb-4 items-center flex shadow-xl">
        <h2 className="font-medium text-white text-xl">Where in the world ?</h2>
    </div>
    <div>
        <h2 className="text-center text-white text-2xl font-medium">Countries : {countries.length}</h2>
    </div>
    <div className="border border-sky-400 w-64 rounded-md sm:w-96 space-y-1 p-4  mt-4 mx-auto">

    <div className="space-y-2">

    {
        countryName.map(item => <li className="text-red-400 font-light text-xl text-center"> {item} </li>)
    }
    </div>

    <div className="space-y-3 mt-4">

    {
        countryFlag.map(item => <img src={item} className="w-44 mx-auto"></img>)
    }
    </div>

    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
        {
        countries.map(item => <Country item = {item} handleCountryNames = {handleCountryNames} handleCountryFags = {handleCountryFags}></Country>)
        }
    </div>
</div>
    );
};

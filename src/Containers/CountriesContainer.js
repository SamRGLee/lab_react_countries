import { useState, useEffect } from "react";
import CountriesList from "../Components/CountriesList";

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const loadCountryData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
    }


    useEffect(() => {
        loadCountryData();
    }, []);

    const handleVisitButton= (country) => {
        setVisitedCountries((prevVisitedCountries) => [...prevVisitedCountries, country]);
        setCountries((prevCountries => prevCountries.filter(prevCountry => prevCountry.name.common !== country.name.common)));
      };

    return(
        <>
            <h2>Countries List:</h2>
            <CountriesList countries={countries} handleVisitButton={handleVisitButton}/>
            <h2>Visited Countries List:</h2>
            <CountriesList countries={visitedCountries}/>
        </>
    )

}

export default CountriesContainer;
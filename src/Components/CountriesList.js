import Country from "./Country";

const CountriesList = ({countries, handleVisitButton}) => {
    
    const mappedCountries = countries.map((country) => {
    
         return <ul key = {country.id}> 
            <li> 
                <Country country={country} handleVisitButton={handleVisitButton}/>
            </li>
        </ul>
        
    })
        return(
            <>
                {mappedCountries}
            </>
        );
}

export default CountriesList;
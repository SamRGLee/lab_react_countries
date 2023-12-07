const Country = ({country, handleVisitButton}) => {

    const handleButton = () => {
        handleVisitButton(country)
    }
    return ( 
        <>
            <p>{country.name.common}</p>
            {handleVisitButton && (<button onClick={handleButton}>visit</button>)}
        </>

     );
}
 
export default Country;
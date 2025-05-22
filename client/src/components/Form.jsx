import { useState } from "react";
import fetchApi from "../utils/fetch";

const Form = () => {
    const [surfaces, setSurfaces] = useState(0);
    const [bedrooms, setBedrooms] = useState(0);
    const [restrooms, setRestrooms] = useState(0);

    const handleSurfaceChange = (e) => {
        setSurfaces(e.target.value);    
    }

    const handleBedroomChange = (e) => {
        setBedrooms(e.target.value);    
    }

    const handleRestroomChange = (e) => {
        setRestrooms(e.target.value);
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        fetchApi(surfaces, restrooms, bedrooms);
    }


return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="surface">surface:</label>
        <input type="number" id="surface" value={surfaces} onChange={handleSurfaceChange} />
        <label htmlFor="bedrooms">bedrooms:</label>
        <input type="number" id="bedrooms" value={bedrooms} onChange={handleBedroomChange} />
        <label htmlFor="restrooms">restrooms:</label>
        <input type="number" id="restrooms" value={restrooms} onChange={handleRestroomChange} />
        <p>{surfaces} {bedrooms} {restrooms}</p>
        <button type="submit">submit</button>
    </form>
)
}

export default Form;


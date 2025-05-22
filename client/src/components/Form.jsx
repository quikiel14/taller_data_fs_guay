import { useState } from "react";
import fetchApi from "../utils/fetch";
import "../index.css"

const Form = () => {
    const [surfaces, setSurfaces] = useState(0);
    const [bedrooms, setBedrooms] = useState(0);
    const [restrooms, setRestrooms] = useState(0);
    const [price, setPrice] = useState(null);
    const handleSurfaceChange = (e) => {
        setSurfaces(e.target.value);
    }

    const handleBedroomChange = (e) => {
        setBedrooms(e.target.value);
    }

    const handleRestroomChange = (e) => {
        setRestrooms(e.target.value);
    }

    const  handleSubmit = async (e) => {
        e.preventDefault();
        const predictedPrice = await fetchApi(surfaces, restrooms, bedrooms);
        setPrice(Math.floor(predictedPrice.prediction));
    }


    return (
        <section>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="surface">Surface: </label>
                <input type="number" id="surface" value={surfaces} onChange={handleSurfaceChange} />
                <label htmlFor="bedrooms">Bedrooms: </label>
                <input type="number" id="bedrooms" value={bedrooms} onChange={handleBedroomChange} />
                <label htmlFor="restrooms">Restrooms: </label>
                <input type="number" id="restrooms" value={restrooms} onChange={handleRestroomChange} />
                <button type="submit">Predict</button>
            </form>
            <section>
                {price && <h2>Estimated price: ${price}</h2>}
            </section>
        </section>

    )
}

export default Form;


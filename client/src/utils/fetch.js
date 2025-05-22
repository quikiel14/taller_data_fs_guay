async function fetchApi(surface, restrooms, bedrooms) {
    try {
        const result = await fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                surface,
                restrooms,
                bedrooms
            })
        });

        if (!result.ok) {
            throw new Error("Not found");
        }

        const resultJson = await result.json();
        console.log("Result:", resultJson);
        return resultJson;
    } catch (error) {
        console.log("Error en fetch:", error);
    }
}

export default fetchApi;
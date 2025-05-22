async function fetchApi(surfaces, restrooms, bedrooms) {
    try {
        const result = await fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                surfaces,
                restrooms,
                bedrooms
            })
        });

        if (!result.ok) {
            throw new Error("Not found");
        }

        const resultJson = await result.json();
        return resultJson;
    } catch (error) {
        console.log("Error en fetch:", error);
    }
}

export default fetchApi;
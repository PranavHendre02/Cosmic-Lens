const api_key = "8ZWsWRhe6Bi9cV0LsGtkdVblkTAIYJpincIqeoM9";

const apodContent = document.getElementById("apod-content");

async function fetchApod() {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`);

        if (!response.ok) {

            throw new Error(`API error: ${response.status}`);

        }
        const data = await response.json();

        apodContent.innerHTML = `

            <h3 class="text-xl font-semibold mb-2">${data.title}</h3>

            <img src="${data.url}" alt="${data.title}" class="w-full h-auto rounded-lg shadow-md mb-4">

            <p class="text-gray-700">${data.explanation}</p>
        `;
    } 
    catch (error) 
    {
        console.error("Error fetching APOD:", error);

        apodContent.innerHTML = `<p class="text-red-500">Failed to load Picture of the Day.</p>`;
        
    }
}

fetchApod();
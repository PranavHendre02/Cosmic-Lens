const api_key = "8ZWsWRhe6Bi9cV0LsGtkdVblkTAIYJpincIqeoM9";

const btn = document.getElementById("btn");

const show = document.querySelector(".showcase");

const mainShowcase = document.querySelector(".mainshowcase");

btn.addEventListener("click", updateUrl);

function updateUrl() 
{

    const rover = document.getElementById("rover").value;

    const earthDate = document.getElementById("date").value;

    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?`;


    if (!earthDate.trim()) 
    {
        alert("Please select a valid date!");

        return;
    }

    if (!rover.trim()) 
    {
        alert("Please select a valid rover!");

        return;
    }

    url += `earth_date=${earthDate}&api_key=${api_key}`;

    fetchPhotos(url);

}

async function fetchPhotos(url) 
{
    try 
    {
        const response = await fetch(url);

        if (!response.ok) 
        {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        show.innerHTML = '';

        if (data.photos.length === 0)
         {
            alert("No photos found! Try another rover or date.");

            mainShowcase.classList.add("hidden");
            return;
        }

        mainShowcase.classList.remove("hidden");

        data.photos.forEach(photo => 
        {
            const img = document.createElement("img");

            img.src = photo.img_src;

            img.alt = "Mars Rover Photo";

            img.classList.add("w-full", "h-auto", "rounded-lg", "shadow-md");

            show.appendChild(img);

        });

    } catch (error) 
    {
        console.error("Error fetching photos:", error);

        alert("An error occurred while fetching photos.");

        mainShowcase.classList.add("hidden");
        
    }
}
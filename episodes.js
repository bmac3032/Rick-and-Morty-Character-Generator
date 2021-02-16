// UI Variables
const input = document.getElementById("search"),
  display = document.getElementById("characters");

input.addEventListener("keyup", (e) => {
  let output = "";
  fetch(`https://rickandmortyapi.com/api/episode/?name=${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.results.forEach((episode) => {
        if (e.target.value.length >= 1) {
          output += `          
            <div class="card mt-5 mx-auto" style="width: 18rem">            
                <div class="card-body">
                    <h5 class="card-title">${episode.name}</h5>
                    <p class="badge badge-pill badge-info">ID: ${episode.id}</p>
                    <p class="badge badge-pill badge-success"> Air date: ${episode.air_date}</p>                  
                </div>
            </div>        
          `;
        }
      });
      display.innerHTML = output;
    });
  output = "";
});

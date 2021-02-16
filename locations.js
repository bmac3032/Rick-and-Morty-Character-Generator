// UI Variables
const input = document.getElementById("search"),
  display = document.getElementById("characters");

input.addEventListener("keyup", (e) => {
  let output = "";
  fetch(`https://rickandmortyapi.com/api/location/?name=${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.results.forEach((location) => {
        if (e.target.value.length >= 1) {
          output += `          
            <div class="card mt-5 mx-auto" style="width: 18rem">            
                <div class="card-body">
                    <h5 class="card-title">${location.name}</h5>
                    <p class="badge badge-pill badge-info">${location.type}</p>
                    <p class="badge badge-pill badge-success">${location.dimension}</p>                  
                </div>
            </div>        
          `;
        }
      });
      display.innerHTML = output;
    });
  output = "";
});

const btn = document.getElementById("btn"),
  display = document.getElementById("character");

btn.addEventListener("click", getCharacter);

async function getCharacter() {
  const number = Math.floor(Math.random() * 671);

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${number}`
  );
  const data = await res.json();

  display.innerHTML = `
  <div class="card mt-5 mx-auto" style="width: 18rem;">
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="badge badge-pill badge-info">
                ${data.gender}
              </p>
              <p class="badge badge-pill ${
                data.status === "Alive" ? "badge-success" : "badge-danger"
              }">
                ${data.status}
              </p>
              <p class="badge badge-pill badge-info">
                ${data.species}
              </p>
              <p class="badge badge-pill badge-info">
                ${data.location.name}
              </p>              
            </div>
          </div>
  `;
}

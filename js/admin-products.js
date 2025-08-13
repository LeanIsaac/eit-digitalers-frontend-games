const games = [
  {
    id: 1,
    name: "The Legend of Zelda: Breath of the Wild",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    price: 59.99,
    category: "Action",
    description:
      "An open-world action-adventure game set in a vast, post-apocalyptic world where players control Link to defeat Calamity Ganon and save Princess Zelda.",
    createdAt: "2023-10-01T12:00:00Z",
  }, // 0
  {
    id: 2,
    name: "Super Mario Odyssey",
    image:
      "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5",
    price: 49.99,
    category: "Adventure",
    description:
      "A 3D platformer where Mario travels across various kingdoms to rescue Princess Peach from Bowser.",
    createdAt: "2023-10-02T12:00:00Z",
  }, // 1
  {
    id: 3,
    name: "God of War Ragnarok",
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/capsule_616x353.jpg?t=1750909504",
    price: 99.99,
    category: "Action",
    description:
      "An action-adventure game that follows Kratos and his son Atreus as they journey through the world of Norse mythology.",
    createdAt: "2023-10-03T12:00:00Z",
  }, // 2
  {
    id: 4,
    name: "The Witcher 3: Wild Hunt",
    image:
      "https://juegosdigitalesargentina.com/files/images/productos/1618591872-the-witcher-3-wild-hunt-complete-edition-ps5.jpg",
    price: 49.99,
    category: "RPG",
    description:
      "An open-world RPG that follows Geralt of Rivia as he searches for his adopted daughter while battling monsters and engaging in political intrigue.",
    createdAt: "2023-10-04T12:00:00Z",
  }, // 3
  {
    id: 5,
    name: "Spider Man 2",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2651280/cb8da9b3e99cf7362cd88c10a0544b7fe892ccad/capsule_616x353.jpg?t=1750954033",
    price: 39.99,
    category: "Action",
    description: "An action-adventure game where players control both Peter Parker and Miles Morales as they fight against various villains in New York City.",
    createdAt: "2023-10-05T12:00:00Z",
  }
];

const tableBody = document.getElementById("tableBody");


games.forEach((juego) => {

    tableBody.innerHTML += `<tr>
    <td class="cell-image">
      <img src="${juego.image}" alt="Imagen del producto" />
    </td>
    <td class="cell-name">${juego.name}</td>

    <td class="cell-category">${juego.category}</td>

    <td class="cell-price">$ ${juego.price}</td>

    <td class="cell-date">2023-10-01</td>

    <td class="cell-actions">
      <button class="btn btn-primary btn-sm">
        <i class="fa-solid fa-pencil"></i>
      </button>
      <button class="btn btn-danger btn-sm">
        <i class="fa-solid fa-trash"></i>
      </button>
    </td>
  </tr>`;

})




/*
<tr>
  <td class="cell-image">
    <img src="https://picsum.photos/100/100" alt="Imagen del producto" />
  </td>
  <td class="cell-name">Título del Producto</td>

  <td class="cell-category">Categoría del Producto</td>

  <td class="cell-price">$100.00</td>

  <td class="cell-date">2023-10-01</td>

  <td class="cell-actions">
    <button class="btn btn-primary btn-sm">
      <i class="fa-solid fa-pencil"></i>
    </button>
    <button class="btn btn-danger btn-sm">
      <i class="fa-solid fa-trash"></i>
    </button>
  </td>
</tr>;
*/

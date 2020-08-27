import getData from "../utils/getData";

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="Characters">
      ${characters.map(
        (character) => `
      <article class="Character-item">
        <a>          
          <h1>${character.car_make}</h1>
          <h3>${character.license_plate}</h3>
          <h3>${character.car_model}</h3>
        </a>
      </article>
      `
      ).join('')}
    </div>
  `;
  return view;
};

export default Home;
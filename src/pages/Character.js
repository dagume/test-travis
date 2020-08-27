import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const view = `
    <div class="Characters-inner">
      <article class="Character-card">        
        <h2>${character.car_make}</h2>
      </article>
      <article class="Character-card">
        <h3>Episodes: <span>${character.car_make}</span></h3>
      </article>

    </div>
  `;

  return view;
};

export default Character;

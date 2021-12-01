import { getWalkers } from "./database.js";
import { getCities } from "./database.js";

const walkers = getWalkers();
const cities = getCities();

export const CityList = () => {
  let citiesHTML = "<ol>";

  for (const walker of walkers) {
    for (const city of cities) {
      if (walker.cityId === city.id) {
        citiesHTML += `<li>${city.name}</li>`;
        break;
      }
    }
  }

  citiesHTML += "</ol>";

  return citiesHTML;
};


// let citiesWithService = cities.filter((city) =>walkers.some((walker) => walker.cityId === city.id));
// citiesWithService.map()

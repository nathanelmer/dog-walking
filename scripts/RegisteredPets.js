import { getPets } from "./database.js";
import { getWalkers } from "./database.js";

const pets = getPets();
const walkers = getWalkers();

document.addEventListener("click", (clickedItem) => {
  const itemClicked = clickedItem.target;
  if (itemClicked.id.startsWith("pet")) {
    const [, petId] = itemClicked.id.split("--");
    let pId = pets.find((pet) => pet.id === parseInt(petId)); 
    let walkerId = walkers.find((walker) => walker.id === pId.walkerId);
    window.alert(`${pId.name} is being walked by ${walkerId.name}`);
  }
});

export const registeredPets = () => {
  let petHTML = "<ul>";

  for (const pet of pets) {
    petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`;
  }

  petHTML += "</ul>";

  return petHTML;
};

import React, { useState,  useEffect } from 'react';
import pet,  { ANIMALS } from '@frontendmasters/pet';
import useDropdown  from './useDropdown'; 

const SearchParams = () => {
  const [location, setLocation] = useState("Indiana, US");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal","dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed","", breeds);
  console.log(ANIMALS);

  useEffect(() => {
    pet.breeds("dog").then(console.log, console.error);

    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({breeds}) => {
      const breedStrings = breeds.map(({name}) => name);
      setBreeds(breedStrings);
    }, error => console.error(error));
  },  [animal, setBreed, setBreeds])
  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form action="">
        <label htmlFor="location">
          Location
          <input id="location" value={location} 
          placeholder="Location" onChange={ e =>
            setLocation(e.target.value)
          }/>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams;
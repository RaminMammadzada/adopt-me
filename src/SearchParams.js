import React, { useState,  useEffect } from 'react';
import pet,  { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropdown  from './useDropdown'; 

const SearchParams = () => {
  const [location, setLocation] = useState("Indiana, US");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal","dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed","", breeds);
  const [pets, setPets] = useState([])

  async function requestPets(){
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []); 
  }

  useEffect(() => {
    pet.breeds("dog").then(console.log, console.error);

    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({breeds: apiBreeds}) => {
      const breedStrings = apiBreeds.map(({name}) => name);
      setBreeds(breedStrings);
    }, error => console.error(error));
  },  [animal, setBreed, setBreeds])
  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
      }}>
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

      <Results pets={pets} />
    </div>
  )
}

export default SearchParams;
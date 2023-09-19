"use client"
import { useState, useEffect } from "react";
import CarCard from "./CarCard";
import { GrPowerReset } from "react-icons/gr";



// Composant FilterComponent

  export const FilterComponent = ({ onFilterChange, carsData, initialFilterState }: any) => {
  // États pour le filtre et la visibilité du filtre
  const [filter, setFilter] = useState(initialFilterState);
  const [filterVisible] = useState(true);
  const [carsDataFilter, setCarsDataFilter] = useState<any>([]);
  console.log(carsDataFilter);
  useEffect(() => {

    // Première initialisation des voitures filtrées
    setCarsDataFilter([...carsData]);
  }, [carsData]);

  // Gestionnaire de changement de l'année
  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedYear = Number(event.target.value);
    setFilter({ ...filter, year: selectedYear });
  };

  // Gestionnaire de changement du kilométrage
  const handleMileageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedMileage = Number(event.target.value);
    setFilter({ ...filter, mileage: selectedMileage });
  };

  // Gestionnaire de changement du prix
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPrice = Number(event.target.value);
    setFilter({ ...filter, price: selectedPrice });
  };

  // Gestionnaire d'application du filtre
  const handleFilterApply = () => {
    onFilterChange(filter);
  };

  // Gestionnaire de réinitialisation du filtre
  const handleReset = () => {
    setFilter({
      year: 0,
      mileage: 0,
      price: 0,
      equipments: 0,
      features: 0,
    });
    setCarsDataFilter(carsData);
  };

  // Effet de mise à jour des voitures filtrées lors du changement du filtre
  useEffect(() => {
    const filtered = carsData.filter((car : any)  => {
      const yearMatch = filter.year === 0 || car.year === filter.year;
      const mileageMatch =
        filter.mileage === 0 ||
        (car.mileage >= filter.mileage && car.mileage <= filter.mileage);
      const priceMatch =
        filter.price === 0 ||
        (car.price >= filter.price && car.price <= filter.price);

      // Ajout de conditions pour le kilométrage et le prix
      const showCar =
        (filter.mileage === 0 || mileageMatch) &&
        (filter.price === 0 || priceMatch);

      return yearMatch && showCar;
    });

    // Mise à jour de l'état des voitures filtrées
    setCarsDataFilter(filtered);
  }, [filter, carsData, onFilterChange]);

  return (
    <>
      <div className="filtre flex flex-col justify-center items-center w-full lg:mt-20 md:mt-40">
        <h2 className="text-xl font-bold mb-4">
          Filtrer les voitures {/* Titre de la section de filtre */}
        </h2>
        {filterVisible && (
          <div className="flex flex-col justify-center gap-4 lg:flex-row md:flex-row sm:flex-col ">
            <div className="mb-4">
              <label htmlFor="year" className="block font-semibold mb-1">
                Année : {filter.year === 0 ? "" : filter.year}
                {/* Étiquette pour l'année sélectionnée */}
              </label>
              <input
                type="range"
                id="year"
                className="w-full custom-input-range"
                min={1960}
                max={2020}
                step={1}
                value={filter.year}
                onChange={handleYearChange}
              />
              <div className="flex justify-between">
                <span>1960</span>
                <span>2020</span>
              </div>
            </div>
            <div>
              <label htmlFor="mileage" className="block font-semibold mb-1">
                Kilométrage : {filter.mileage === 0 ? "" : filter.mileage}
                {/* Étiquette pour le kilométrage sélectionné */}
              </label>
              <input
                type="range"
                id="mileage"
                className="w-full custom-input-range"
                min={20000}
                max={100000}
                step={1000}
                value={filter.mileage}
                onChange={handleMileageChange}
              />
              <div className="flex justify-between">
                <span>20000</span>
                <span>100000</span>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block font-semibold mb-1">
                Prix : {filter.price === 0 ? "" : `${filter.price}€`}
                {/* Étiquette pour le prix sélectionné */}
              </label>
              <input
                type="range"
                id="price"
                className=" w-full custom-input-range"
                min={0}
                max={50000}
                step={1000}
                value={filter.price}
                onChange={handlePriceChange}
              />
              <div className="flex justify-between">
                <span>0€</span>
                <span>50000€</span>
              </div>
            </div>
          </div>
        )}

        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md bg-primaryColor"
          type="button"
          onClick={() => handleReset()}
        >
          <GrPowerReset />
          {/* Bouton de réinitialisation du filtre */}
        </button>
      </div>
      <div className=" portable gap-16 grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 lg:mt-38">
        {carsDataFilter.map((car :any, key : any) => (
          <CarCard
            key={key}
            title={car.name}
            year={car.year}
            price={car.price}
            mileage={car.mileage}
            features={car.features}
            equipments={car.equipments}
            photos={car.AnnoncePhotos}
      
          />
        ))}
      </div>
    </>
  );
};



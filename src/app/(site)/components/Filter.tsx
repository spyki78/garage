"use client";
// Importations des modules nécessaires
import { useState, useEffect } from "react";
import CarCard from "./CarCard";
import { GrPowerReset } from "react-icons/gr";

// Définition de l'interface FilterProps
interface FilterProps {
  onFilterChange: (filter: FilterState) => void;
  carsData: Car[];
}

// Définition de l'interface FilterState
interface FilterState {
  year: number;
  mileage: number;
  price: number;
  equipments: any;
  features: any;
}

// Définition de l'interface Car
interface Car {
  id: number;
  name: string;
  year: number;
  mileage: number;
  price: number;
  features: any;
  equipments: any;
  
}

// Données des voitures
const carsData: Car[] = [
  // Ajoutez plus de données de voitures si nécessaire
  {
    id: 1,
    name: "Peugeot 3008",
    year: 2018,
    mileage: 25000,
    price: 25000,
    features: "PLUG-IN HYBRID ESSENCE HYBRID4 300 e-EAT8 Bleu Célèbes",
    equipments:
      "Démarrage mains libres,Air conditionné automatique bi-zone avec aérateurs aux places arrière,Drive Mode : Choix de 2 modes de conduite (Eco ou Sport) pour les motorisations à boite automatique,Drive Mode : Rétroviseurs extérieurs électriques et dégivrants.",
  },
  {
    id: 2,
    name: "Duster",
    year: 2015,
    mileage: 30000,
    price: 18000,
    features: "PLUG-IN HYBRID ESSENCE HYBRID4 300 e-EAT8 Bleu Célèbes",
    equipments:
      "Démarrage mains libres,Air conditionné automatique bi-zone avec aérateurs aux places arrière,Drive Mode : Choix de 2 modes de conduite (Eco ou Sport) pour les motorisations à boite automatique,Drive Mode : Rétroviseurs extérieurs électriques et dégivrants.",
  },

  {
    id: 3,
    name: "Scenic 3",
    year: 2011,
    mileage: 90000,
    price: 8000,
    features: "PLUG-IN HYBRID ESSENCE HYBRID4 300 e-EAT8 Bleu Célèbes",
    equipments:
      "Démarrage mains libres,Air conditionné automatique bi-zone avec aérateurs aux places arrière,Drive Mode : Choix de 2 modes de conduite (Eco ou Sport) pour les motorisations à boite automatique,Drive Mode : Rétroviseurs extérieurs électriques et dégivrants.",
  },

  {
    id: 4,
    name: "Duster",
    year: 2015,
    mileage: 30000,
    price: 18000,
    features: "PLUG-IN HYBRID ESSENCE HYBRID4 300 e-EAT8 Bleu Célèbes",
    equipments:
      "Démarrage mains libres,Air conditionné automatique bi-zone avec aérateurs aux places arrière,Drive Mode : Choix de 2 modes de conduite (Eco ou Sport) pour les motorisations à boite automatique,Drive Mode : Rétroviseurs extérieurs électriques et dégivrants.",
  },

  // Ajoutez d'autres voitures ici si nécessaire
];


// État initial du filtre
const initialFilterState: FilterState = {
  year: 0,
  mileage: 0,
  price: 0,
  equipments: 0,
  features: 0,
};

// Composant FilterComponent
const FilterComponent: React.FC<FilterProps> = ({
  onFilterChange,
  carsData,
}) => {

  // États pour le filtre et la visibilité du filtre
  const [filter, setFilter] = useState<FilterState>(initialFilterState);
  const [filterVisible, setFilterVisible] = useState<boolean>(true);
  const [carsDataFilter, setCarsDataFilter] = useState<Car[]>([]);
  console.log(carsDataFilter);
  useEffect(() => {
    // Première initialisation des voitures filtrées
    setCarsDataFilter([...carsData]);
  }, [carsData]);

  // Gestionnaire de changement de l'année
  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedYear = Number(event.target.value);
    setFilter({ ...filter, year: selectedYear });
    setCarsDataFilter(carsData.filter((car) => car.year == selectedYear));
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
    const filtered = carsData.filter((car) => {
      const yearMatch = filter.year === 0 || car.year === filter.year;
      const mileageMatch =
        filter.mileage === 0 ||
        (car.mileage >= filter.mileage && car.mileage <= filter.mileage + 1000);
      const priceMatch =
        filter.price === 0 ||
        (car.price >= filter.price && car.price <= filter.price + 1000);

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
      <div className=" flex flex-col justify-center items-center w-full lg:mt-20 md:mt-40">
        <h2 className="text-xl font-bold mb-4">Filtrer les voitures</h2>
        {filterVisible && (
          <div className=" flex flex-col justify-center gap-4 lg:flex-row md:flex-row sm:flex-col ">
            <div className="mb-4">
              <label htmlFor="year" className="block font-semibold mb-1">
                Année : {filter.year === 0 ? "Toutes" : filter.year}
              </label>
              <input
                type="range"
                id="year"
                className="w-full"
                min={2000}
                max={2020}
                step={1}
                value={filter.year}
                onChange={handleYearChange}
              />
              <div className="flex justify-between">
                <span>2000</span>
                <span>2020</span>
              </div>
            </div>
            <div>
              <label htmlFor="mileage" className="block font-semibold mb-1">
                Kilométrage : {filter.mileage === 0 ? "Tous" : filter.mileage}
              </label>
              <input
                type="range"
                id="mileage"
                className="w-full"
                min={20000}
                max={40000}
                step={1000}
                value={filter.mileage}
                onChange={handleMileageChange}
              />
              <div className="flex justify-between">
                <span>20000</span>
                <span>40000</span>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block font-semibold mb-1">
                Prix : {filter.price === 0 ? "Tous" : `${filter.price}€`}
              </label>
              <input
                type="range"
                id="price"
                className="w-full"
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
        </button>
      </div>
      <div className=" portable gap-16 grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 lg:mt-38">
        {carsDataFilter.map((car, key) => (
          <CarCard
            key={key}
            title={car.name}
            year={car.year}
            price={car.price}
            mileage={car.mileage}
            features={car.features}
            equipments={car.equipments}
          />
        ))}
      </div>
    </>
  );
};

const Home: React.FC = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(carsData);

  const handleFilterChange = (filter: FilterState) => {
    // Mise à jour des voitures filtrées avec le nouveau filtre
    const filtered = carsData.filter((car) => {
      const yearMatch = filter.year === 0 || car.year === filter.year;
      const mileageMatch =
        filter.mileage === 0 ||
        (car.mileage >= filter.mileage && car.mileage <= filter.mileage + 1000);
      const priceMatch =
        filter.price === 0 ||
        (car.price >= filter.price && car.price <= filter.price + 1000);

      return yearMatch && mileageMatch && priceMatch;
    });

    setFilteredCars(filtered);
  };

  useEffect(() => {
    handleFilterChange(initialFilterState);
  }, []);
  return (
    <div className=" my-auto mx-auto mt-14">
      <FilterComponent
        onFilterChange={handleFilterChange}
        carsData={carsData}
      />
    </div>
  );
};

export default Home;

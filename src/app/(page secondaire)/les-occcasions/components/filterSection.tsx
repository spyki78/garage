"use client";
import { FilterComponent } from "@/app/(site)/components/Filter";
import { useEffect, useState } from "react";

export const FilterSection = ({cars} : any) => {
  const [filteredCars, setFilteredCars] = useState(cars);
  const initialFilterState: any = {
    year: 0,
    mileage: 0,
    price: 0,
    equipments: 0,
    features: 0,
  };
  
  const handleFilterChange = (filter: any) => {

    // Mise à jour des voitures filtrées avec le nouveau filtre

    const filtered = cars.filter((car : any) => {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className=" my-auto mx-auto mt-44">
      <FilterComponent
        onFilterChange={handleFilterChange}
        carsData={cars}
        initialFilterState={initialFilterState}
      />
    </div>
  );
};

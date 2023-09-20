import { Annonce } from "./annonce";
export const Annonces = ({ annonces }: any) => {
  return (
    <div className="flex-row items-center justify-between min-h-screen">
      <div className="flex flex-col items-center">
        {annonces.map((annonce: any) => (
          <Annonce
            key={annonce.id}
            id={annonce.id}
            title={annonce.title}
            price={annonce.price}
            year={annonce.year}
            mileage={annonce.mileage}
            features={annonce.features}
            equipments={annonce.equipments}
            isValid={annonce.isValid}
          />
        ))}
      </div>
    </div>
  );
};

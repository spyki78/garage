export const getUniqFileName = ({ // pour le stockage d'images et pour éviter les doublons sinon image supprimé.
  carId,
  fileExtension,
}: {
  carId: number;
  fileExtension: string;
}) => {
  const currentDate = Date.now();
  const randomIntInclusive = getRandomIntInclusive(1, 30000);

  return `voiture-${carId}-${currentDate}-${randomIntInclusive}.${fileExtension}`;
};

export const getRandomIntInclusive = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

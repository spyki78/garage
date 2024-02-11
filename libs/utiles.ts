export const getUniqFileName = ({ // pour le stockage d'images et pour éviter les doublons sinon image supprimé.

  /**
 * Génère un nom de fichier unique basé sur l'ID de la voiture, l'extension de fichier fournie, la date actuelle et un nombre aléatoire.
 * @param carId L'ID de la voiture.
 * @param fileExtension L'extension de fichier.
 * @returns Le nom de fichier généré.
 */

  carId,
  fileExtension,
}: {
  carId: number;
  fileExtension: string;
}) => {
  // Obtenir la date actuelle
  const currentDate = Date.now();
   // Générer un nombre aléatoire inclusif entre 1 et 30000
  const randomIntInclusive = getRandomIntInclusive(1, 30000);
 // Construire et retourner le nom de fichier unique
  return `voiture-${carId}-${currentDate}-${randomIntInclusive}.${fileExtension}`;
};

export const getRandomIntInclusive = (min: number, max: number) => {
  // Arrondir le minimum à l'entier supérieur et le maximum à l'entier inférieur
  min = Math.ceil(min);
  max = Math.floor(max);
// Générer et retourner un nombre entier aléatoire inclusif entre min et max
  return Math.floor(Math.random() * (max - min + 1) + min);
};

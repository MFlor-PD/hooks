const CharacterCard = ({ name, image, source }) => (
  <div>
    <h2>Personaje de {source}</h2>
    <p>{name}</p>
    <img src={image} alt={name} />
  </div>
);

export default CharacterCard;

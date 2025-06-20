const fetchCharacter = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error al traer datos');
  const result = await response.json();
  return result;
};

export default fetchCharacter;
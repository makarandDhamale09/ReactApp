export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "2419409df5msh0f0c0335c6a58a7p1ea6f7jsn3253821fcdab",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = (await response).json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollors
};

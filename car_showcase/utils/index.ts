import { CarProps } from "@/types";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "2419409df5msh0f0c0335c6a58a7p1ea6f7jsn3253821fcdab",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera",
    {
      headers: headers,
    }
  );

  const result = (await response).json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollors

  const mileageFactor = 0.1; //Additional rate per mile driven

  const ageFactor = 0.05; //Additional rate per year of vehical age

  //Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  //Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

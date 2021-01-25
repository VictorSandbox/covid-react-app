import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const getData = async () => {
  try {
    const { data } = await axios.get(url);

    const response = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDaily = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

  return data

  } catch (error) {
    console.log(error);
  }
};

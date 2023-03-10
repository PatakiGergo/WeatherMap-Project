import { create } from "zustand";



const useGeoData = create((set) => ({
  geoData: {
    name: "London",
    lat: 51.5073219,
    lon: -0.1276474,
  },
  fetchGeoData: async (searchterm) => {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchterm}&limit=5&appid=feb00505bb1f18c6a87d08f4d0e94fef
      `
    );
    set({ geoData: await response.json() });
    
  },
}));



export default useGeoData;

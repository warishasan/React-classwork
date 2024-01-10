import { useEffect, useState } from "react";

function App() {
  const API_KEY =
    "https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906";

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);

  // console.log("🚀 ~ App ~ city:", city);

  // simple code
  // useEffect(() => {}, []);
  useEffect(() => {
    const getWeatherData = async () => {
      try {
        if (!city) return;

        const response = await fetch(`${API_KEY}&q=${city}`);
        const data = await response.json(); // Converting response in json

        setWeatherData(data);
        console.log("🚀 ~ file: script.js:29 ~ getWeatherData ~ data:", data);

        // Error handling
        //   agar response ok nhi hy tw
        if (!response.ok) throw Error(data.error.message);
        //
        return data;
      } catch (err) {
        console.log("🚀 ~ getWeatherData ~ err:", err);
      }
    };
    getWeatherData();

    // console.log("This code is running in useEffect");
  }, [city]);
  // function in useEffect runs after the whole component is rendered

  // }, []) with empty dependency array setup function will run 1 time under

  // console.log("This code is running in React component");

  // passing function to useEffect
  // useEffect(getWeatherData, []);

  // console.log("🚀 ~ getWeatherData ~ data:", data);

  useEffect(() => {
    console.log("This code is running in useEffect");

    return () => {
      console.log("Cleanup");
    };
  }, [city]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="city"
        onChange={(e) => setCity(e.target.value)}
      />

      <h1>{city}</h1>

      <h1>Temperate {weatherData?.current?.temp_c}</h1>
    </div>
  );
}

export default App;

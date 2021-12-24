import React, { useState } from "react";
import "./App.css";
import { hotelsData } from "./hoteles";
import Header from "./components/Header/Header";
import Filtros from "./components/Header/Filtros";
import { RunCard } from "./components/DataCard/CardRun";
import { useForm } from "./hook/useForm";

function App() {
  const [isDark, setIsDark] = useState(false);

  const initialState = {
    country: "Todos los paises",
    price: "Cualquier precio",
    size: "Cualquier tamano",
    from: "En cualquier fecha",
  };

  const [inputsValues, changeInputsValues, reset] = useForm({
    from: initialState.from,
    to: "",
    country: initialState.country,
    price: initialState.price,
    size: initialState.size,
  });

  const { from, to, country, price, size } = inputsValues;

  const resetBoton = (e) => {
    e.preventDefault();
    reset();
  };

  let changeState = () => {
    let newList = hotelsData
      .filter((hotel) => {
        if (from !== initialState.from && to !== "") {
          return (
            new Date(hotel.availabilityFrom) >= new Date(from) &&
            new Date(hotel.availabilityTo) <= new Date(to)
          );
        }
        return true;
      })
      .filter((hotel) => {
        if (country !== initialState.country) {
          return hotel.country.toLowerCase() === country.toLowerCase();
        } else {
          return true;
        }
      })
      .filter((hotel) => {
        if (price !== initialState.price) {
          return hotel.price === Number(price);
        } else {
          return true;
        }
      })
      .filter((hotel) => {
        if (size !== initialState.size) {
          if (size === "Small") {
            return hotel.rooms < 10;
          } else if (size === "Medium") {
            return hotel.rooms >= 10 && hotel.rooms < 20;
          } else if (size === "Big") {
            return hotel.rooms >= 20;
          }
        }
        return true;
      });

    return newList;
  };

  const runNewList = changeState();

  const toggleModeDark = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`App ${isDark ? "dark" : ""}`}>
      <Header
        initialState={initialState}
        from={from}
        to={to}
        country={country}
        price={price}
        size={size}
        toggleModeDark={toggleModeDark}
        isDark={isDark}
      />
      <Filtros
        initialState={initialState}
        resetBoton={resetBoton}
        changeInputsValues={changeInputsValues}
        from={from}
        to={to}
        country={country}
        price={price}
        size={size}
      />
      <RunCard runNewList={runNewList} />
    </div>
  );
}

export default App;

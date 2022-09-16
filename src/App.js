import React, { useState } from "react";

import './App.css';
import { ThemeContext, themes } from "./context/ThemeContext";

import NavBarComponent from './components/NavBar/NavBarComponent';
import ScreenWrapper from "./components/Wrappers/ScreenWrapper";
import MainWrapper from "./components/Wrappers/MainWrapper";
import MainScreen from "./screens/MainScreen/MainScreen";
import DetailsScreen from "./screens/DetailsScreen/DetailsScreen";
import { Routes, Route } from "react-router-dom";
import ErrorScreen from "./screens/ErrorScreen/ErrorScreen";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stateData, setStateData] = React.useState(null);
  const [filterItem, setFilterItem] = React.useState(null);
  const [searchItem, setSearchItem] = React.useState('');

  const URL = 'https://restcountries.com/v3.1/all';

  const fetchData = async () => {
    let fetched = await fetch(URL);
    if (fetched && fetched.status === 200) {
      let result = await fetched.json();

      if (result !== undefined && result !== null) {
        let resultWithCountryObjects = result.map(item => {
          return createCoutryObject(item)
        });
        setStateData(resultWithCountryObjects);
      }
    }
  }

  const createCoutryObject = (data) => {
    if (data && data !== undefined && data !== '') {
      let countryObj = {
        name: data.name.common,
        nativeName: data.name.nativeName,
        population: data.population,
        region: data.region,
        subregion: data.subregion,
        capital: data.capital,
        tld: data.tld,
        cca3: data.cca3,
        currencies: data.currencies,
        languages: data.languages,
        borders: data.borders,
        flag: data.flags.png
      }
      return countryObj;
    }
  }

  React.useEffect(() => {
    fetchData();
  }, [])
  return (
    <div style={{ margin: 0, padding: 0 }}>

      <ThemeContext.Consumer>
        {
          ({ toggleTheme }) => (
            <>
              <header>
                <NavBarComponent theme={{ toggleTheme, darkMode, setDarkMode, themes }} />
              </header>

              <main>
                <ScreenWrapper>
                  <MainWrapper>

                    <Routes>

                      <Route exact path='/' index
                        element={
                          <MainScreen
                            darkMode={darkMode}
                            stateData={stateData}
                            filter={{ filterItem, setFilterItem }}
                            search={{ searchItem, setSearchItem }}
                          />
                        }
                      />
                      <Route path='details/:cca3'
                        element={
                          <DetailsScreen
                            stateData={stateData}
                            darkMode={darkMode}
                          />
                        }
                      />
                      <Route path='*'
                        element={<ErrorScreen />} ></Route>

                    </Routes>

                  </MainWrapper>
                </ScreenWrapper>

              </main>

            </>
          )
        }

      </ThemeContext.Consumer>
    </div>
  );
}

export default App;

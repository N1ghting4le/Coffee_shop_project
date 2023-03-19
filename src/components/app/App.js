import './app.css';
import { lazy, Suspense, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppFooter from '../appFooter/AppFooter';
import AppHeader from '../appHeader/AppHeader';

const MainPage = lazy(() => import('../../pages/mainPage/MainPage'));
const CoffeePage = lazy(() => import('../../pages/coffeePage/CoffeePage'));
const ForYourPleasurePage = lazy(() => import('../../pages/forYourPleasurePage/ForYourPleasurePage'));
const SingleItemPage = lazy(() => import('../../pages/singleItemPage/SingleItemPage'));

function App() {
  const [selectedItem, setSelectedItem] = useState({price: 'no info', country: 'no info', img: null});

  const onItemSelected = (item) => {
    setSelectedItem(item);
  }

  return (
    <Router>
      <div className="App">
        <AppHeader/>
        <Suspense>
          <Routes>
            <Route path="/" element={<MainPage onItemSelected={onItemSelected}/>}/>
            <Route path="/our_coffee" element={<CoffeePage onItemSelected={onItemSelected}/>}/>
            <Route path="/for_your_pleasure" element={<ForYourPleasurePage onItemSelected={onItemSelected}/>}/>
            <Route path="/:id" element={<SingleItemPage selectedItem={selectedItem}/>}/>
          </Routes>
        </Suspense>
        <AppFooter/>
      </div>
    </Router>
  );
}

export default App;

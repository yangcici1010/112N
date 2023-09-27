import './App.css';
import menu_data from './data';
import { useState } from 'react';
import Menu_81 from './components/Menu_81';

const App = () => {
  const [menu, setMenu] = useState(menu_data)
  console.log('menu', menu)
  return (
    <section className="menu">
      <div className="title">
        <h2>Yang Pei CIh - 209410181</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <button type="button" className="filter-btn" data-id="all">all</button
        ><button type="button" className="filter-btn" data-id="breakfast">
          breakfast</button
        ><button type="button" className="filter-btn" data-id="lunch">
          lunch</button
        ><button type="button" className="filter-btn" data-id="dessert">
          dessert</button
        ><button type="button" className="filter-btn" data-id="shakes">
          shakes
        </button>
      </div>

      <Menu_81 item={menu} />
    </section>
  );
}

export default App;

import './App.css';
import menu_data from './data';
import { useState } from 'react';
import Menu81 from './components/Menu_81';
import Category81 from './components/Category_81';
const App = () => {
  const [menu, SetMenu] = useState(menu_data);
  console.log('menu', menu);
  return (
    <section className="menu">
      <div className="title">
        <h2>Yang Pei CIh - 209410181</h2>
        <div className="underline"></div>
      </div>

      <Category81 />

      <Menu81 menu={menu} />
    </section>
  );
}

export default App;

import { useState } from 'react';
import Alert_81 from './components/Alert_81';
import List_81 from './components/List_81';

const App_81 = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'plz enter value', 'danger');
    } else {
      showAlert(true, 'value changed', 'success');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName('');
    }
  };
  const removeItem = () => { };
  const clearList = () => {
    showAlert(true, 'empty list', 'danger');
    setList([]);
  };
  return (
    <>
      <section className='section-center'>
        <form className='grocery-from' onSubmit={handleSubmit}>
          {alert.show && <Alert_81 {...alert} removeAlert={showAlert} />}
          <h3>Grocery Bud -- PeiCih Yang</h3>

          <div className='form-control'>
            <input
              type='text'
              className='grocery'
              value={name}
              placeholder='e.g. eggs'
              onChange={(e) => setName(e.target.value)}
            />
            <button type='submit' className='submit-btn'>
              submit
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className='grocery-container'>
            <List_81 items={list} removeItem={removeItem} />
            <button className='clear-btn' onClick={clearList}>
              Clear items
            </button>
          </div>
        )}
      </section>
    </>
  );
};
export default App_81;

import React, { useState, useEffect, useContext } from 'react';
import data from './blogData_81';
import BlogList_81 from './components/BlogList_81';
import Alert_81 from './components/Alert_81';

const BlogContext = React.createContext();

const App_81 = () => {
  const [blogs, setBlogs] = useState(data);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  console.log('blogs', blogs);

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const clearBlogs = () => {
    showAlert(true, 'empty all blogs', 'danger');
    setBlogs([]);
  };

  return (
    <BlogContext.Provider value={{ blogs, alert, showAlert, removeItem, clearBlogs }}>
      <section className='blogs'>
        {alert.show && <Alert_81 {...alert} removeAlert={showAlert} />}
        <div className='section-title'>
          <h2>CSS Grid using breakpoints</h2>
        </div>
        <div className='blogs-center'>
          <BlogList_81 />
        </div>
        <button className='clear-btn' onClick={clearBlogs}>
          clear all blogs
        </button>
      </section>
    </BlogContext.Provider>
  );
};

const useBlogContext = () => {
  return useContext(BlogContext);
}

export { App_81, useBlogContext };

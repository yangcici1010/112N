import React, { useState, useEffect, useContext } from 'react';
import BlogList_81 from './components/BlogList_81';
import Alert_81 from './components/Alert_81';
import { useBlogContext } from './BlogContext_81';

const App_81 = () => {
  const { alert, clearBlogs } = useBlogContext();
  return (
    <section className='blogs'>
      {alert.show && <Alert_81 />}
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

  );
};
export default App_81;

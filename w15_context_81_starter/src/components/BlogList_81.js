import React from 'react';
import Blog_81 from './Blog_81';
import { useBlogContext } from '../App_81';

const BlogList_81 = () => {
  const { blogs } = useBlogContext();
  return (
    <div className='blogs-center'>
      {blogs.map((blog) => {
        const { id, img, title, desc, category } = blog;
        return (
          <Blog_81
            key={id}
            id={id}
            img={img}
            title={title}
            desc={desc}
            category={category}
          />
        );
      })}
    </div>
  );
};

export default BlogList_81;

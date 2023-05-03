import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBlog from './singleBlog/SingleBlog';

const Blog = () => {
    const blogs = useLoaderData()
   
    return (
        <div className=''>
          <h1 className='text-center text-4xl my-52 text-teal-500 font-extrabold'>This is blog section</h1>
          <div className='md:grid grid-cols-2 w-9/12 mx-auto gap-9'>
          {
            blogs.map(blog=><SingleBlog 
            key={blog.id}
            blog={blog}
            ></SingleBlog>)
          }
          </div>

        </div>
    );
};

export default Blog;
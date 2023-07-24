import React from 'react';

import Blog from '../sections/Blog';
import { blogItems } from '../layout/Data';
import { BlogItem } from '../layout/helper';

const BlogPage = () => {

   const blogPageItems = blogItems.map(blogItem => <BlogItem
      key={blogItem.id}
      name={blogItem.name}
      date={blogItem.date}
      comments={blogItem.comments}
      title={blogItem.title}
      imgSrc={blogItem.imgSrc}
   />);

   return (
      <main>
         <Blog blogs={blogPageItems} />
      </main>
   );
};

export default BlogPage;
import React from 'react';
import { blogItems } from '../layout/Data';
import { BlogItem } from '../layout/helper';

const Blog = (props) => {

   const blogItemsList = [...blogItems.slice(0, 3)];

   const blogItemsList2 = blogItemsList.map(blogItem => <BlogItem
      key={blogItem.id}
      name={blogItem.name}
      date={blogItem.date}
      title={blogItem.title}
      imgSrc={blogItem.imgSrc}
      comments={blogItem.comments}
   />);

   return (
      <section id="blog" aria-labelledby="Blog">
         <div className="container">

            <div className="heading text-center">
               <h2>Latest News & <strong>Articles</strong> <br /> from the Blog </h2>
            </div>

            <div className="blog-wrapper">
               {props.blogs ? props.blogs : blogItemsList2}
            </div>
         </div>
      </section>
   );
};

export default Blog;
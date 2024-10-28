import React from 'react';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
export default function BlogPostItemHeader() {
  return (
    <div className="post-header">
      <BlogPostItemHeaderInfo />
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderAuthors />
    </div>
  );
}

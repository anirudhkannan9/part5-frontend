import React from 'react'
const Blog = ({ blog }) => (
  <div>
    <i>{blog.title}</i> {blog.author}
  </div>
)

export default Blog

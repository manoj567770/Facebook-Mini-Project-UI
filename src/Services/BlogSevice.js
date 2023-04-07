const blogs = new Map();

export const setBlog = (id, blog) => {
  blogs.set(id, blog);
};

export const getBlogById = (blogId) => {
  return blogs.get(blogId);
};

export const findBlogBytitle = (blogTitle) => {
  const actualBlogTitle = blogTitle.replace("-", " ");

  return Object.keys(blogs).filter((blog) => {
    return blog.title === actualBlogTitle;
  });
};

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Blog = () => {
  const blogPosts = [
    {
      title: "Lợi ích của việc mua sắm trực tuyến",
      content: "Mua sắm trực tuyến giúp tiết kiệm thời gian và chi phí...",
      author: "Nguyễn Văn A",
      date: "01/10/2023",
      image: "/img/list/blog-list-1.jpg",
    },
    {
      title: "Xu hướng thời trang năm 2023",
      content: "Năm 2023, thời trang sẽ tập trung vào sự bền vững...",
      author: "Trần Thị B",
      date: "02/10/2023",
      image: "/img/list/blog-list-2.jpg",
    },
  ];

  return (
    <div className="container mt-5 content">
      <h1 className="mb-4 text-center">Blog</h1>
      <div className="row">
        {blogPosts.map((post, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {post.author} - {post.date}
                </h6>
                <p className="card-text">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

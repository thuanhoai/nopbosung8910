import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="container mt-5 content">
      <h1 className="mb-4 text-center">Liên hệ với chúng tôi</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h5>Thông tin liên hệ</h5>
          <p>
            <strong>Địa chỉ:</strong> 123 Đường ABC, Quận 1, TP. Hồ Chí Minh
          </p>
          <p>
            <strong>Điện thoại:</strong> (0123) 456-789
          </p>
          <p>
            <strong>Email:</strong> contact@ecommerce.com
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <h5>Gửi tin nhắn cho chúng tôi</h5>
          <form>
            <div className="form-group">
              <label htmlFor="name">Tên của bạn</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Nhập tên của bạn"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Nhập email của bạn"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Tin nhắn</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Nhập tin nhắn của bạn"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Gửi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

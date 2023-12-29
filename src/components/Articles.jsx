import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <div className="articles" id="articles">
        <div className="section-heading">
        <h2 className="main-title">Articles</h2>
        <div className="underline"></div>
        </div>
        <div className="container">
          <div className="box">
            <img src="https://res.cloudinary.com/daesz5k6b/image/upload/v1702468486/ssg9iozbotoya72tdxch.png" alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
            </div>
            <div className="info">
              <Link>Read More</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="https://res.cloudinary.com/daesz5k6b/image/upload/v1702469747/djqoktokvzbzsrhnf6xz.png" alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
            </div>
            <div className="info">
              <Link>Read More</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="https://res.cloudinary.com/daesz5k6b/image/upload/v1702469746/y0g8jhekxztb5asdxtxo.png" alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
            </div>
            <div className="info">
              <Link>Read More</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img src="https://res.cloudinary.com/daesz5k6b/image/upload/v1702469744/btu3fv9lo008eld9cq9x.png" alt="" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
            </div>
            <div className="info">
              <Link >Read More</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;

import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/U-1.jpeg";
import user_2 from "../../assets/U-2.jpeg";
import user_3 from "../../assets/U-3.jpeg";
import user_4 from "../../assets/U-4.jpeg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img className="next-btn" src={next_icon} alt="" onClick={slideForward} />
      <img
        className="back-btn"
        src={back_icon}
        alt=""
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Abhishek Sharma</h3>
                  <span>Delhi</span>
                </div>
              </div>
              <p>
                Choosing to pursue my coaching at Home Tuition was one of the
                best decisions I've ever made. The supporitve community,
                state-of-the-science facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Shreya</h3>
                  <span>Jamshedpur</span>
                </div>
              </div>
              <p>
                The mentors here are exceptional. The personalized attention and
                rigorous practice tests helped me understand my strengths and
                areas for improvement, leading to an outstanding NEET score!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Tanmay Bhatt</h3>
                  <span>Noida</span>
                </div>
              </div>
              <p>
                Thanks to this coaching, I secured a top rank in JEE. The
                comprehensive study material and excellent faculty were key to
                my success. They not only teach well but also inspire and guide
                you every step of the way.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Dipti Pandey</h3>
                  <span>Ranchi</span>
                </div>
              </div>
              <p>
                The teaching methods are innovative and student-friendly. The
                in-depth lectures and focused practice sessions were exactly
                what I needed to excel in NEET. I'm grateful for the incredible
                support from the faculty!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

import React, { Component } from "react";
import "./About.css";
import ThemeContext from "../Context/ThemeContext";

export class About extends Component {
  static contextType = ThemeContext;
  render() {
    const { mode } = this.context;
    return (
      <div className="container my-5 about-page">
        <h1 className={"text-center mb-5 heading-animate" + (mode === "dark" ? " text-light" : " text-dark")}>
          About News Monkey 📰
        </h1>

        {/* About Application */}
        <section className={"about-section fade-in" + (mode === "dark" ? " bg-success text-light" : "  text-dark")}>
          <h3>What is News Monkey?</h3>
          <p>
            <strong>News Monkey</strong> is a news reading application designed
            to keep users informed with the latest and most important headlines
            from around the world.
          </p>

          <p>
            The main objective of News Monkey is to help users stay updated with
            current events without overwhelming them with unnecessary content.
          </p>

          <p>
            Whether you want to quickly glance at top headlines or browse through
            multiple pages of news, News Monkey delivers a smooth and reliable
            reading experience.
          </p>
        </section>

        {/* Services */}
        <section className={"about-section fade-in" + (mode === "dark" ? " bg-success text-light" : "  text-dark")}>
          <h3>Our Services</h3>
          <ul className="service-list">
            <li>📰 Access to top headlines from trusted sources</li>
            <li>📄 Paginated browsing for better readability</li>
            <li>📱 Responsive design for all screen sizes</li>
            <li>🌙 Dark & light viewing modes</li>
            <li>⚡ Fast loading and smooth navigation</li>
          </ul>
        </section>

        {/* Developer Info */}
        <section className={"about-section fade-in" + (mode === "dark" ? " bg-success text-light" : "  text-dark")}>
          <h3>About the Developer</h3>
          <p>
            News Monkey is developed by <strong>Aditya Patel</strong>, a passionate
            learner focused on building clean, user-friendly applications.
          </p>

          <p>
            This project reflects consistency, dedication, and a hands-on
            approach toward building real-world applications with clarity and
            purpose.
          </p>
        </section>

        {/* Contact */}
        <section className={"about-section fade-in" + (mode === "dark" ? " bg-success text-light" : "  text-dark")}>
          <h3>Contact</h3>
          <p>
            If you have any questions, suggestions, or feedback related to
            News Monkey, feel free to connect.
          </p>

          <p>
            📧 Email: <strong>aditya.patel@newsmonkey.com</strong> <br />
            🌐 LinkedIn:{" "}
            <strong>
              <a
                href="https://www.linkedin.com/in/aditya-patel-6ab7002a1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Profile
              </a>
            </strong>
          </p>
        </section>

        {/* Feedback Form */}
        <section className={"about-section fade-in" + (mode === "dark" ? " bg-success text-light" : " text-dark")}>
          <h3>Feedback</h3>
          <p>
            Your feedback helps improve News Monkey. Share your experience or
            suggestions below.
          </p>

          <form className="feedback-form">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Your Email"
            />
            <textarea
              className="form-control mb-3"
              rows="4"
              placeholder="Your Feedback"
            ></textarea>

            <button type="submit" className="btn btn-dark w-100">
              Submit Feedback
            </button>
          </form>
        </section>

        <p className={"text-center mt-5 fw-bold " + (mode === "dark" ? "text-light" : "text-dark")}>
          Thank you for using News Monkey! 🙌
        </p>
      </div>
    );
  }
}

export default About;

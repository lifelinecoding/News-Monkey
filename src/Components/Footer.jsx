import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-light mt-5">
        <div className="container py-4">
          <div className="row">
            {/* App Info */}
            <div className="col-md-6">
              <h5 className="mb-3">📰 News Monkey</h5>
              <p className="mb-1">
                News Monkey is a React-based news application that delivers the
                latest top headlines from around the world in real time.
              </p>
              <small>Built with ❤️ using React.js & Bootstrap</small>
            </div>

            {/* Useful Links */}
            <div className="col-md-3 mt-3 mt-md-0">
              <h6 className="mb-3 fw-bold">Quick Links</h6>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>Top Headlines</li>
                <li>Technology</li>
                <li>Sports</li>
                <li>Business</li>
                <li>Entertainment</li>
                <li>General</li>
                <li>Health</li>
                <li>Science</li>
              </ul>
            </div>

            {/* Credits */}
            <div className="col-md-3 mt-3 mt-md-0">
              <h6 className="mb-3 fw-bold">Credits</h6>
              <p className="mb-1">Powered by NewsAPI.org</p>
              <p className="mb-0">Developed by Aditya Patel</p>
              <p className="mt-3 pointer">Email: aditya.patel@newsmonkey.com</p>
            </div>
          </div>

          <hr className="border-secondary my-3" />

          <div className="text-center">
            <small>
              © {new Date().getFullYear()} News Monkey. All rights reserved.
            </small>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

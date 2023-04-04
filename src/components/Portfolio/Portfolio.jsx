import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/port1.png';
import IMG2 from '../../assets/port2.png';
import IMG3 from '../../assets/port3.png';
import IMG4 from '../../assets/port4.png';
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Don't Think Too Much, TRAVEL2GETHER!</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mysr3809/MERN-PROJECT-TRAVEL2GETHER"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://c40-team-monday.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Jorien's kitchen for delicious recipes</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mysr3809/food-recipe-API"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://mysr3809.github.io/food-recipe-API/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Uber Website Clone</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mysr3809/HYF-Module-HTMLCSSGIT/tree/main/week2/WEBSITE-clone"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://mysr3809.github.io/HYF-Module-HTMLCSSGIT/week2/WEBSITE-clone/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>How Much Do You Know About Space, Let's Check!</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/mysr3809/quizApp"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://mysr3809.github.io/quizApp/index.html"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

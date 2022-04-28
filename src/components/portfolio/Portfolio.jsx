import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
      <section id="portfolio">
        <h5>Things I've been working on...</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt=""/>
            </div>
            <h3>Blast Royale tokens marketplace</h3>
            <div className="portfolio__item-cta">
              <a href="https://blastroyale.com/" className="btn" target="_blank">
                Official website
              </a>
              <a
                  href="https://www.youtube.com/watch?v=yqD7xh-B1UQ&t=263s"
                  className="btn btn-primary"
                  target="_blank"
              >
                Game Video
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG3} alt=""/>
            </div>
            <h3>AREA: Zapier clone</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/EpitechPromo2024/B-YEP-500-BAR-5-1-area-oriol1.farras-figuera" className="btn"
                 target="_blank">
                Github
              </a>
              <a
                  href="https://www.canva.com/design/DAE6bR_JgU4/-jj3wQEzu1eJnQXZSdsuWA/edit?utm_content=DAE6bR_JgU4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                  className="btn btn-primary"
                  target="_blank"
              >
                Keynote
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG2} alt=""/>
            </div>
            <h3>Need4stek: an AI car simulator</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/alexandre10044/need4stek" className="btn" target="_blank">
                Github
              </a>
              <a
                  href="https://www.youtube.com/watch?v=-ixLxKdJvgA"
                  className="btn btn-primary"
                  target="_blank"
              >
                Demo Video
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG4} alt=""/>
            </div>
            <h3>Webfleet API rest</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.webfleet.com/es_es/webfleet/lp/x/webfleet-solutions/?cid=7011O000003JRDH&gclid=CjwKCAjw9qiTBhBbEiwAp-GE0a_gFC-AU5YnXh_0wp7TKl8YUo4o_aGzR5x9V6M85vFPPsu7cqln2BoCfNoQAvD_BwE"
                 className="btn" target="_blank">
                Official website
              </a>
              <a
                  href="https://www.youtube.com/watch?v=FTRKLCcNgqE"
                  className="btn btn-primary"
                  target="_blank"
              >
                Demo Video
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG5} alt=""/>
            </div>
            <h3>Yourcity SL company</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.ccma.cat/324/el-joc-del-monopoly-amb-ciutats-catalanes-una-iniciativa-de-dos-joves-dagramunt/noticia/3127214/"
                 className="btn" target="_blank">
                TV Article
              </a>
              <a
                  href="https://www.diaridegirona.cat/girona/2021/10/20/gironacity-joc-taula-ciutat-girona-58605184.html"
                  className="btn btn-primary"
                  target="_blank"
              >
                Newspaper Article
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG6} alt=""/>
            </div>
            <h3>Web CV/Portfolio</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/oriolfar/portforiol_website" className="btn" target="_blank">
                Github
              </a>
              <a
                  href="http://localhost:3000/"
                  className="btn btn-primary"
                  target="_blank"
              >
                Demo Link
              </a>
            </div>
          </article>
        </div>
      </section>
  );
};

export default Portfolio;

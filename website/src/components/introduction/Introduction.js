import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Code Quality - CQ</h1>
      <p>
        Building, Designing and Exploring Technology.
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Learn more
            </a>
          </Scroll>
        </li>
        <li>
          <a href="https://code-quality-metrics.github.io/docs-and-blog/" target="_blank" className="button">
            Access our content
          </a>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;

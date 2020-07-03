import React from 'react';
import Scroll from '../common/Scroll';

const Blog = () => (
  <section id="blog" className="wrapper style4 fade-up">
    <div className="inner">
      <p>
        Visit our <b>blog</b> and <b>docs</b> for insights on Node, Docker, React and much more
      </p>
      <ul className="actions">
        <li>
          <a href="https://code-quality-metrics.github.io/docs-and-blog/blog" className="button">
            Go to the blog ➡
          </a>
        </li>
        <li>
          <a href="https://code-quality-metrics.github.io/docs-and-blog/docs/node/intro" className="button">
            Go to the docs ➡
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Blog;

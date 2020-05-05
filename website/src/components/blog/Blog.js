import React from 'react';
import Scroll from '../common/Scroll';

const Blog = () => (
  <section id="blog" className="wrapper style4 fade-up">
    <div className="inner">
      <p>
        Visit our <b>blog</b> for insides on Node and React
      </p>
      <Scroll type="id" element="one">
        <a href="https://code-quality-metrics.github.io/docs/blog" className="button">
          Go to the blog ➡
        </a>
      </Scroll>
    </div>
  </section>
);

export default Blog;

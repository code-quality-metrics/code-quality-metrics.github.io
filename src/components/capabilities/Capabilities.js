import React from 'react';
import Scroll from '../common/Scroll';

import CapabilityList from './CapabilityList';

const Capabilities = () => (
  <section id="two" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>What we do</h2>
      <p>
        We provide consulting and development services. Codebase refactoring,
        quality reviews, development... let us know how we can help. We are
        working on support documentation and useful blog articles based on our
        knowledge and expertise.
      </p>
      <div className="features">
        <CapabilityList />
      </div>
      <ul className="actions">
        <li>
          <Scroll type="id" element="three">
            <a href="#three" className="button">
              Contact us
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>
);

export default Capabilities;

import React from 'react';
import Scroll from '../common/Scroll';

import CapabilityList from './CapabilityList';

const Capabilities = () =>
  <section id="two" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>What we do</h2>
      <p>
        Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
        turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
        lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
        imperdiet est velit quis lorem.
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

export default Capabilities;

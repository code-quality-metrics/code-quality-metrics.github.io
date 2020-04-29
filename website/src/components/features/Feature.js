import React from 'react';

const Feature = ({ href, image, heading, description, to }) => (
  <section>
    <a
      href={href}
      className="image"
      alt="image"
      style={{ margin: '0 auto', padding: '80px 32px 0' }}
    >
      <img
        src={image}
        alt=""
        data-position="center center"
        style={{ margin: '0 auto', width: '200px', borderRadius: '50%' }}
      />
    </a>
    <div className="content">
      <div className="inner">
        <h2>{heading}</h2>
        <p>{description}</p>
        {to && (
          <ul className="actions">
            {to.map(to => (
              <li>
                <a className="button" href={to.href} target="_blank">
                  {to.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </section>
);

export default Feature;

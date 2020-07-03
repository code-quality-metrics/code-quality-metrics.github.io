import React from 'react';

import rubenPic from '../../images/ruben.jpeg';
import davidPic from '../../images/david.png';
// import pic3 from '../../images/pic03.jpg';
import jennyPic from '../../images/jenny.jpeg';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      href: '/#',
      image: rubenPic,
      heading: 'Rubén Alcázar',
      description: 'Cloud Architect - Full Stack Developer',
      
      to: [
        {
          href: 'https://github.com/psypersky',
          label: 'GitHub',
        },
        {
          href: 'https://www.linkedin.com/in/psypersky/',
          label: 'LinkedIn',
        },
      ],
    },
    {
      href: '/#',
      image: davidPic,
      heading: 'David Ortiz',
      description: 'Full Stack Developer - Scrum Master',
      to: [
        {
          href: 'https://github.com/DavidOVM',
          label: 'GitHub',
        },
        {
          href: 'https://www.linkedin.com/in/d-ortiz-vallejuelo/',
          label: 'LinkedIn',
        },
      ],
    },
    {
      href: '/#',
      image: jennyPic,
      heading: 'Jennifer Azaña',
      description: 'Full Stack / Mobile - Scrum Master',
      to: [
        {
          href: 'https://github.com/JenniferAz',
          label: 'GitHub',
        },
        {
          href: 'https://www.linkedin.com/in/jennifer-azana-perez/',
          label: 'LinkedIn',
        },
      ],
    },
  ];
  // const other = {
  //   href: '/#',
  //   image: pic3,
  //   heading: 'Other colaborators',
  //   description:
  //     'We work with more engineers to cover specific necessities. We are also open to new partnerships if you want to collaborate with us.',
  // };
  // FEATURES.push(david, ruben, jenny);
  // FEATURES.sort(() => .5 - Math.random());
  // FEATURES.push(other);

  const [features] = React.useState(FEATURES);

  return (
    <section id="one" className="wrapper style2 spotlights">
      {features.map(feature => (
        <Feature key={feature.heading} {...feature} />
      ))}
    </section>
  );
};

export default Features;

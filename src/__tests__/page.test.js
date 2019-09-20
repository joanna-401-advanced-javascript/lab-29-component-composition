import React from 'react';
// import renderer from 'react-test-renderer';
import Page from '../components/Page/page';
import Header from '../components/Header/Header.jsx';
import Deck from '../components/Deck/Deck.jsx';
import Card from '../components/Card/Card.jsx';

describe('<Page />', () => {
  it('is rendered at application start', () => {
    const app = shallow(<Page />);
    expect(app.find('.deck').exists()).toBe(false);
  });
});

describe('<Header />', () => {
  it('is rendered at application start', () => {
    const app = shallow(<Header />);
    expect(app.find('ul').exists()).toBe(true);
  });
});

describe('<Deck />', () => {
  it('is rendered at application start', () => {
    const deck = { title: 'test title', records: [{ title: '1' }] };
    const app = shallow(<Deck deck={deck} />);
    expect(app.find('.deck').exists()).toBe(true);
  });
});

describe('<Card />', () => {
  it('is rendered at application start', () => {
    const card = {
      title: '1',
      copy: '1',
      media: { alt: '1', title: '1', href: '1' },
      links: [
        { type: '1', title: '1', href: '1' },
        { type: '2', title: '2', href: '2' },
      ],
    };
    const app = shallow(<Card card={card}/>);
    expect(app.find('.links').exists()).toBe(true);
  });
});

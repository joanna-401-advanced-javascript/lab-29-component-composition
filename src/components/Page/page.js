import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.jsx';
import Deck from '../Deck/Deck.jsx';

const Page = (props) => {
  const content = props.content || [];

  return (
    <>
      <Header/>
      {content.map((deck, i) => (
        <Deck deck={deck} key={i}/>
      ))}
    </>
  );
};

Page.propTypes = { content: PropTypes.array };
export default Page;

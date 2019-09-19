import React from 'react';
import Header from '../Header/Header';
import Deck from '../Deck/Deck';

const Page = (props) => {
  const content = props.content || [];

  return (
    <>
      <Header/>
      {content.map((deck) => (
        <Deck deck={deck} />
      ))}
    </>
  );
};

export default Page;

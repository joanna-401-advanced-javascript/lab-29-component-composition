import React from 'react';
import Card from '../Card/Card.jsx';
import { If } from '../if/index';

export default props => {
  return (
    <>
      <section className="deck">
        <If condition={props.deck.title}>
          <header><h2>{props.deck.title}</h2></header>
        </If>

        <If condition={props.deck.records}>
          {props.deck.records.map( (card, i) =>
            <Card card={card} key={i}/>
          )}
        </If>
      </section>
    </>
  )
}

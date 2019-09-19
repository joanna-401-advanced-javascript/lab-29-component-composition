import React from 'react';
import { If } from '../if/index';

export default props => {
  return(
    <>
      <div className="card">
        <header><h3>{props.card.title}</h3></header>
        <div className="content">{props.card.copy}</div>

        <figure>
          <img src={props.card.media.href} alt={props.card.media.alt} />
          <figcaption>{props.card.media.title}</figcaption>
        </figure>

        <If condition={props.card.links}>
          <nav className="links">
            <ul>
              {props.card.links.map( (link,i) => (
                <li key={i}><a className={link.type} href={link.href} title={link.title}>{link.title}</a></li>
              ))}
            </ul>
          </nav>
        </If>
      </div>
    </>
  )
}
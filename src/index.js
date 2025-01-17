// inside src/index.js

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';


import {
    DeckList,
    SearchBar,
    SearchResults
  } from './components';

  import {
    fetchCards,
  } from './api';

  import './index.css';

// a component is a javascript function that returns JSX (html in javascript)
// good practice to keep component name starting with Uppercase 
// never directly update your state or it will break your rreact app
const App = () => {
    const [results, setResults] = useState([]);
    const [deck, setDeck] = useState([]);
  
    const addCardToDeck = ({ id, name }) => {
        const nextDeck = [...deck]; // make a duplicate first
        const index = nextDeck.findIndex(card => card.id === id);
      
        // index will be -1 if it is not found
        if (index > -1) {
          nextDeck[index].count += 1;
        } else {
          nextDeck.push({
            id,
            name,
            count: 1
          });
        }
      
        setDeck(nextDeck);
      }
  
      const removeCardFromDeck = ({ id }) => {
        const nextDeck = [...deck];
        const index = nextDeck.findIndex(card => card.id === id);
      
        if (index === -1) {
          // don't do anything if we're trying to remove a card not in the deck
          return;
        }
      
        if (nextDeck[index].count === 1) {
          // remove the card altogether
          nextDeck.splice(index, 1);
        } else {
          // decrement the count
          nextDeck[index].count -= 1;
        }
      
        setDeck(nextDeck);
      }
  
    return (
      <div id="app">
        <SearchBar setResults={ setResults } />
        <SearchResults 
          results={ results }
          addCardToDeck={ addCardToDeck }
          removeCardFromDeck={ removeCardFromDeck } />
        <DeckList deck={ deck }
         addCardToDeck={ addCardToDeck }
         removeCardFromDeck={ removeCardFromDeck } />
      </div>
    );
  }
  

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


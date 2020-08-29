

// const SearchResults = ({ results }) => {
//     console.log("rendering SearchResults")
//     console.log("Current array of results", results)
//   return (
// <div id="results">
//   <h3>Here's what we found ({results.length}):  </h3>
//   <div className="CardList">
//   {
//       results.map((cardObj, index)=> {
//           return < Card key={index} {...cardObj} />
//       })
//   }
//   </div>
//       </div>
//   );
// }

// export default SearchResults;
// inside src/components/SearchResults.js

import React from 'react';

import Card from './Card';
import './SearchResults.css';

const SearchResults = ({ 
  results,
  addCardToDeck,
  removeCardFromDeck
}) => {
  return (
    <div id="results">
      <h3>Here's what we found ({ results.length } results):</h3>
      <div className="CardList">
        {
          results.map(result => (
            <Card 
              key={ result.id } 
              addCardToDeck={ addCardToDeck }
              removeCardFromDeck={ removeCardFromDeck }
              {...result} />
          ))
        }
      </div>
    </div>
  );
}

export default SearchResults;


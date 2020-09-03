import React from "react";
import Card from './Card';
import { useFetch } from '../service/StudentService';

function CardLayout(props) {
  const { loading, data } = useFetch('getAll', null);
  // var decks = [];

  // const CardDeck = (props) => {
  //   console.log(props.students[0]);
  //   return (<>
  //     <div className='card-deck'>
  //       {props && Array.isArray(props) && props.students.map((student, cardCount) => <Card key={student.id} info={student} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} />)}
  //     </div>
  //   </>);
  // }

  // const DeckFormatter = () => {
  //   let subDecks = [];
  //   let cardCount = 1;
  //   let deckMax = 4;
  //   let maxSet = false;
  //   console.log(data);
    
  //   data.map((student) => {
  //     maxSet = (cardCount % deckMax === 0) ? maxSet = true : maxSet = false;
  //     if (!maxSet && cardCount !== data.length-1) {
  //       console.log(student);
  //       subDecks.push(student)
  //       cardCount++;
  //     }
  //     else {
  //       console.log('else');
  //       decks.push(subDecks);
  //       subDecks = [];
  //     }
  //   });

  //   console.log(cardCount);
  //   console.log(data.length)
  //   console.log(subDecks);
  //   console.log(decks);
  //   return (
  //     <>
  //       {decks.map(students => <CardDeck students={students} />)}
  //     </>
  //   );

  // }

  return (
    <div>
      {loading && <p>loading...</p>}
      {data &&
        data.length > 1 && data.map((student) => <Card key={student.id} info={student} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} />)
      }
      
      {/* {data && data.length > 0 && <Card info = {data.id} /> } */}
    </div>
  );
}

export default CardLayout;
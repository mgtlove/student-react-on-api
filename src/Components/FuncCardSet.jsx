import React from 'react';
import Card from './Card';
import {useFetch, deleteStudent} from '../Service/StudentService';
import {useState, useEffect} from 'react';

function FuncCardSet(props) {
    const {loading, data} = useFetch('getAll', null);

    console.log(data);

    const handleDelete = (id) => {
        let ok = window.confirm('Are you sure you wish to delete this student?\nPress "OK" to confirm');
        if(ok===true){
            // Just visually removing
            var removeCard = document.getElementById('card' + id);
            removeCard.parentNode.removeChild(removeCard);
            // This is the actual Axios for our API call
            deleteStudent(id);
            window.alert('Student has been deleted');
        }
    }

    return(
        <div>
            {loading && <p>loading...</p>}
            
            {data && data.length > 0 && data.map(student => <Card key={student.id} info={student} handleDelete={handleDelete}/>)}
        </div>
    )
}

export default FuncCardSet;
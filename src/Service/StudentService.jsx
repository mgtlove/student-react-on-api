import React, {useState, useEffect} from 'react';
import axios from 'axios';

// custom hook for performing get requests
export const useFetch = (searchMethod, searchValue) =>{

    const getAll = 'http://studentrestapi-env.eba-upgrfp5s.us-east-2.elasticbeanstalk.com/api/students';
    const getById = 'http://studentrestapi-env.eba-upgrfp5s.us-east-2.elasticbeanstalk.com/api/students/' + searchValue;
    let url = null;

    // allows us to use same hook for different get requests and parameters
    switch (searchMethod) {
        case 'getById': url = getById;
        break;
        case 'getAll': url = getAll;
        break;
        default: url = null;
    }
    // set our states for inital empty data arry of students, and loading boolean
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect contains our Axios API call, with error handling and finally block
    useEffect(()=> {
        const fetchData = async function () {
            try {
                setLoading(true);
                const response = await axios.get(url);
                if(response.status === 200){
                    setData(response.data);
                }
            } catch (error) {
                throw error;
            } finally{
                setLoading(false);
            }
        };
        fetchData();
        // the [] contains states that we check for change, if one state in the [] changes the effect executes
    }, [url]);
    return{loading, data};
};

export function deleteStudent(studentId) {
    return axios.delete('http://studentrestapi-env.eba-upgrfp5s.us-east-2.elasticbeanstalk.com/' + studentId);
}

export function createStudent(student) {
    return axios.post('http://studentrestapi-env.eba-upgrfp5s.us-east-2.elasticbeanstalk.com', student);
}

export function updateStudent(student) {
    return axios.put('http://studentrestapi-env.eba-upgrfp5s.us-east-2.elasticbeanstalk.com', student);
}
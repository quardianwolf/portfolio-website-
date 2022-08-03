import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Image from 'next/image'

function ABC() {

  const [omer, setOmer] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(){
      setLoading(true);
      try {
        const result = await axios.get('http://localhost:1337/api/omers');
        console.log(result);
        setOmer(result.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData()
  }, [])


  return (
    <div>
      {loading && <p>is loading...</p>}
      {omer&& omer.length > 0 && omer.map((omer)=> {
        return(
          <div KEY={omer.id}>
            {omer.title}
          </div>
        )
      })}
    </div>
  )
}

export default ABC

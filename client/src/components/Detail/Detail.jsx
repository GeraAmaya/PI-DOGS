import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const {id} = useParams()
    const [dataDogs, setDataDogs] = useState([])

    useEffect(() => {
        axios(`https://api.thedogapi.com/v1/breeds/${id}`).then(({ data }) => {
           if (data.name) {
              setDataDogs(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setDataDogs({});
     }, [id]);

  return (
    <div>
        
        <img src={dataDogs?.img} alt="" /> 
        <h2>NAME | {dataDogs?.name} </h2>
        <h4>ID | {dataDogs?.id}</h4>
        <h4>HEIGHT | {dataDogs.height?.imperial}  </h4> 
        <h4>WEIGHT | {dataDogs.weight?.imperial}</h4>
        <h4>TEMPERAMENTS | {dataDogs.temperament} </h4>
      <h4>LIFE SPAN | {dataDogs.life_span} </h4> 
    
      </div>
    );
  
  
}

export default Detail
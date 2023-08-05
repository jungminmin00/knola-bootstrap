import { useState } from 'react';
import data from '../api/products.json';
import { Link } from 'react-router-dom';

export default function NewProductList(){
    // const [newSort, setNewSort] = useState('birth');

    const newData = data.sort(
        (a, b) => {
          return (a['birth'] > b['birth'] ? -1 : 1);
        }
      );  
    
    return(
        <div className='show'>
            
        <ul>
            {
                newData.map((item) => ( 
                        <li
                            key={item.birth}
                        >
                        <Link to={`/list/${item.slug}`}>
                            <figure>
                                <img src={item.pic} alt={item.name}/>
                                <figcaption>
                                    <dl>
                                        <dt>{item.name}</dt>
                                        <dd>{item.price}원</dd>
                                    </dl>
                                </figcaption>
                            </figure>
                    </Link> 
                        </li>   
                     
                ))
                
            }
            
        </ul>
        </div>
    );
}
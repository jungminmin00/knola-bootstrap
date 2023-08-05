import { useState } from 'react';
import reviews from '../api/reviews.json';
import '../scss/review.scss';
import { Link } from 'react-router-dom';

export default function(){
    const [review, setreview] = useState(reviews);
    return(
        <div id="reviews">
            <div>
                <h3>REVIEW</h3>
                <p>상품 사용후기입니다.</p>
                <ul>
                    
                    {
                        review.map((item) =>(
                            
                                <li key={item.reId}>
                                    <Link to={`/review/${item.slug}`}                                    >
                                        <figure>
                                            <div>
                                                <img src={`.${item.photo}`} alt="photo"/>
                                            </div>
                                            <figcaption>
                                                <p>{item.title}</p>
                                            </figcaption>
                                        </figure>
                                    </Link>  
                                </li>    
                              
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
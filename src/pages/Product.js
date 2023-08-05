import '../scss/product.scss';
import { getCourseBySlug, addWishList } from '../api/api';
import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';

export default function Product(){
    const {couseSlug} = useParams();
    const course = getCourseBySlug(couseSlug);
    const [reviewData, setReviewData] = useState(course.topic);

    const navigate = useNavigate();
    const goWishList = () =>{
        addWishList(course?.slug);
        navigate('/wishlist');
    }
    return(
        <div id='product'>
            <div>
                <figure>
                    <div>
                        <img src={`.${course.pic}`} alt={course.name} />
                    </div>
                    <figcaption>
                        <dl>
                            <dt>{course.name}</dt>
                            <dd>{course.price} 원</dd>
                        </dl>
                        <p>
                            <button 
                                type='button'
                                onClick={goWishList}
                            >장바구니 추가</button></p>
                    </figcaption>
                </figure>
                <div id='review'>
                    <ul>
                        {reviewData.map(
                            ({review}) => ( /* key값 에러 :  중괄호 넣어 해결! */
                                <li key={review.reId}>
                                    <figure>
                                        <div>
                                            <img src={`.${review.photo}`} alt={review.title} />
                                        </div>
                                        <figcaption>
                                            <dl>
                                                <dt>{review.title}</dt>
                                                <dd>{review.detail}</dd>
                                                <dd>{review.date}</dd>
                                            </dl>
                                        </figcaption>
                                    </figure>
                                    
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
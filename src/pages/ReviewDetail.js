import { useParams } from "react-router";
import reviewData from '../api/reviews.json';
import { Link } from "react-router-dom";

export default function ReviewDetail(){
    const {slug} = useParams();

    return(
        <div id='ReviewDetail'>
            <div>
                <figure>
                    <div>
                        <img src={`.${reviewData[slug].photo}`} alt="photo" />
                    </div>
                    <figcaption>
                        <dl>
                            <dt>{reviewData[slug].title}</dt>
                            <dd>{reviewData[slug].detail}</dd>
                        </dl>
                        <p><button type="button"><Link to="/review">리뷰 목록</Link></button></p>   {/* 그냥 review만쓰면 현재 주소에서 review를 추가하게됨 => review앞에 /붙이기 */}
                    </figcaption>
                </figure>
            </div>
        </div>
    );

}
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import BestProductList from '../components/BestProductList';
import NewProductList from '../components/NewProductList';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Content(){
    // const [sort, setSort] = useState('')

    return(
        /* content */
        <div id="content">
            <div className='bg'></div>
            {/* gallery */}
            <div className="gallery">
                <div className="show">
                    <Swiper 
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src="./images/gallery01.jpg" alt="슬라이드01" /></SwiperSlide>
                        <SwiperSlide><img src="./images/gallery02.jpg" alt="슬라이드02" /></SwiperSlide>
                        <SwiperSlide><img src="./images/gallery03.jpg" alt="슬라이드03" /></SwiperSlide>
                    </Swiper>
                </div>
                <div className='galleryBtn'>
                    <p className="prev"><button type="button"><AiOutlineLeft /></button></p>
                    <p className="next"><button type="button"><AiOutlineRight /></button></p>
                </div>
            </div>
            {/* mgallery */}
            <div className="mGallery">
                <div className="show">
                    <Swiper 
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src="./images/mGallery01.jpg" alt="슬라이드01" /></SwiperSlide>
                        <SwiperSlide><img src="./images/mGallery02.jpg" alt="슬라이드02" /></SwiperSlide>
                        <SwiperSlide><img src="./images/mGallery03.jpg" alt="슬라이드03" /></SwiperSlide>
                    </Swiper>
                </div>
                <div className='galleryBtn'>
                    <p className="prev"><button type="button"><AiOutlineLeft /></button></p>
                    <p className="next"><button type="button"><AiOutlineRight /></button></p>
                </div>
            </div>
            {/* ment */}
            <div className='ment'>
                <div>
                    <dl>
                        <dt>Knola Philosophy</dt>
                        <dd>
                            <ul>
                                <li>'When you eat better, you feel better'</li>
                                <li>모토로 프리미엄 간식의</li>
                                <li>즐거운 미식 경험을 제안합니다</li>
                            </ul>
                        </dd>
                        <dd>
                            모든 과정은 수제로 만들어지며, 대량 생산 공장에서 구현할 수 없는 퀄리티를 구현하고자 합니다.<br/>
                            크놀라가 추구하는 방향에 기꺼이 함께 하실 수 있는 브랜드가 될 수 있도록 꾸준히 성장하는 모습 보여드리겠습니다
                        </dd>
                    </dl>
                </div>
            </div>
            {/* section */}
            <div className='section'>
                <div>
                    {/* 1 */}
                    <section>
                        <figure>
                            <img src='./images/section01.jpg' alt='section01'/>
                            <figcaption>
                                <dl>
                                    <dt>신규 회원가입</dt>
                                    <dd>회원 가입하시면 최대 10.000원 쿠폰 증정</dd>
                                </dl>
                            </figcaption>
                        </figure>
                    </section>
                    {/* 2 */}
                    <section>
                        <figure>
                            <img src='./images/section02.jpg' alt='section02'/>
                            <figcaption>
                                <dl>
                                    <dt>월간 그래놀라 정기구독</dt>
                                    <dd>매주 만나는 신선한 그래놀라, 할인 혜택까지 받으세요</dd>
                                </dl>
                            </figcaption>
                        </figure>
                    </section>
                    {/* 3 */}
                    <section>
                        <figure>
                            <img src='./images/section03.jpg' alt='section03'/>
                            <figcaption>
                                <dl>
                                    <dt>이달의 크놀라 PICK!</dt>
                                    <dd>매달 진행되는 할인 이벤트</dd>
                                </dl>
                            </figcaption>
                        </figure>
                    </section>
                </div>
            </div>
            {/* bestProducts */}
            <div className='bestProducts'>
                <div>
                    <h3>best Products</h3>
                    <div className='hn'></div>
                    <p>크놀라의 인기상품입니다</p>
                    <BestProductList />
                </div>
            </div>
            <div className='banner'>
                <h3>brand</h3>
                <div className='hn'></div>
                <div className='bannerMain'>
                    <figure>
                        <img src='./images/banner.jpg' alt=''/>
                        <figcaption>
                            <h4>About Knola</h4>
                            <p> 
                                맛있는 프리미엄 그래놀라 브랜드<br/>
                                Knola(크놀라)의 그래놀라는 100% 수제 그래놀라입니다.<br/>
                                뉴욕에서 시작된 크놀라의 특별한 100% 핸드메이드 방식, 철저한 공정을 통해<br/>
                                항상 신선하고 건강한 그래놀라를 만들고 있습니다.
                            </p>
                            <p>
                                <button type='button'>
                                    <Link to="brand">Knola Story</Link>
                                </button>
                            </p>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div className='bestProducts'>
                <div>
                    <h3>new Products</h3>
                    <div className='hn'></div>
                    <p>크놀라의 새로운 상품을 만나보세요</p>
                    <NewProductList />
                </div>
            </div>
        </div>
    );
}
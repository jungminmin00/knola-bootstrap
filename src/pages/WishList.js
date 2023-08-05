import { useEffect, useState } from 'react';
import '../scss/wishList.scss';
import {getWishList, deleteWishList} from '../api/api';
import {BsFillTrashFill} from 'react-icons/bs';
// import Count from '../components/Count';



function Count({course}){
  const [num, setNum] = useState(1);
  const realPrice = course.price;
  
  const btn = document.getElementsByClassName('btnM');
  const numBtn = btn.length;
  console.log(numBtn)

  function count(){
    if(num<2){
      console.log('작다');
      btn.disabled = true;
    }else if(num >= 2){
      console.log('크다');
      btn.disabled = false;
    }
  }
  for(let i = 0; i < numBtn; i++){
    btn[i].addEventListener('click', count, false);
  }
  
  
  return(
    <>
      <dl>
          <dt>{course.name}</dt>
          <dd>{realPrice * num}원</dd>
      </dl>
      {/* 갯수 버튼 */}
      <div>
        <button
          className='btnM'
          // disabled = {true}
          onClick={() => {
            if(num <= 1){
              console.log('1')
            }else{
            setNum(num - 1)
            }
          }}
        >-</button>
        <p className='countNum'>{num}</p>
        <button
          className='btnP'
          onClick={() => {
            setNum(num+1)
          }}
        >+</button>
      </div>

    </>
  );
}

export default function WishList(){
    const [courses, setCourses] = useState([]); // 계속 추가되고 없어지기 때문에 필요 - 빈 배열로 시작
  useEffect(() => {
    const NestCourses = getWishList();
    setCourses(NestCourses)
  }, []) /* 있는것들을 변경해야하기 때문 / 결과값을 가져온다. */

  const handleDelete = (courseSlug) =>{
    deleteWishList(courseSlug)  /* 내가 클릭하면 course.slug를 가져온다*/
    const nextCourse = getWishList();
    setCourses(nextCourse);
  }
  return(
    <div id="wishlist">
      <h3>장바구니 목록
      </h3>
      <div></div>
      
      <ul>
        {courses.map((course) => (
          <li key={course.slug}>
            <div><img src={course.pic} alt={course.name} /></div>
            <figure>
                
                <Count 
                  course = {course}
                />
                <p>
                    <button 
                        type="button"
                        onClick={() => handleDelete(course.slug)}              
                    ><span>버리기</span><span className='trashIcon'><BsFillTrashFill/></span></button>
                </p>
            </figure>
            
          </li>
        ))}
      </ul>
    </div>
    );
}
import { useContext, useEffect } from 'react';
import './Home.css';
import { GlobalContext } from '../../context/GlobalContext';
import Detailitem from '../../components/detail-item/Detailitem';


export default function Home(){
  // useContext를 사용해서 context의 변수와 함수를 이용
  const {hSearchFoodTest,foodList} = useContext(GlobalContext);

  // useEffect 로 컴포넌트가 실행될 때 함수 사용
  useEffect(()=>{
    //hSearchFoodTest();
  }, [])
  
  return (
    <div className='Home_container'>
      {
        foodList?.length > 0 ? (
          // foodList를 map으로 반복문 수행해서
          // DetailItem 컴포넌트가 반복문으로 생성되게
          // DetailItem 컴포넌트는 이미지, 제목, description
          foodList.map((item,index)=>{
            return(
              <Detailitem item={item} key={item.id}/>
            )
          })
        ) : (
          <div className="Home_no_search">
            <h3>검색을 해주세요</h3>
            <p>banana, apple, mango...</p>
            {/* 새 창을 띄우기 위해서 a 태그를 사용 */}
            <a href='https://forkify-api.herokuapp.com/phrases.html' target='_blank'>
            <button>검색 항목 안내</button>
            </a>
          </div>
          

        )
        
      }
    </div>
  )
}
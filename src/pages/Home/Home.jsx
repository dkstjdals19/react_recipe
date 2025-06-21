import { useContext, useEffect } from 'react';
import './Home.css';
import { GlobalContext } from '../../context/GlobalContext';
import Detailitem from '../../components/detail-item/Detailitem';


export default function Home(){
  // useContext를 사용해서 context의 변수와 함수를 이용
  const {hSearchFoodTest,foodList} = useContext(GlobalContext);

  // useEffect 로 컴포넌트가 실행될 때 함수 사용
  useEffect(()=>{
    // hSearchFoodTest();
  }, [])
  
  return (
    <div className='Home_container'>
      {
        foodList?.length > 0 &&(
          // foodList를 map으로 반복문 수행해서
          // DetailItem 컴포넌트가 반복문으로 생성되게
          // DetailItem 컴포넌트는 이미지, 제목, description
          foodList.map((item,index)=>{
            return(
              <Detailitem item={item} key={item.id}/>
            )
          })
        )
      }
    </div>
  )
}
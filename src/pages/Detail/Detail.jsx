import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import "./Detail.css";

export default function Detail() {
  const { id } = useParams();
  const [foodDetailData, setFoodDetailData] = useState(null);
  const { favoritesList, hUpdateFavoritesList } = useContext(GlobalContext);

  useEffect(() => {
    async function getFoodDetail() {
      try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        if (!res.ok) throw new Error("데이터를 가져오는 데 실패했습니다.");
        const data = await res.json();
        setFoodDetailData(data?.data);
      } catch (error) {
        console.error(error);
      }
    }
    getFoodDetail();
  }, [id]);

  if (!foodDetailData || !foodDetailData.recipe) {
    return <div className="Detail_container">로딩 중...</div>;
  }

  const { recipe } = foodDetailData;

  // 즐겨찾기 목록에 현재 아이템이 있는지 확인
  const isFavorite = favoritesList.some(item => item.id === recipe.id);

  return (
    <div className="Detail_container">
      <header>
        <div>
          <img src={recipe.image_url} alt={recipe.title} width="500" height="500" />
        </div>
      </header>
      <section>
        <span>{recipe.publisher}</span>
        <h3>{recipe.title}</h3>
        {/* isFavorite이 true면 '즐겨찾기 제거', 아니면 '즐겨찾기 추가' */}
        <button onClick={() => hUpdateFavoritesList(recipe)}>
          {isFavorite ? "즐겨찾기 제거" : "즐겨찾기 추가"}
        </button>
        <div>
          <span>재료 : </span>
          <ul>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>
                <span>{item.quantity} {item.unit} {item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
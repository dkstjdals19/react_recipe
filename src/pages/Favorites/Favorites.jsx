import "./Favorites.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Detailitem from "../../components/detail-item/Detailitem";

export default function Favorites () {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="Favorites_container">
      {favoritesList.length > 0 ? (
        favoritesList.map((item) => (
          <Detailitem key={item.id} item={item} />
        ))
      ) : (
        <div className="Favorites_no_item">
          <h3>즐겨찾기한 음식이 없어요</h3>
          <p>상세페이지에서 즐겨찾기 버튼을 눌러보세요</p>
          <a href="/">
            <button>홈으로 가기</button>
          </a>
        </div>
      )}
    </div>
  );
}

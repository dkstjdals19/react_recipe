import { Link } from "react-router-dom";
import "./Detailitem.css";

export default function Detailitem (props){

  return (
     <div className="DetailItem_container">
      <header>
        <img src={props?.item?.image_url}/>
      </header>
      <div>
        <span>{props?.item?.publisher}</span>
        <h3>{props?.item?.title}</h3>
        <Link to={`/detail/${props?.item?.id}`}>
          <button>상세보기</button>
        </Link>
      </div>

    </div>
  )
}
import { useParams } from "react-router-dom";
import "./Detail.css";

export default function Detail (){


  // id로 구분된 페이지
  const {id} = useParams();
  return (
    <div className="Detail_container">
      <h3>{id}</h3>
    </div>
  )
}
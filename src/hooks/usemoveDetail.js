import { useNavigate } from "react-router-dom"

const useMoveDetail = (id) => {
  const navigate = useNavigate();

  const MoveDetail = (id) => {
    navigate(`/product/${id}`)
    
  }

  return MoveDetail;
}

export default useMoveDetail;
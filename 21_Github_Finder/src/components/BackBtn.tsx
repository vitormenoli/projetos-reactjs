import { useNavigate } from "react-router-dom"
import classes from "./BackBtn.module.css"

function BackBtn() {

  const navigate = useNavigate()  

  return (
    <>
        <button
            onClick={() => navigate(-1)}
            className={classes.back_btn}
        >Voltar</button>
    </>
  )
}

export default BackBtn
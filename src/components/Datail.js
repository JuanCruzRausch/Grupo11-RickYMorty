import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getAllCharacters } from "../redux/actions"

function Detail(){
    const params = useParams()

    const dispatch = useDispatch()

    const apiInfo = useSelector(state => state.characters)

    useEffect(() => {
        dispatch(getAllCharacters())
    },[dispatch])

    const res = apiInfo?.filter(char => char.id === Number(params.id))
    
    return(
        <div>
            <img src={res[0]?.image} alt={res[0]?.name} />
            <h2>{res[0]?.name} the {res[0]?.species}</h2>
            <p>{res[0]?.status}</p>
            <p>{res[0]?.location.name}</p>
        </div>            
    )
}

export default Detail
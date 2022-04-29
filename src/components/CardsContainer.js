import Card from "./Card"
import styled from "styled-components"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCharacters } from "../redux/actions"

const CardsContainer = () => {
    
    const Contenedor = styled.div`
        display: flex;
        flex-wrap: wrap;
    `
    const dispatch = useDispatch()

    const apiInfo = useSelector( state => state.characters) 

    useEffect(() => {
        dispatch(getAllCharacters())
    },[dispatch])
    
    return (
        <Contenedor>
            {apiInfo?.map( obj => <Card id={obj.id} url={obj.image} name={obj.name} status={obj.status} location={obj.location.name}/>)}
        </Contenedor>
    )
}

export default CardsContainer
import styled from 'styled-components';
import Loupe from "../../assets/loupe.png";

export default function Search() {
    const ContainerSearch = styled.div `
        display: flex;
        aling-items: center;
        background-color: #434A76;
        border-radius: 24px;
        padding: 8px 12px;

        input:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    `
    const SearchBar = styled.input `
        border: none;
        background-color: #434A76;
        color: #A4AACD;
        font-size: 14px;
        margin-left: 5px;
    `
    const LoupeImg = styled.img `
        width: 16px;
    `
    return (
        <ContainerSearch>
            <LoupeImg src={Loupe} alt="Lupa" /><SearchBar type="text" name="" id="" />
        </ContainerSearch>
    )
}
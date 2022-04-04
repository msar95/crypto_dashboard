
import styled from "styled-components";

const Bar = styled.div`
    display: grid;
    grid-template-columns: 180px auto 100px 100px;
`
const NavElem = styled.div`
    cursor: pointer;
`
export default function (){ // Bar -> ist der Container des CSS-Grid
    return <Bar>
        <div>CryptoDash</div>
        <div/>
        <NavElem>Dashboard</NavElem>
        <NavElem>Settings</NavElem>
    </Bar> // die Divs sind die Children
}
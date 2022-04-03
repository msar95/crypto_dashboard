
import styled from "styled-components";

const Bar = styled.div`
    display: grid;
    grid-template-columns: 180px auto 100px 100px;
`
export default function (){ // Bar -> ist der Container des CSS-Grid
    return <Bar>
        <div>CryptoDash</div>
        <div/>
        <div>Dashboard</div>
        <div>Settings</div>
    </Bar> // die Divs sind die Children
}
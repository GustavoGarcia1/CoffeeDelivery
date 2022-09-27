import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  margin-top: 10px;

  nav {
    display: flex;
    flex: 1;
    margin: 20px;
    justify-content: space-around;

    img {
      height: 40px;
      width: 85px;
    }
    aside {
      display: flex;
      gap: 0.5rem;
      
      div {
        display: flex;
        align-items: center;
        background-color: ${props => props.theme['purple-light']};
        padding: 8px;
        border-radius: 6px;

        span {
          display: flex;
          align-items: center;
          gap: 4px;
          color: ${props => props.theme['purple-dark']};
        }
      }

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        
        svg {
          height: 38px;
          width: 38px;
          padding: 8px;
          
          border-radius: 6px;
          color: ${props => props.theme['yellow-dark']};
          background-color: ${props => props.theme['yellow-light']};
        }
      }
    }
  }
`
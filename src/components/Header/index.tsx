import { HeaderContainer } from "./styles";

import logo from "../../assets/logo.svg";
import { ShoppingCart, MapPin } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>

      <nav>
        <img src={logo} />

        <aside>

          <div>
            <span>
              <MapPin size={24} color="#5e60ce" weight="fill" />
              Porto Alegre, RS
            </span>
          </div>
          <a type="button">
            <ShoppingCart size={24} weight="fill" />
          </a>
        </aside>
      </nav>
    </HeaderContainer>
  )
}
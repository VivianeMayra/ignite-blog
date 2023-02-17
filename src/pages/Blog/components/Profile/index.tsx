import { ExternalLink } from "../../../../components/ExternalLink"
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons"

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://avatars.githubusercontent.com/u/76888841?v=4" />
      <ProfileDetails>
        <header>
          <h1>Viviane Mayra</h1>
          <ExternalLink text="Github" href="#" />
        </header>
        <p>
          Estudante de Ciências da computação apaixonada por tecnologia.
          Atualmente se especializando em desenvolvimento Web!
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            VivianeMayra
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Fortaleza
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />9 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}

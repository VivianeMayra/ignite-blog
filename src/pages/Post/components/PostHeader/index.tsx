import { faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"
import { ExternalLink } from "../../../../components/ExternalLink"

import { PostHeaderContainer } from "./styles"

export function PostHeader() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink
          as="button"
          onClick={goBack}
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="Voltar"
          variant="iconLeft"
        />
        <ExternalLink text="Ver no Github" target="_blank" />
      </header>

      <h1>Coffe-Delivery</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          VivianeMayra
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          10/02/2023
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />9 comentários
        </li>
      </ul>
    </PostHeaderContainer>
  )
}

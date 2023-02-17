import "styled-components" //estende a tipagem
import { defaultTheme } from "../styles/theme/defaultTheme"

type ThemeType = typeof defaultTheme

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

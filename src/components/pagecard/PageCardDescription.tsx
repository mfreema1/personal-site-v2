import { AsideText } from "../text/AsideText";
import { BodyTextProps } from "../text/BodyText";

export type PageCardDescriptionProps = BodyTextProps;

export function PageCardDescription(props: PageCardDescriptionProps) {
  return <AsideText {...props} />;
}

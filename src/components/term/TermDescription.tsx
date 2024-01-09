import { AsideText, AsideTextProps } from "../text/AsideText";

export type TermDescriptionProps = AsideTextProps;

export function TermDescription(props: TermDescriptionProps) {
  return <AsideText {...props} />;
}

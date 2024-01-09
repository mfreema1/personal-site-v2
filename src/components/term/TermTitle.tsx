import { TitleText, TitleTextProps } from "../text/TitleText";

export type TermTitleProps = TitleTextProps;

export function TermTitle(props: TermTitleProps) {
  return <TitleText {...props} />;
}

import { Defaults } from "../../types/defaults";
import { TitleText, TitleTextProps } from "../text/TitleText";

export type TermTitleProps = Defaults<TitleTextProps, "order">;

export function TermTitle(props: TermTitleProps) {
  return <TitleText order={3} {...props} />;
}

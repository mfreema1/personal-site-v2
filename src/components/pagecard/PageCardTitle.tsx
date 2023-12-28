import { Defaults } from "../../types/defaults";
import { TitleText, TitleTextProps } from "../text/TitleText";

export type PageCardTitleProps = Defaults<TitleTextProps, "order">;

export function PageCardTitle(props: PageCardTitleProps) {
  return <TitleText order={3} {...props} />;
}

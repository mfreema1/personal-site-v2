import { DetailText, DetailTextProps } from "../text/DetailText";

export type TermPronunciationProps = DetailTextProps;

export function TermPronunciation(props: TermPronunciationProps) {
  return <DetailText {...props} />;
}

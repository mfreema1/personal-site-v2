import { ReactElement } from "react";
import {
  TermDescription,
  TermDescriptionProps,
  TermPronunciation,
  TermPronunciationProps,
  TermTitle,
  TermTitleProps,
} from "../components/term";

export type TermID = "Factory" | "Proxy";

export interface TermData {
  id: TermID;
  title: ReactElement<TermTitleProps>;
  description: ReactElement<TermDescriptionProps>;
  pronunciation: ReactElement<TermPronunciationProps>;
}

export const data: TermData[] = [
  {
    id: "Factory",
    title: <TermTitle>Factory</TermTitle>,
    description: (
      <TermDescription>
        An object-oriented pattern where the logic associated with creating an
        object is delegated away from its constructor.
      </TermDescription>
    ),
    pronunciation: <TermPronunciation>"/ˈfakt(ə)rē/"</TermPronunciation>,
  },
  {
    id: "Proxy",
    title: <TermTitle>Proxy</TermTitle>,
    description: (
      <TermDescription>
        An object-oriented pattern where one class wraps the logic of another
        while acting in its place.
      </TermDescription>
    ),
    pronunciation: <TermPronunciation>"/ˈpräksē/"</TermPronunciation>,
  },
];

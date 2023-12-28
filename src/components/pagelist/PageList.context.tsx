import { createContext } from "react";

export interface PageListContextValue {}

export const PageListContext = createContext<PageListContextValue | null>(null);

// No idea, read this:
// https://www.developerway.com/posts/react-component-as-prop-the-right-way
export const PageListProvider = ({
  value,
  children,
}: {
  value: PageListContextValue;
  children: React.ReactNode;
}) => (
  <PageListContext.Provider value={value}>{children}</PageListContext.Provider>
);

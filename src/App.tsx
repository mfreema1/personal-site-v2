import { useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { TColorScheme, colorSchemes } from "./data/themes";
import { About } from "./pages/about/About";
import { Breadth } from "./pages/breadth/Breadth";
import { S01B } from "./pages/breadth/S01B";
import { S02B } from "./pages/breadth/S02B";
import { Home } from "./pages/home/Home";

export function App() {
  const [colorSchemeIndex, setColorSchemeIndex] = useState(0);
  const [colorScheme, setColorScheme] = useState<TColorScheme>(
    colorSchemes[colorSchemeIndex],
  );

  const changeColorScheme = () => {
    const newIndex = colorSchemeIndex + 1;

    setColorSchemeIndex(newIndex);
    setColorScheme(colorSchemes[newIndex % colorSchemes.length]);
  };

  const router = createBrowserRouter([
    {
      Component: () => <Layout changeColorScheme={changeColorScheme} />,
      children: [
        { path: "/", Component: Home },
        { path: "/about", Component: () => <About /> },
        { path: "/breadth", Component: Breadth },
        {
          path: "/breadth/S01B",
          Component: () => <S01B colorScheme={colorScheme} />,
        },
        {
          path: "/breadth/S02B",
          Component: () => <S02B colorScheme={colorScheme} />,
        },
        { path: "/depth", Component: () => <p>Depth</p> },
        { path: "/other", Component: () => <p>Other</p> },
        { path: "/contact", Component: () => <p>Contact</p> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

interface LayoutProps {
  changeColorScheme: () => void;
}

export function Layout({ changeColorScheme }: LayoutProps) {
  return (
    <>
      <Header changeColorScheme={changeColorScheme} />
      <Outlet />
    </>
  );
}

export default App;

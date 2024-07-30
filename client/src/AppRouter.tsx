import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./views/Home";
import { Movies } from "./views/Movies";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Watch } from "./views/Watch";
import { PageNotFound } from "./views/PageNotFound";

export const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="watch" element={<Watch />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

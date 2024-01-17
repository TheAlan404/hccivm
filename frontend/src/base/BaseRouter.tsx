import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { BaseAppLayout } from "./BaseAppLayout";
import { ErrorPage } from "./ErrorPage";
import { HomePage } from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseAppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            }
        ],
    },
]);

export const BaseRouter = () => {
    return (
        <RouterProvider
            router={router}
        />
    )
}

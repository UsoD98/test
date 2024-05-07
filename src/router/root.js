import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter";
import memberRouter from "./memberRouter";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>
const Main = lazy(() => import("../pages/MainPage"))

const About = lazy(() => import("../pages/AboutPage"))

const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))

const Community = lazy(() => import("../pages/CommunityPage"))

const SiteMap = lazy(() => import("../pages/SiteMapsPage"))

const root = createBrowserRouter([

    {
        path: "",
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path: "community",
        element: <Suspense fallback={Loading}><Community/></Suspense>
    },
    {
        path: "todo",
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children: todoRouter()
    },
    {
        path: "member",
        children: memberRouter()
    },
    {
        path: "sitemap",
        element: <Suspense fallback={Loading}><SiteMap/></Suspense>
    }



])

export default root;
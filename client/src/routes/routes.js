import { lazy } from "react";

const ViewEmail = lazy(() => import("../components/ViewEmail"));
const Main = lazy(() => import("../pages/Main"));
const Emails = lazy(() => import("../components/Emails"));


export const routes = {
    main:{
        path: '/',
        element: Main
    },
    emails:{
        path:'/emails',
        element:Emails
    },
    invalid:{
        path:'/*',
        element: Main
    },
    view:{
        path:'/view',
        element:ViewEmail
    }
}
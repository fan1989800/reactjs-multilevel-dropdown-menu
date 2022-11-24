import Layout from "../components/Layout";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import WebDesign from "./WebDesign";
import WebDev from "./WebDev";
import Frontend from "./Frontend";
import Node from "./Node";
import SEO from "./SEO";
import PHP from "./PHP";
import AboutWho from "./AboutWho";
import OurValues from "./OurValues";

export default [
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "services",
        element: <Services/>
      },
      {
        path: "web-design",
        element: <WebDesign/>
      },
      {
        path: "web-dv",
        element: <WebDev/>
      },
      {
        path: "frontend",
        element: <Frontend/>
      },
      {
        path: "node",
        element: <Node/>
      },
      {
        path: "seo",
        element: <SEO/>
      },
      {
        path: "php",
        element: <PHP/>
      },
      {
        path: "who-we-are",
        element: <AboutWho/>
      },
      {
        path: "our-values",
        element: <OurValues/>
      },
      {
        path: "*",
        element: <p>Not found!</p>
      },
    ],
  },
];
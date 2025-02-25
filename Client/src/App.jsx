import "./App.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from "./components/Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
// import Temp from "./pages/Temp";
import DevProfile from "./pages/DevProfile";
import OptionMenu from "./pages/OptionMenu";
import SubOptions from "./pages/SubOptions";
import ClientProfile from "./pages/ClientProfile";
import MainDevProfilePage from "./pages/DevProfileCreation/MainDevProfilePage";
import DevProject from "./pages/DevProject";
import Chatbot from "./components/Chatbot";
import Payment from "./components/Payment";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        // { path: "dashboard", element: <Dashboard /> },
        { path: "clientprofile", element: <ClientProfile/> },
      { path: "devprofile", element: <DevProfile /> },
      { path: "optionmenu", element: <OptionMenu/> },
      { path: "suboption", element: <SubOptions/> },
      { path: "devcreate", element: <MainDevProfilePage/> },
      { path: "devproject", element: <DevProject/> },
      {path:"chatbot",element:<Chatbot/>},
      {path:"payment",element:<Payment/>}

        // {
        //   path: 'admindashboard',
        //   element: (
        //     <PrivateRoute>
        //      <AdiminDashboard/>
        //     </PrivateRoute>
        //   ),
        // },
 
       
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

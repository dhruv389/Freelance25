import "./App.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from "./components/Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
// import Temp from "./pages/Temp";
import DevProfile from "./pages/DevProfile";
import DevProfile2 from "./pages/DevProfile2";
import OptionMenu from "./pages/OptionMenu";
import SubOptions from "./pages/SubOptions";
import ClientProfile from "./pages/ClientProfile";
import ClientProfile2 from "./pages/ClientProfile2";
import MainDevProfilePage from "./pages/DevProfileCreation/MainDevProfilePage";
import DevProject from "./pages/DevProject";
import Chatbot from "./components/Chatbot";
import Payment from "./components/Payment";
import Testing from "./components/Testing";
import MainClientProfilePage from "./pages/ClientProfileCreation/MainClientProfilePage";
import ProposalPage from "./pages/ProposalPage";
import MainPropsalPage from "./pages/MainPropsalPage";
import VideoCall from "./pages/VideoCall";
import AiProposal from "./pages/AiProposal";
import Success from "./pages/Success";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        // { path: "dashboard", element: <Dashboard /> },
        
        { path: "clientprofile/:id", element: <ClientProfile/> },
      { path: "devprofile/:id", element: <DevProfile /> },
      { path: "optionmenu", element: <OptionMenu/> },
      { path: "suboption/:id", element: <SubOptions/> },
      { path: "devcreate", element: <MainDevProfilePage/> },
      { path: "clientcreate", element: <MainClientProfilePage/> },
      { path: "devproject/:id", element: <DevProject/> },
      {path:"chatbot",element:<Chatbot/>},
      {path:"payment",element:<Payment/>},
      {path:"test",element:<Testing/>},
      {path:"proposalpage/:id",element:<ProposalPage/>},
      {path:"mainproposalpage",element:<MainPropsalPage/>},
      {path:"profileid2/:objectid",element:<DevProfile2/>},
     
      {path:"videocall",element:<VideoCall/>},
      {path:"success", element:<Success/>},
      {path:"aiproposal", element:<AiProposal/>},

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

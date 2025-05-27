import { Suspense } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Loading from "./Components/Includes/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Network from "./Routing/Network";
import { router } from "./Routing/Router";
import ErrorWrapper from "./Routing/ErrorWrapper";

function App() {
  return (
    <Network>
      <Suspense fallback={<Loading />}>
        <ErrorWrapper>
          <RouterProvider router={router} />
        </ErrorWrapper>
      </Suspense>
      <ToastContainer />
    </Network>
  );
}

export default App;

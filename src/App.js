import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Layouts from "./Layouts";
import SinglePost from "./SinglePost";



function App(props) {


  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<h1>This is about page </h1>} />
          <Route path="detail/:postId" element={<SinglePost />} />
          <Route path="*" element={<h1>Nothing is found </h1>} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}




export default App;

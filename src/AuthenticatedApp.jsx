import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Video from "./Components/Pages/Video/Video";
import Menu from "./Components/Pages/Menu/Menu";
import Head from "./Components/Pages/Head/Head";
import Coming from "./Components/Pages/Coming/Coming";
import Channel from "./Components/Pages/Channel/Channel";
import Error from "./Components/Pages/Error/Error";

function AuthenticatedApp() {
  const [showText, setShowText] = React.useState(true);
  const [menuWidth, setMenuWidth] = React.useState("200px");

  const toggleShowText = () => {
    setShowText(!showText);
    setMenuWidth(showText ? "100px" : "200px");
  };

  return (
    <>
      <div className="container">
        <Home onMenuClick={toggleShowText} />
        <div className="page__info">

          <Menu showText={showText} width={menuWidth} />

          <div className="page__item">

            <Routes>
              <Route path="/" element={<Navigate to='/users' />} />
              <Route path="/users" element={<Head />} />
              <Route path="/video/:user_id" element={<Video />} />
              <Route path="/channel/:user_id" element={<Channel />} />
              <Route path="/coming" element={<Coming />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>

        </div>

      </div>
    </>
  );
}

export default AuthenticatedApp;
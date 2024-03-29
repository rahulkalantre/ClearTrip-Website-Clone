import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import LoginPageCarousel from "../Atoms/LoginPageCarousel";
import "../Styles/LoginPage.css";

const LoginPage = () => {
  const [open, setOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };
  return (
    <div>
      <Modal
        open={open}
        center
        onClose={() => setOpen(false)}
        classNames={{
          modal: "customModal",
        }}
      >
        <div style={{ display: "flex" }}>
          <LoginPageCarousel />
          <div className="login-container">
            {isLogin ? (
              ""
            ) : (
              <>
                <label className="name-label">Name</label>
                <input
                  type="text"
                  className="input-name"
                  placeholder="Enter Your Name"
                ></input>
              </>
            )}
            <label className="name-label">Email</label>
            <input
              type="email"
              className="input-name"
              placeholder="Enter Your Email"
            ></input>

            <button className="login-btn">Get start</button>
            {isLogin ? (
              ""
            ) : (
              <>
                <p className="already-acc-para">
                  Already account ?
                  <span onClick={handleLogin} className="already-acc">
                    Login Here
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginPage;

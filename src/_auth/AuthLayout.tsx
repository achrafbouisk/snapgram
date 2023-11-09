import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "@/context/AuthContext";

const AuthLayout = () => {
  const isAuthenticated = false;
  console.log("isAuth", isAuthenticated);

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden lg:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;

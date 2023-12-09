import { Outlet, Navigate } from "react-router-dom";


const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <>
          <Navigate to="/" />
        </>
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center py-10 flex-col">
            <Outlet></Outlet>
          </section>
          <img src='/public/assets/images/side-img.svg' alt="logo" className="hidden lg:block h-screen w-1/2 object-cover bg-no-repeat"/>
        </>
      )}
    </>
  );
};

export default AuthLayout;
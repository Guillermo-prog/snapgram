import { Outlet, Navigate } from "react-router-dom";

function AuthLayout() {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet /> {/* What is inside this route element */}
          </section>

          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-over bg-no-repeat"
          />
        </>
      )}
    </>
  );
}
export default AuthLayout;

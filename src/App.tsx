import AuthLayout from "./_auth/AuthLayout";
import SignUp from "./_auth/forms/SignUp";
import SigninForm from "./_auth/forms/SigninForm";
import { Home } from "./_root/pages";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={<AuthLayout />}
        >
          <Route path="sign-in" element={<SigninForm />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

        {/* Private routes */}
        <Route path="home" element={<Home />} />
      </Routes>
      <Toaster/>
    </main>
  );
};

export default App;

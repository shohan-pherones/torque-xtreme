import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import Spinner from "./Spinner";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification] = useSendEmailVerification(auth);

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="mt-32 flex flex-col gap-5 items-center">
        <h3 className="text-xl">
          Your email is not verified, please verify your email address first.
        </h3>
        <button
          className="btn"
          onClick={async () => {
            const success = await sendEmailVerification();
            if (success) {
              toast.info("Verification email sent!");
            }
          }}
        >
          Resend verification email
        </button>
      </div>
    );
  }

  return children;
};

export default RequireAuth;

import { useState,useEffect } from "react";
import { useNavigate, NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../features/auth/authSlice";
const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { loading, error,userId } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
   useEffect(() => {
    if (userId && !loading) {
      navigate("/dashboard");
    }
  }, [userId, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
   dispatch(signupUser(form));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mt-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="checkbox checkbox-primary"
              />
              <span>Show Password</span>
            </label>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <NavLink to={"/login"} className="link link-primary">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;

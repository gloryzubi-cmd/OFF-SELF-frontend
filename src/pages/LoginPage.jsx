import { useState } from "react";
import { useNavigate } from "react-router";

function SocialButtons() {
  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        className="flex items-center justify-center gap-3 w-full border border-outline-variant py-3 font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        CONTINUE WITH GOOGLE
      </button>
      <button
        type="button"
        className="flex items-center justify-center gap-3 w-full border border-outline-variant py-3 font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
        CONTINUE WITH APPLE
      </button>
    </div>
  );
}

const inputClasses =
  "bg-transparent border-b border-outline-variant/50 focus:border-primary py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/40 outline-none transition-colors";
const labelClasses =
  "font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest";

export default function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    setSuccess("");
  };

  const switchMode = (next) => {
    setMode(next);
    resetForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (mode === "signup") {
      if (password.length < 8) {
        setError("Password must be at least 8 characters.");
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      // TODO: connect to real auth backend
      setSuccess("Account created! Welcome to OFF SELF.");
      setTimeout(() => navigate("/"), 1200);
      return;
    }

    // TODO: connect to real auth backend
    setSuccess("Signed in successfully. Welcome back!");
    setTimeout(() => navigate("/"), 1200);
  };

  const isSignup = mode === "signup";

  return (
    <div className="w-full bg-cream text-on-surface min-h-[calc(100vh-5rem)]">
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Editorial intro */}
          <div className="hidden lg:flex flex-col gap-6 pt-4">
            <span className="font-label-caps text-label-caps tracking-[0.2em] uppercase text-on-surface-variant">
              OFF SELF — MEMBERS
            </span>
            <h1 className="font-headline-lg text-headline-lg uppercase leading-tight text-primary">
              {isSignup ? "BECOME A MEMBER" : "WELCOME BACK"}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              {isSignup
                ? "Create an account to save your favorites, track orders, and check out faster."
                : "Sign in to access your orders, wishlist, and a faster checkout."}
            </p>
            <div className="flex flex-col gap-4 mt-8">
              {["Save items to your wishlist", "Track orders and returns", "Early access to new edits"].map(
                (benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-primary">
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      {benefit}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Auth card */}
          <div className="w-full max-w-md mx-auto lg:mx-0 bg-surface-container-lowest border border-outline-variant/30 p-8 lg:p-10">
            {/* Mobile heading */}
            <div className="lg:hidden mb-8 text-center">
              <h1 className="font-headline-md text-headline-md uppercase text-primary mb-2">
                {isSignup ? "CREATE ACCOUNT" : "SIGN IN"}
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {isSignup
                  ? "Join OFF SELF in a few seconds."
                  : "Access your orders, wishlist, and more."}
              </p>
            </div>

            {/* Login / Signup toggle */}
            <div className="grid grid-cols-2 border border-outline-variant/40 mb-8">
              <button
                type="button"
                onClick={() => switchMode("login")}
                className={`py-3 font-label-caps text-label-caps uppercase tracking-widest transition-colors ${
                  !isSignup
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                LOGIN
              </button>
              <button
                type="button"
                onClick={() => switchMode("signup")}
                className={`py-3 font-label-caps text-label-caps uppercase tracking-widest transition-colors ${
                  isSignup
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                SIGN UP
              </button>
            </div>

            <SocialButtons />

            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-outline-variant/30" />
              <span className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase">
                OR WITH EMAIL
              </span>
              <div className="flex-1 h-px bg-outline-variant/30" />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="login-email" className={labelClasses}>
                  EMAIL
                </label>
                <input
                  id="login-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="login-password" className={labelClasses}>
                    PASSWORD
                  </label>
                  {!isSignup && (
                    <button
                      type="button"
                      className="font-label-caps text-[10px] text-primary hover:text-primary-container transition-colors uppercase tracking-widest"
                    >
                      FORGOT PASSWORD?
                    </button>
                  )}
                </div>
                <input
                  id="login-password"
                  type="password"
                  autoComplete={isSignup ? "new-password" : "current-password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={isSignup ? "At least 8 characters" : "Enter your password"}
                  className={inputClasses}
                />
              </div>

              {isSignup && (
                <div className="flex flex-col gap-2">
                  <label htmlFor="login-confirm" className={labelClasses}>
                    CONFIRM PASSWORD
                  </label>
                  <input
                    id="login-confirm"
                    type="password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter your password"
                    className={inputClasses}
                  />
                </div>
              )}

              {!isSignup && (
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span
                    className={`w-4 h-4 border transition-colors flex items-center justify-center ${
                      rememberMe ? "bg-primary border-primary" : "border-outline-variant"
                    }`}
                  >
                    {rememberMe && (
                      <span className="material-symbols-outlined text-on-primary text-[14px]">
                        check
                      </span>
                    )}
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Remember me
                  </span>
                </label>
              )}

              {error && (
                <p className="font-body-md text-body-md text-error" role="alert">
                  {error}
                </p>
              )}
              {success && (
                <p className="font-body-md text-body-md text-primary" role="status">
                  {success}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-primary text-on-primary font-label-caps text-label-caps tracking-widest py-4 hover:bg-primary-container transition-colors duration-300"
              >
                {isSignup ? "CREATE ACCOUNT" : "SIGN IN"}
              </button>
            </form>

            <p className="mt-8 text-center font-body-md text-body-md text-on-surface-variant">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                type="button"
                onClick={() => switchMode(isSignup ? "login" : "signup")}
                className="text-primary font-medium hover:text-primary-container transition-colors uppercase"
              >
                {isSignup ? "SIGN IN" : "CREATE ACCOUNT"}
              </button>
            </p>

            <div className="mt-10 pt-6 border-t border-outline-variant/20">
              <p className="font-label-caps text-[10px] text-on-surface-variant/50 text-center tracking-widest uppercase">
                OFF SELF &mdash; WEAR WHAT FEELS LIKE YOU
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

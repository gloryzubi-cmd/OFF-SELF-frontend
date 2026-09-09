import { useState, useEffect } from "react";

export default function AccountDrawer({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Reset form state when drawer closes
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setEmail("");
        setPassword("");
        setRememberMe(false);
      }, 0);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/30">
          <h2 className="font-headline-md text-headline-md text-on-surface uppercase">
            MY ACCOUNT
          </h2>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface transition-colors"
            aria-label="Close account"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col">
          {/* Welcome */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[32px] text-on-surface-variant">
                person
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-1">
              WELCOME BACK
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Sign in to access your orders, wishlist, and more.
            </p>
          </div>

          {/* Social Logins */}
          <div className="flex flex-col gap-3 mb-8">
            <button className="flex items-center justify-center gap-3 w-full border border-outline-variant py-3 font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors">
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
            <button className="flex items-center justify-center gap-3 w-full border border-outline-variant py-3 font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              CONTINUE WITH APPLE
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-outline-variant/30" />
            <span className="font-label-caps text-[10px] text-on-surface-variant tracking-widest">
              OR SIGN IN WITH EMAIL
            </span>
            <div className="flex-1 h-px bg-outline-variant/30" />
          </div>

          {/* Email Login Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                EMAIL
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="bg-transparent border-b border-outline-variant/50 focus:border-primary py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/40 outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  PASSWORD
                </label>
                <button
                  type="button"
                  className="font-label-caps text-[10px] text-primary hover:text-primary-container transition-colors uppercase tracking-widest"
                >
                  FORGOT PASSWORD?
                </button>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="bg-transparent border-b border-outline-variant/50 focus:border-primary py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/40 outline-none transition-colors"
              />
            </div>

            {/* Remember Me */}
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                className={`w-4 h-4 border transition-colors flex items-center justify-center ${
                  rememberMe
                    ? "bg-primary border-primary"
                    : "border-outline-variant"
                }`}
                onClick={() => setRememberMe(!rememberMe)}
              >
                {rememberMe && (
                  <span className="material-symbols-outlined text-on-primary text-[14px]">
                    check
                  </span>
                )}
              </div>
              <span className="font-body-md text-body-md text-on-surface-variant">
                Remember me
              </span>
            </label>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-primary text-on-primary font-label-caps text-label-caps tracking-widest py-4 mt-4 hover:bg-primary-container transition-colors duration-300"
            >
              SIGN IN
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Don&apos;t have an account?{" "}
              <button className="text-primary font-medium hover:text-primary-container transition-colors">
                CREATE ACCOUNT
              </button>
            </p>
          </div>

          {/* Decorative divider */}
          <div className="mt-10 pt-8 border-t border-outline-variant/20">
            <div className="w-16 h-px bg-outline-variant/30 mx-auto mb-6" />
            <p className="font-label-caps text-[10px] text-on-surface-variant/50 text-center tracking-widest uppercase">
              OFF SELF &mdash; WEAR WHAT FEELS LIKE YOU
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

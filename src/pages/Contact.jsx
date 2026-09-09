import { Link } from "react-router";

const CONTACT_INFO = [
  {
    icon: "mail",
    label: "EMAIL",
    value: "hello@offself.com",
    href: "mailto:hello@offself.com",
  },
  {
    icon: "call",
    label: "PHONE",
    value: "+1 (555) 234-5678",
    href: "tel:+15552345678",
  },
  {
    icon: "location_on",
    label: "ADDRESS",
    value: "123 Design District\nNew York, NY 10001",
    href: null,
  },
];

const SOCIAL_LINKS = [
  { icon: "camera_alt", label: "Instagram", href: "#" },
  { icon: "smart_display", label: "TikTok", href: "#" },
  { icon: "push_pin", label: "Pinterest", href: "#" },
];

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-cream text-on-surface min-h-screen">
      {/* HERO HEADER */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-8 pb-2">
        <div className="text-center flex flex-col items-center">
          <h1 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg uppercase tracking-widest text-primary mb-2">
            GET IN TOUCH
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-center">
            We&apos;d love to hear from you. Reach out about orders, sizing,
            styling, or anything else.
          </p>
        </div>
      </section>

      {/* FORM + INFO GRID */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-4 border-t border-outline-variant/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <h2 className="font-headline-md text-headline-md text-primary mb-4 uppercase animate-fade-up" style={{ animationDelay: '0ms' }}>
              SEND A MESSAGE
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="bg-transparent border-b border-outline-variant/50 focus:border-primary py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/40 outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-transparent border-b border-outline-variant/50 focus:border-primary py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/40 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  SUBJECT
                </label>
                <select className="bg-transparent border-b border-outline-variant/50 focus:border-primary py-3 font-body-md text-body-md text-on-surface outline-none cursor-pointer transition-colors appearance-none">
                  <option value="">Select a topic</option>
                  <option value="order">Order Inquiry</option>
                  <option value="sizing">Sizing & Fit</option>
                  <option value="shipping">Shipping & Returns</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  MESSAGE
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what's on your mind..."
                  className="bg-transparent border-b border-outline-variant/50 focus:border-primary py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/40 outline-none resize-none transition-colors"
                />
              </div>

              <div className="flex justify-start mt-2">
                <button
                  type="submit"                    className="bg-primary text-on-primary font-label-caps text-label-caps tracking-widest py-3 px-10 hover:bg-primary-container transition-colors duration-300"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5">
            <h2 className="font-headline-md text-headline-md text-primary mb-4 uppercase animate-fade-up" style={{ animationDelay: '100ms' }}>
              CONTACT INFO
            </h2>
            <div className="flex flex-col gap-4 mb-6">
              {CONTACT_INFO.map((info) => (
                <div key={info.label} className="flex gap-4">
                  <span className="material-symbols-outlined text-[24px] text-on-surface-variant mt-0.5">
                    {info.icon}
                  </span>
                  <div>
                    <span className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase block mb-1">
                      {info.label}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-body-lg text-body-lg text-on-surface hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-body-lg text-body-lg text-on-surface whitespace-pre-line">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-3 uppercase tracking-widest">
                FOLLOW US
              </h3>
              <div className="flex flex-wrap gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-2 px-3 py-2 border border-outline-variant hover:border-primary hover:bg-primary/5 text-on-surface font-body-md text-body-md transition-colors"
                    aria-label={social.label}
                  >
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                      {social.icon}
                    </span>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="w-full h-[20vh] min-h-[160px] relative bg-surface-container overflow-hidden">
        <iframe
          title="OFF SELF Location - New York, NY"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
        {/* Pin label overlay */}
        <div className="absolute bottom-6 left-6 z-10 bg-surface-container-lowest/90 backdrop-blur-sm px-4 py-3 shadow-lg flex items-center gap-3">
          <span className="material-symbols-outlined text-[20px] text-primary">
            location_on
          </span>
          <div className="flex flex-col">
            <span className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase">
              OFF SELF
            </span>
            <span className="font-body-md text-body-md text-on-surface">
              New York, NY 10001
            </span>
          </div>
        </div>
      </section>

      {/* FAQ QUICK LINKS */}
      <section className="w-full bg-primary text-on-primary py-6 mt-2 overflow-hidden relative">
        {/* Decorative diagonal lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            width="100%"
          >
            <path
              d="M0,100 L100,0"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M10,100 L100,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M20,100 L100,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop text-center flex flex-col items-center gap-6">
          <div className="w-16 h-px bg-on-primary/50" />
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps tracking-[0.2em] uppercase text-on-primary/50">
              NEED QUICK ANSWERS?
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-none uppercase">
              CHECK OUR FAQ
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-primary/80 max-w-xl">
            Shipping times, return policies, sizing guides, and more—find
            answers to the most common questions.
          </p>
          <Link
            to="/faq"
            className="inline-flex items-center gap-4 border-b border-on-primary pb-2 hover:text-primary-fixed transition-colors"
          >
            <span className="font-label-caps text-label-caps uppercase">
              VISIT FAQ
            </span>
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </Link>
          <div className="w-16 h-px bg-on-primary/50" />
        </div>
      </section>

      {/* CLOSING */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-6 text-center flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col gap-4">
          <span className="font-label-caps text-label-caps tracking-[0.2em] uppercase text-on-surface-variant">
            OFF SELF
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-none uppercase max-w-4xl text-primary">
            WEAR WHAT FEELS LIKE YOU.
          </h2>        </div>
        <Link
          to="/shop-the-edit"
          className="inline-flex items-center gap-4 border-b border-primary pb-2 hover:text-surface-tint transition-colors">
          <span className="font-label-caps text-label-caps uppercase text-primary">
            SHOP THE EDIT
          </span>
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </Link>
      </section>
    </div>
  );
}

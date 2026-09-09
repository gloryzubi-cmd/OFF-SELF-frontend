import { useState } from "react";
import { Link } from "react-router";

const FAQ_CATEGORIES = [
  {
    title: "ORDERS & SHIPPING",
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping takes 5–7 business days. Express shipping (available at checkout) delivers in 2–3 business days. International orders may take 7–14 business days depending on your location.",
      },
      {
        q: "Can I track my order?",
        a: "Yes. Once your order ships, you'll receive a confirmation email with a tracking number. You can also check your order status by logging into your account.",
      },
      {
        q: "Do you ship internationally?",
        a: "We ship to most countries worldwide. International shipping rates and delivery times vary by destination. Duties and taxes are the responsibility of the customer.",
      },
      {
        q: "Can I change or cancel my order?",
        a: "Orders can be modified or cancelled within 2 hours of placement. After that, the order enters processing and changes are no longer possible. Contact us immediately if you need assistance.",
      },
    ],
  },
  {
    title: "RETURNS & EXCHANGES",
    questions: [
      {
        q: "What is your return policy?",
        a: "We accept returns within 30 days of delivery. Items must be unused, in their original packaging, with all tags attached. Sale items are final sale and cannot be returned.",
      },
      {
        q: "How do I start a return?",
        a: "Log into your account, go to Order History, and select the item you'd like to return. You'll receive a prepaid return label via email. Pack the item and drop it off at your nearest shipping location.",
      },
      {
        q: "When will I receive my refund?",
        a: "Refunds are processed within 5–7 business days after we receive your return. The refund will be credited to your original payment method.",
      },
      {
        q: "Can I exchange an item?",
        a: "Yes. Select 'Exchange' when initiating your return and choose the new size or color. We'll ship the replacement as soon as we receive your return.",
      },
    ],
  },
  {
    title: "SIZING & FIT",
    questions: [
      {
        q: "How do I find my size?",
        a: "Each product page includes a size guide specific to that item. Our pieces are designed with a contemporary fit — if you're between sizes, we recommend sizing up for a relaxed look or down for a more tailored feel.",
      },
      {
        q: "Are your sizes consistent across products?",
        a: "Sizing may vary slightly between categories (eyewear, footwear, accessories). Always refer to the size guide on the specific product page for the most accurate fit.",
      },
    ],
  },
  {
    title: "PRODUCTS & CARE",
    questions: [
      {
        q: "Are your products authentic?",
        a: "Every piece sold on OFF SELF is authentic and sourced directly from our curated network of designers and manufacturers. Each item comes with a certificate of authenticity.",
      },
      {
        q: "How should I care for my items?",
        a: "Care instructions vary by product. Generally, store jewelry and watches in a dry, cool place. Clean eyewear with a microfiber cloth. Leather goods should be kept away from direct sunlight and moisture.",
      },
      {
        q: "Will you restock sold-out items?",
        a: "Some items are limited edition and won't be restocked. Others marked as 'RESTOCKED' on our site are available again. Sign up for restock alerts on any product page to be notified.",
      },
    ],
  },
  {
    title: "ACCOUNT & PRIVACY",
    questions: [
      {
        q: "Do I need an account to shop?",
        a: "No. You can check out as a guest. However, creating an account gives you access to order tracking, wishlist, faster checkout, and exclusive offers.",
      },
      {
        q: "How is my data protected?",
        a: "We use industry-standard encryption and never store your full payment details. Your personal data is handled in accordance with our Privacy Policy and GDPR regulations.",
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (categoryIdx, questionIdx) => {
    const key = `${categoryIdx}-${questionIdx}`;
    setOpenIndex((prev) => (prev === key ? null : key));
  };

  return (
    <div className="flex flex-col w-full bg-cream text-on-surface min-h-screen">
      {/* Header */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-16 pb-8">
        <div className="text-center flex flex-col items-center">
          <h1 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg uppercase tracking-widest text-primary mb-4">
            FREQUENTLY ASKED
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-center">
            Everything you need to know about ordering, shipping, returns, and
            caring for your pieces.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-section-gap">
        <div className="max-w-3xl mx-auto flex flex-col gap-16">
          {FAQ_CATEGORIES.map((category, catIdx) => (
            <div key={category.title}>
              <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-6 border-b border-outline-variant/30 pb-4">
                {category.title}
              </h2>
              <div className="flex flex-col">
                {category.questions.map((item, qIdx) => {
                  const isOpen =
                    openIndex === `${catIdx}-${qIdx}`;
                  return (
                    <div
                      key={qIdx}
                      className="border-b border-outline-variant/20"
                    >
                      <button
                        onClick={() => toggle(catIdx, qIdx)}
                        className="w-full flex items-center justify-between py-5 text-left group"
                      >
                        <span className="font-body-lg text-body-lg text-on-surface group-hover:text-primary transition-colors pr-8">
                          {item.q}
                        </span>
                        <span
                          className={`material-symbols-outlined text-[20px] text-on-surface-variant transition-transform duration-300 flex-shrink-0 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          expand_more
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-[32rem] pb-5" : "max-h-0"
                        }`}
                      >
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary text-on-primary py-section-gap mt-section-gap overflow-hidden relative">
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
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop text-center flex flex-col items-center gap-12">
          <div className="w-16 h-px bg-on-primary/50" />
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps tracking-[0.2em] uppercase text-on-primary/50">
              STILL HAVE QUESTIONS?
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-none uppercase">
              GET IN TOUCH
            </h2>
          </div>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-xl">
            Our team is here to help. Reach out and we&apos;ll get back to you
            as soon as possible.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 border-b border-on-primary pb-2 hover:text-primary-fixed transition-colors"
          >
            <span className="font-label-caps text-label-caps uppercase">
              CONTACT US
            </span>
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </Link>
          <div className="w-16 h-px bg-on-primary/50" />
        </div>
      </section>

      {/* Closing */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-[15vh] text-center flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col gap-4">
          <span className="font-label-caps text-label-caps tracking-[0.2em] uppercase text-on-surface-variant">
            OFF SELF
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-none uppercase max-w-4xl text-primary">
            WEAR WHAT FEELS LIKE YOU.
          </h2>
        </div>
        <Link
          to="/shop-the-edit"
          className="inline-flex items-center gap-4 border-b border-primary pb-2 hover:text-surface-tint transition-colors mt-8"
        >
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

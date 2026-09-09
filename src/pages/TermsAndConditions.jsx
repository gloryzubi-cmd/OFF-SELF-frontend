import { Link } from "react-router";

const SECTIONS = [
  {
    title: "1. ACCEPTANCE OF TERMS",
    content: `By accessing or using the OFF SELF website (offself.com) and our services, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    title: "2. ELIGIBILITY",
    content: `You must be at least 16 years old to use our website and services. By using our services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into a binding agreement.`,
  },
  {
    title: "3. ACCOUNT REGISTRATION",
    content: `When you create an account, you agree to:

• Provide accurate, current, and complete information.
• Maintain the security of your password and account.
• Promptly update your account information if it changes.
• Accept responsibility for all activities that occur under your account.
• Notify us immediately of any unauthorized use of your account.

We reserve the right to suspend or terminate accounts that violate these terms.`,
  },
  {
    title: "4. PRODUCTS & PRICING",
    content: `• All products are subject to availability. We reserve the right to discontinue any product at any time.
• Prices are displayed in your local currency and include applicable taxes unless stated otherwise.
• We strive for accuracy in product descriptions, images, and pricing. However, errors may occur. We reserve the right to correct any errors and cancel orders placed at incorrect prices.
• Product colors may vary slightly from what is shown on screen due to display settings.`,
  },
  {
    title: "5. ORDERS & PAYMENT",
    content: `• Placing an order constitutes an offer to purchase. We reserve the right to accept or decline any order.
• Payment must be received in full before we dispatch your order.
• We accept major credit cards, debit cards, and other payment methods displayed at checkout.
• All payment information is processed securely through our PCI-compliant payment providers.`,
  },
  {
    title: "6. SHIPPING & DELIVERY",
    content: `• Shipping times are estimates and not guaranteed. Delays may occur due to factors beyond our control.
• Risk of loss and title for items pass to you upon delivery to the carrier.
• We are not responsible for lost, stolen, or damaged packages after delivery.
• International customers are responsible for all customs duties, taxes, and import fees.`,
  },
  {
    title: "7. RETURNS & REFUNDS",
    content: `• Items may be returned within 30 days of delivery, provided they are unused, in original packaging, with all tags attached.
• Sale items, final sale items, and personalized products are non-returnable.
• Refunds are processed within 5–7 business days of receiving the return.
• Shipping costs are non-refundable unless the return is due to our error.
• To initiate a return, log into your account and select the item from your order history.`,
  },
  {
    title: "8. INTELLECTUAL PROPERTY",
    content: `All content on this website — including text, images, logos, graphics, videos, product designs, and software — is the property of OFF SELF or its licensors and is protected by copyright, trademark, and other intellectual property laws.

You may not:
• Copy, reproduce, or distribute any content without our written permission.
• Use our trademarks, logos, or brand elements for any purpose.
• Modify or create derivative works from our content.
• Scrape or use automated tools to extract content from our website.`,
  },
  {
    title: "9. USER-GENERATED CONTENT",
    content: `If you submit reviews, photos, or other content to our website or social media:

• You grant OFF SELF a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content.
• You represent that you own or have the necessary rights to the content.
• You agree not to submit content that is illegal, offensive, or infringes on others' rights.
• We reserve the right to remove any content at our discretion.`,
  },
  {
    title: "10. PROHIBITED CONDUCT",
    content: `You agree not to:

• Use our website for any unlawful purpose.
• Attempt to gain unauthorized access to our systems.
• Interfere with or disrupt website functionality.
• Use automated tools (bots, scrapers) to access our website.
• Impersonate another person or entity.
• Engage in any activity that could harm OFF SELF or its users.`,
  },
  {
    title: "11. LIMITATION OF LIABILITY",
    content: `To the maximum extent permitted by law:

• OFF SELF shall not be liable for any indirect, incidental, special, or consequential damages.
• Our total liability shall not exceed the amount you paid for the product in question.
• We are not liable for damages arising from third-party services, shipping carriers, or payment processors.
• These limitations apply regardless of the legal theory (contract, tort, negligence, or otherwise).`,
  },
  {
    title: "12. INDEMNIFICATION",
    content: `You agree to indemnify, defend, and hold harmless OFF SELF, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of our website, violation of these terms, or infringement of any third-party rights.`,
  },
  {
    title: "13. GOVERNING LAW",
    content: `These Terms & Conditions are governed by and construed in accordance with the laws of the State of New York, United States. Any disputes shall be resolved in the courts of New York County, New York.`,
  },
  {
    title: "14. CHANGES TO THESE TERMS",
    content: `We reserve the right to modify these Terms & Conditions at any time. Changes will be effective upon posting. Your continued use of our website after changes are posted constitutes acceptance of the revised terms. We encourage you to review these terms periodically.`,
  },
  {
    title: "15. CONTACT US",
    content: `For questions about these Terms & Conditions, contact us at:

Email: legal@offself.com
Address: 123 Design District, New York, NY 10001`,
  },
];

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col w-full bg-cream text-on-surface min-h-screen">
      {/* Header */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-16 pb-8">
        <div className="text-center flex flex-col items-center">
          <h1 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg uppercase tracking-widest text-primary mb-4">
            TERMS & CONDITIONS
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-md text-center">
            Last updated: September 1, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-section-gap">
        <div className="max-w-3xl mx-auto">
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 leading-relaxed">
            Welcome to OFF SELF. These Terms & Conditions govern your use of our
            website and services. Please read them carefully before placing an
            order or creating an account.
          </p>

          <div className="flex flex-col gap-12">
            {SECTIONS.map((section) => (
              <div
                key={section.title}
                className="border-t border-outline-variant/30 pt-8"
              >
                <h2 className="font-headline-md text-headline-md text-primary mb-4">
                  {section.title}
                </h2>
                <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-primary text-on-primary py-section-gap overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
            <path d="M0,100 L100,0" fill="none" stroke="currentColor" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
            <path d="M10,100 L100,10" fill="none" stroke="currentColor" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
            <path d="M20,100 L100,20" fill="none" stroke="currentColor" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop text-center flex flex-col items-center gap-8">
          <div className="w-16 h-px bg-on-primary/50" />
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-xl">
            Questions about our terms? We&apos;re here to help.
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

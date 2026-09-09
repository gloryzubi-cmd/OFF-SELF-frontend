import { Link } from "react-router";

const SECTIONS = [
  {
    title: "1. INFORMATION WE COLLECT",
    content: `We collect information you provide directly to us, including:

• Name, email address, phone number, and shipping/billing addresses when you create an account or make a purchase.
• Payment information (processed securely through our payment providers — we do not store full card details).
• Communication preferences and marketing opt-ins.
• Product reviews, feedback, and customer service inquiries.
• Device and browser information, IP address, and browsing activity on our site through cookies and similar technologies.`,
  },
  {
    title: "2. HOW WE USE YOUR INFORMATION",
    content: `We use the information we collect to:

• Process and fulfill your orders, including shipping, returns, and exchanges.
• Create and manage your account.
• Communicate with you about orders, products, services, and promotions.
• Personalize your shopping experience and recommend products.
• Improve our website, products, and services.
• Detect and prevent fraud, unauthorized access, and other illegal activities.
• Comply with legal obligations.`,
  },
  {
    title: "3. SHARING YOUR INFORMATION",
    content: `We may share your information with:

• Service providers who help us operate our business (payment processors, shipping carriers, email platforms).
• Analytics partners to understand how our website is used.
• Law enforcement or government agencies when required by law.
• Business partners in the event of a merger, acquisition, or sale of assets.

We do not sell your personal information to third parties.`,
  },
  {
    title: "4. COOKIES & TRACKING",
    content: `We use cookies and similar technologies to:

• Remember your preferences and login status.
• Analyze website traffic and usage patterns.
• Deliver personalized ads and measure their effectiveness.
• Improve site performance and user experience.

You can control cookies through your browser settings. Disabling cookies may affect site functionality.`,
  },
  {
    title: "5. DATA SECURITY",
    content: `We implement industry-standard security measures to protect your personal information, including:

• SSL/TLS encryption for data in transit.
• Secure payment processing through PCI-compliant providers.
• Regular security audits and vulnerability assessments.
• Access controls and authentication for internal systems.

While we take reasonable precautions, no method of transmission or storage is 100% secure.`,
  },
  {
    title: "6. YOUR RIGHTS",
    content: `Depending on your location, you may have the right to:

• Access the personal information we hold about you.
• Request correction of inaccurate data.
• Request deletion of your personal data.
• Opt out of marketing communications at any time.
• Data portability — receive your data in a structured format.
• Withdraw consent where processing is based on consent.

To exercise these rights, contact us at privacy@offself.com.`,
  },
  {
    title: "7. DATA RETENTION",
    content: `We retain your personal information for as long as your account is active or as needed to provide services. We may retain certain information as required by law or for legitimate business purposes, such as fraud prevention and record-keeping.`,
  },
  {
    title: "8. CHILDREN'S PRIVACY",
    content: `Our website is not intended for children under 16. We do not knowingly collect personal information from children. If we learn that we have collected data from a child under 16, we will delete it promptly.`,
  },
  {
    title: "9. INTERNATIONAL TRANSFERS",
    content: `Your information may be processed in countries other than your own. We ensure appropriate safeguards are in place for international data transfers, including standard contractual clauses where required.`,
  },
  {
    title: "10. CHANGES TO THIS POLICY",
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services constitutes acceptance of the updated policy.`,
  },
  {
    title: "11. CONTACT US",
    content: `If you have questions about this Privacy Policy or our data practices, contact us at:

Email: privacy@offself.com
Address: 123 Design District, New York, NY 10001`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full bg-cream text-on-surface min-h-screen">
      {/* Header */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-16 pb-8">
        <div className="text-center flex flex-col items-center">
          <h1 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg uppercase tracking-widest text-primary mb-4">
            PRIVACY POLICY
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
            At OFF SELF, your privacy is important to us. This Privacy Policy
            explains how we collect, use, and protect your personal information
            when you visit our website and use our services.
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
            Questions about your privacy? Our team is here to help.
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

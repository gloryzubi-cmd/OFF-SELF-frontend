import { Link } from "react-router";
import { productLink } from "../utils/slugs";

export default function About() {
  return (
    <div className="flex flex-col w-full bg-cream text-on-surface min-h-screen">
      {/* HERO SECTION */}
      <section className="w-full relative h-[70vh] min-h-[600px] flex items-end justify-center pb-margin-desktop">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaeyoCAnomCEfoAg4Nlpi2Qkthq1dmc4Z63qFI6ih4eMyicnaeK4sSUF_bEeUo-q1mwowgY0PzPz1aKpc9PxALbO1JwdTih3UF76RJAPPC3KiuTzIlcFFOBna2Jd6cFZrUUMPq00Ph7tcixf0QfWeACqLdMe-eLgatGK4pRH-68E3VKNSwfE4kRQBgVtajTlTNtU6DE-sbXf6EFtYsra9JJFwCsOyr_PMTdZkiwJ8c6f4FU7tHKpPQ"
            alt="OFF SELF hero"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center flex flex-col items-center gap-6 px-margin-mobile">
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-widest">
            ABOUT OFF SELF
          </h1>
          <p className="font-body-lg text-body-lg uppercase tracking-widest text-on-surface-variant max-w-lg mx-auto">
            For those who choose their own style.
          </p>
        </div>
      </section>

      {/* BRAND INTRO */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-section-gap">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-12">
          <h2 className="font-headline-lg text-headline-md tracking-widest uppercase text-primary animate-fade-up" style={{ animationDelay: '0ms' }}>
            OFF SELF
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed animate-fade-up" style={{ animationDelay: '150ms' }}>
            OFF SELF is a contemporary accessories brand built around
            individuality. We curate selected pieces for people who choose their
            own direction—pieces that complement the way you dress, think, and
            move.
          </p>
        </div>
      </section>        {/* PHILOSOPHY ASYMMETRICAL SPREAD */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-section-gap border-t border-outline-variant/30">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 md:col-start-2 order-2 md:order-1 flex flex-col gap-8">
            <h2 className="font-headline-lg text-headline-lg md:text-headline-lg leading-none uppercase text-primary">
              OWN
              <br />
              YOUR
              <br />
              LOOK.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              Off Self exists for those who don&apos;t follow the obvious. We
              believe personal style is not about fitting into a category—it is
              about knowing what feels like you.
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8 order-1 md:order-2 mb-12 md:mb-0 relative">
            <div className="aspect-[3/4] bg-surface-container-low w-full overflow-hidden relative">
              <img
                alt="Avant-garde OFF SELF clogs"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AEtjO1UesTT-_C2xNWVidNp5Hf90WyUpgLgMZV4VrekPBhGyGKukB2bWnTYwdYiQCxum9pPs5jcErpMQS47npXf5CpVVKUskBr00vvKXyjr33AGY0dQKg8jTSYZ2cSvKdZh5a268uddHqj947gG1ceVEUqrObUWZNQjykcH742MOh1FG72yyxKmOGIX5Vox96hR2pxC7csBRGKZrm5ZLmSAHN1G2GrAZ2kwvrsxE83LxNntfiPRaGG-Db2MiX_c"
              />
            </div>
          </div>
        </div>
      </section>

      {/* THE EDIT */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-section-gap">
        <div className="flex flex-col md:flex-row gap-gutter mb-24 items-end">
          <h2 className="font-headline-lg text-headline-lg uppercase md:w-1/2 text-primary">
            THE EDIT
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant md:w-1/2 max-w-lg">
            We select pieces with intention—accessories that can stand alone,
            complete a look, or quietly change the way it feels.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Item 1 */}
          <Link
            to={productLink('Amber Architectural Shades', 'https://lh3.googleusercontent.com/aida/AEtjO1U8CJ_bPNVWHvJFAf35z7G4CashgxqFpESsjy5KMw7o3WG0ReWnONdupTH1NrF_7c7d_CBNj9SAe4ZyuzZ3DWhqiValhjWIiptiW5Kgu1TL5_-pX7vn774WUldXmiXONR5-0iv1B7gUY2sf--q20G5cXFe3YTtVsroQOlbSVYw9OmuEx-fHIq2fejXEDzWPHqHE01NUEi0o2OvM_MNxBXL4_YLkjb7fns7tD1xlfoVCWvPIbjKc_e-05iA')}
            className="flex flex-col group cursor-pointer"
          >
            <div className="aspect-square bg-surface-container-low overflow-hidden mb-6">
              <img
                alt="Amber architectural frames"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/AEtjO1U8CJ_bPNVWHvJFAf35z7G4CashgxqFpESsjy5KMw7o3WG0ReWnONdupTH1NrF_7c7d_CBNj9SAe4ZyuzZ3DWhqiValhjWIiptiW5Kgu1TL5_-pX7vn774WUldXmiXONR5-0iv1B7gUY2sf--q20G5cXFe3YTtVsroQOlbSVYw9OmuEx-fHIq2fejXEDzWPHqHE01NUEi0o2OvM_MNxBXL4_YLkjb7fns7tD1xlfoVCWvPIbjKc_e-05iA"
              />
            </div>
            <h3 className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-2 group-hover:text-primary transition-colors">
              Eyewear
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Architectural clarity.
            </p>
          </Link>
          {/* Item 2 */}
          <Link
            to={productLink('Emerald Green Gold Watch', 'https://lh3.googleusercontent.com/aida/AEtjO1WIXGr7PLxj8iuo0vRfhPUGw9MvNv-HGKqQDeVDAD3iFywR8rlMdpLMzvNtETPCedG--obV3WHjnkVVBDw95K28EWTn3FVl1qpVZtGSnBPPAt8siB0444uRgXoudIbdhGbagHqCh2vtYJ-X6wOxgd9bQ_ANPETxkIGk-uFZ6VM92tJEmrZTyVD50GK-ur5knVsIO5V9rCn1Fekq7x6AKCxGm7Ao9ZeeHiCIFyN3VwYpGCMvUP-j08s7CiM')}
            className="flex flex-col group cursor-pointer mt-0 md:mt-12"
          >
            <div className="aspect-square bg-surface-container-low overflow-hidden mb-6">
              <img
                alt="Burgundy strap wristwatch"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/AEtjO1WIXGr7PLxj8iuo0vRfhPUGw9MvNv-HGKqQDeVDAD3iFywR8rlMdpLMzvNtETPCedG--obV3WHjnkVVBDw95K28EWTn3FVl1qpVZtGSnBPPAt8siB0444uRgXoudIbdhGbagHqCh2vtYJ-X6wOxgd9bQ_ANPETxkIGk-uFZ6VM92tJEmrZTyVD50GK-ur5knVsIO5V9rCn1Fekq7x6AKCxGm7Ao9ZeeHiCIFyN3VwYpGCMvUP-j08s7CiM"
              />
            </div>
            <h3 className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-2 group-hover:text-primary transition-colors">
              Timepieces
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Precision curated.
            </p>
          </Link>
          {/* Item 3 */}
          <Link
            to={productLink('Cobalt Hex Watch', 'https://lh3.googleusercontent.com/aida/AEtjO1XFoPERAkJ25gYFFd3y3Ssz1ACevjG5KqYuZctuAUuDed_B2y4bbEJF75ZEMPB7SbUkpwjNno9OlZC2k2uuDAxNttrI_D54WF-ecFxqaQZavfK5F9ll2-3xfiqH98SqdrtFe7wuAzBrDGYpaMEx4Djp27CqMQCnJksFs5Gj0RhNYr3_wV4ZuIFblMAujmWfDNLZcKlx3C5Rm0cqW7xRA43ftVKnzg_cd-yN3rrMO8D03jg1mlcQnXne7_w')}
            className="flex flex-col group cursor-pointer mt-0 lg:mt-24"
          >
            <div className="aspect-square bg-surface-container-low overflow-hidden mb-6">
              <img
                alt="Sculptural metallic watch"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/AEtjO1XFoPERAkJ25gYFFd3y3Ssz1ACevjG5KqYuZctuAUuDed_B2y4bbEJF75ZEMPB7SbUkpwjNno9OlZC2k2uuDAxNttrI_D54WF-ecFxqaQZavfK5F9ll2-3xfiqH98SqdrtFe7wuAzBrDGYpaMEx4Djp27CqMQCnJksFs5Gj0RhNYr3_wV4ZuIFblMAujmWfDNLZcKlx3C5Rm0cqW7xRA43ftVKnzg_cd-yN3rrMO8D03jg1mlcQnXne7_w"
              />
            </div>
            <h3 className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-2 group-hover:text-primary transition-colors">
              Signature
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Unexpected forms.
            </p>
          </Link>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="relative w-full bg-primary text-on-primary py-section-gap mt-section-gap overflow-hidden">
        {/* Decorative diagonal lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
            <path d="M0,100 L100,0" fill="none" stroke="currentColor" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
            <path d="M10,100 L100,10" fill="none" stroke="currentColor" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
            <path d="M20,100 L100,20" fill="none" stroke="currentColor" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="w-16 h-px bg-on-primary/50 mb-10" />
          <div className="text-center flex flex-col items-center gap-4 mb-16">
            <span className="font-label-caps text-label-caps tracking-[0.2em] uppercase text-on-primary/50">
              THE EDIT
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-none uppercase">
              PHILOSOPHY
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-gutter divide-y md:divide-y-0 md:divide-x divide-on-primary/20">
            <div className="flex flex-col gap-6 pt-12 md:pt-0 md:pr-gutter">
              <span className="font-label-caps text-label-caps text-on-primary/50">
                01
              </span>
              <h3 className="font-headline-md text-headline-md uppercase">
                INDIVIDUALITY
              </h3>
              <p className="font-body-md text-body-md text-on-primary/80">
                Style should feel personal, not prescribed.
              </p>
            </div>
            <div className="flex flex-col gap-6 pt-12 md:pt-0 md:px-gutter">
              <span className="font-label-caps text-label-caps text-on-primary/50">
                02
              </span>
              <h3 className="font-headline-md text-headline-md uppercase">
                INTENTION
              </h3>
              <p className="font-body-md text-body-md text-on-primary/80">
                Every selected piece should have a reason to be there.
              </p>
            </div>
            <div className="flex flex-col gap-6 pt-12 md:pt-0 md:pl-gutter">
              <span className="font-label-caps text-label-caps text-on-primary/50">
                03
              </span>
              <h3 className="font-headline-md text-headline-md uppercase">
                EXPRESSION
              </h3>
              <p className="font-body-md text-body-md text-on-primary/80">
                The smallest detail can change the entire way a look feels.
              </p>
            </div>
          </div>
          <div className="w-16 h-px bg-on-primary/50 mt-16" />
        </div>
      </section>

      {/* CLOSING */}
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
          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </Link>
      </section>
    </div>
  );
}

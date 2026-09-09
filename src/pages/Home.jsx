import { Link } from 'react-router'
import { useCart } from '../context/cartUtils'
import { productLink } from '../utils/slugs'

const EDIT_PRODUCTS = [
  {
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop',
    alt: 'Statement Necklace',
    category: 'NECKLACE',
    name: 'Geometric Chrome Necklace',
    price: '$450',
  },
  {
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=750&fit=crop',
    alt: 'Luxury Wristwatch',
    category: 'WATCH',
    name: 'Hexagonal Burgundy Watch',
    price: '$1,200',
  },
  {
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop',
    alt: 'Textured Silver Rings',
    category: 'RINGS',
    name: 'Textured Cobalt Ring Set',
    price: '$280',
  },
  {
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=750&fit=crop',
    alt: 'Avant-garde Sunglasses',
    category: 'EYEWEAR',
    name: 'Amber Architectural Shades',
    price: '$320',
  },
]

function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] -mt-20 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/60" />
      </div>
      <div className="relative z-10 flex flex-col px-6 mt-20 w-full">
        <div className="w-full flex flex-col items-start text-left px-margin-mobile lg:px-margin-desktop">
          <div className="mb-12">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-display-lg text-on-primary mb-2 drop-shadow-lg tracking-wide uppercase font-bold leading-none">
              OFF SELF
            </h1>
            <p className="font-label-caps text-label-caps text-on-primary font-bold tracking-widest">
              WEAR WHAT FEELS LIKE YOU
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/shop-the-edit"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-caps text-label-caps hover:bg-primary-container transition-colors duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                SHOP THE EDIT
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </span>
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border border-on-primary text-on-primary font-label-caps text-label-caps hover:bg-on-primary hover:text-primary transition-colors duration-300"
            >
              DISCOVER OFF SELF
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function TheEdit() {
  const { addItem } = useCart()

  return (
    <section
      className="py-section-gap px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full"
      id="shop-edit"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary mb-4">
            THE EDIT.
          </h2>
          <p className="font-body-md text-on-surface-variant">
            Pieces selected for their distinctive character and unconventional
            design.
          </p>
        </div>
        <Link
          to="/shop-the-edit"
          className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 hover:text-surface-tint transition-colors inline-flex self-start md:self-end"
        >
          VIEW FULL COLLECTION
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-gutter">
        {EDIT_PRODUCTS.map((product) => (
          <Link
            key={product.name}
            to={productLink(product.name, product.image, product.price)}
            className="group flex flex-col relative bg-surface-container-lowest"
          >
            <div className="relative aspect-square overflow-hidden mb-4 bg-surface-container-low">
              <img
                alt={product.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src={product.image}
              />
              <div className="absolute top-4 left-4 border border-outline px-2 py-1 font-label-caps text-[10px] bg-surface/80 backdrop-blur-sm text-primary">
                {product.category}
              </div>
            </div>
            <div className="flex flex-col flex-grow justify-between px-2 pb-4">
              <div>
                <h3 className="font-body-md text-primary mb-1 group-hover:text-on-surface-variant transition-colors">
                  {product.name}
                </h3>
                <span className="font-label-caps text-on-surface-variant">
                  {product.price}
                </span>
              </div>
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItem(product); }}
                className="mt-3 md:mt-6 w-full py-2 md:py-3 border border-primary text-primary font-label-caps text-[10px] hover:bg-primary hover:text-on-primary transition-colors duration-300"
              >
                ADD TO BAG
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function NewInBestSellers() {
  return (
    <section className="py-section-gap px-margin-mobile lg:px-margin-desktop max-w-container-max mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-center">
        {/* New In */}
        <div className="lg:col-span-7 flex flex-col relative overflow-hidden">
          <div className="absolute -top-10 -left-6 md:-left-12 opacity-5 font-headline-lg text-[120px] leading-none pointer-events-none">
            Nº1
          </div>
          <div className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden">
            <img
              alt="Editorial New In"
              className="w-full h-full object-cover object-top transition-all duration-1000"
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&h=1200&fit=crop"
            />
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-primary/80 to-transparent flex flex-col items-start">
              <h2 className="font-headline-lg text-headline-md text-on-primary mb-2 drop-shadow-md">
                NEW IN.
              </h2>
              <p className="font-body-md text-on-primary/90 mb-6 drop-shadow-md max-w-md">
                Discover the latest arrivals redefining modern luxury.
              </p>
              <Link
                to="/new-in"
                className="px-6 py-3 bg-surface-container-lowest text-primary font-label-caps text-[12px] hover:bg-primary-container hover:text-on-primary transition-colors duration-300 shadow-lg"
              >
                VIEW ALL NEW
              </Link>
            </div>
          </div>
        </div>

        {/* Best Sellers */}
        <div className="lg:col-span-5 flex flex-col gap-12">
          <div className="flex flex-col">
            <h2 className="font-headline-lg text-headline-md text-primary mb-2">
              BEST SELLERS.
            </h2>
            <p className="font-body-md text-on-surface-variant mb-8">
              Icons of the Off Self collection. Proven distinctive character.
            </p>
            <div
              className="group relative w-full aspect-square bg-surface-container overflow-hidden mb-6 block cursor-pointer"
            >
              <img
                alt="Sculptural Gold Ring"
                className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&h=900&fit=crop"
              />
              <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 font-label-caps text-[10px]">
                #1 ICON
              </div>
            </div>

            <div className="flex justify-between items-center pb-4 border-b border-outline-variant">
              <div className="flex flex-col">
                <span className="font-body-md text-primary">
                  Sculptural Ivory Inlay Ring
                </span>
                <span className="font-label-caps text-on-surface-variant mt-1">
                  $680
                </span>
              </div>
            </div>
            <Link
              to="/bestsellers"
              className="group inline-flex items-center gap-2 mt-8 font-label-caps text-label-caps text-primary hover:text-surface-tint transition-colors"
            >
              SHOP BEST SELLERS
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function EditorialCTA() {
  return (
    <section className="relative w-full py-section-gap overflow-hidden bg-primary text-on-primary flex items-center justify-center min-h-[60vh]">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
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
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        <div className="w-16 h-px bg-on-primary/50 mb-10" />
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 leading-tight">
          YOUR STYLE.
          <br />
          YOUR RULES.
        </h2>
        <p className="font-body-lg text-body-lg text-on-primary/80 mb-12 max-w-xl">
          Off Self exists for those who don't dress, think, or move by the rules.
          We select distinctive pieces to suit your own personal style.
        </p>
        <Link
          to="/about"
          className="px-8 py-4 border border-on-primary text-on-primary font-label-caps text-label-caps hover:bg-on-primary hover:text-primary transition-colors duration-300"
        >
          DISCOVER OFF SELF
        </Link>
        <div className="w-16 h-px bg-on-primary/50 mt-16" />
      </div>
    </section>
  )
}

function Home() {
  return (
    <div className="flex flex-col w-full bg-cream text-on-surface">
      <Hero />
      <TheEdit />
      <NewInBestSellers />
      <EditorialCTA />
    </div>
  )
}

export default Home

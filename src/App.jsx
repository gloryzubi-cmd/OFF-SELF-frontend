import { useEffect } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import { useCart } from './context/cartUtils'
import Home from './pages/Home.jsx'
import ShopTheEdit from './pages/ShopTheEdit.jsx'
import ProductPage from './pages/ProductPage.jsx'
import NewIn from './pages/NewIn.jsx'
import Bestsellers from './pages/Bestsellers.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import FAQ from './pages/FAQ.jsx'
import Jewelry from './pages/Jewelry.jsx'
import Watches from './pages/Watches.jsx'
import Eyewear from './pages/Eyewear.jsx'
import Headwear from './pages/Headwear.jsx'
import Footwear from './pages/Footwear.jsx'
import Accessories from './pages/Accessories.jsx'
import CategoryGenderPage from './pages/CategoryGenderPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const saved = sessionStorage.getItem('scrollRestore')
    if (saved) {
      sessionStorage.removeItem('scrollRestore')
      const pos = JSON.parse(saved)
      window.scrollTo({ top: pos.y, left: pos.x, behavior: 'instant' })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname])

  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="w-full pt-20 overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
      <CartDrawerWrapper />
    </>
  )
}

function CartDrawerWrapper() {
  const { isOpen } = useCart()
  if (!isOpen) return null
  return <CartDrawer />
}

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop-the-edit" element={<ShopTheEdit />} />
          <Route path="new-in" element={<NewIn />} />
          <Route path="bestsellers" element={<Bestsellers />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="jewelry" element={<Jewelry />} />
          <Route path="watches" element={<Watches />} />
          <Route path="eyewear" element={<Eyewear />} />
          <Route path="headwear" element={<Headwear />} />
          <Route path="footwear" element={<Footwear />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="category/:category/:gender" element={<CategoryGenderPage />} />
          <Route path="product/:slug" element={<ProductPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<LoginPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      </FavoritesProvider>
    </CartProvider>
  )
}

export default App

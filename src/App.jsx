import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import SearchModal from './components/SearchModal';
import AppointmentModal from './components/AppointmentModal';
import SizeGuideModal from './components/SizeGuideModal';
import QuickViewModal from './components/QuickViewModal';
import ToastNotification from './components/ToastNotification';
import { SparklesIcon } from './components/CoutureIcons';

// Pages
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import NewArrivalsPage from './pages/NewArrivalsPage';
import WomenPage from './pages/WomenPage';
import MenPage from './pages/MenPage';
import CollectionsPage from './pages/CollectionsPage';
import JewelleryPage from './pages/JewelleryPage';
import StarsOfDilnashiPage from './pages/StarsOfDilnashiPage';
import DilnashiVowsPage from './pages/DilnashiVowsPage';
import RunwaysPage from './pages/RunwaysPage';
import AboutUsPage from './pages/AboutUsPage';
import VirtualTryOnPage from './pages/VirtualTryOnPage';
import CollectionDetailPage from './pages/CollectionDetailPage';
import OccasionPage from './pages/OccasionPage';
import CategoryPage from './pages/CategoryPage';

import { ALL_PRODUCTS } from './data/coutureData';

export default function App() {
  // Navigation Routing State
  const [currentPath, setCurrentPath] = useState('/');
  const [activeUniverse, setActiveUniverse] = useState('COUTURE');

  // Modals & Slide-overs
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toastNotice, setToastNotice] = useState({ visible: false, message: '' });

  const triggerToast = (message) => {
    setToastNotice({ visible: true, message });
    setTimeout(() => {
      setToastNotice({ visible: false, message: '' });
    }, 3200);
  };

  // Cart State (Pre-populated with Screenshot 4 item for instant demo)
  const [cartItems, setCartItems] = useState([
    {
      id: 'dusty-pink-fishbone-mijwan',
      name: 'Dusty Pink Fishbone Mijwan Pant Suit Set',
      collection: 'MIJWAN 2026',
      price: 560000,
      priceFormatted: '₹560,000',
      size: 'CUSTOM SIZE',
      color: 'Dusty Pink',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=85',
    },
  ]);

  // Wishlist State
  const [wishlistItems, setWishlistItems] = useState([
    ALL_PRODUCTS.find((p) => p.id === 'royal-uncut-diamond-polki-choker') || ALL_PRODUCTS[8],
  ]);

  // Handle URL hash changes or internal navigate
  const navigate = (path) => {
    setCurrentPath(path);
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      setCurrentPath(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Cart Handlers
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.size === product.size
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          collection: product.collection,
          price: product.price,
          priceFormatted: product.priceFormatted,
          size: product.size || 'CUSTOM SIZE',
          color: product.color || 'Standard',
          quantity: product.quantity || 1,
          image: product.image || (product.images && product.images[0]),
        },
      ];
    });
    triggerToast(`Added "${product.name}" to your shopping bag.`);
    setCartOpen(true);
  };

  const handleUpdateCartQty = (id, size, qty) => {
    if (qty <= 0) {
      handleRemoveCartItem(id, size);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: qty }
          : item
      )
    );
  };

  const handleRemoveCartItem = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        triggerToast(`Removed "${product.name}" from your wishlist.`);
        return prev.filter((item) => item.id !== product.id);
      } else {
        triggerToast(`Saved "${product.name}" to your wishlist.`);
        return [...prev, product];
      }
    });
  };

  const isWishlisted = (id) => wishlistItems.some((item) => item.id === id);

  const handleRemoveWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate totals
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalWishlistCount = wishlistItems.length;

  // Route Dispatcher
  const renderCurrentPage = () => {
    const cleanPath = currentPath.split('?')[0];

    // PDP Route: /product/:id
    if (cleanPath.startsWith('/product/')) {
      const id = cleanPath.replace('/product/', '');
      return (
        <ProductDetailPage
          productId={id}
          navigate={navigate}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={isWishlisted}
          onOpenSizeGuide={() => setSizeGuideOpen(true)}
        />
      );
    }

    // Collection Route: /collection/:slug
    if (cleanPath.startsWith('/collection/')) {
      const slug = cleanPath.replace('/collection/', '');
      return (
        <CollectionDetailPage
          collectionSlug={slug}
          navigate={navigate}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={isWishlisted}
          onQuickView={(prod) => setQuickViewProduct(prod)}
        />
      );
    }

    // Occasion Route: /occasion/:slug
    if (cleanPath.startsWith('/occasion/')) {
      const slug = cleanPath.replace('/occasion/', '');
      return (
        <OccasionPage
          occasionSlug={slug}
          navigate={navigate}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={isWishlisted}
          onQuickView={(prod) => setQuickViewProduct(prod)}
        />
      );
    }

    // Category Route: /category/:slug
    if (cleanPath.startsWith('/category/')) {
      const slug = cleanPath.replace('/category/', '');
      return (
        <CategoryPage
          categorySlug={slug}
          navigate={navigate}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={isWishlisted}
          onQuickView={(prod) => setQuickViewProduct(prod)}
        />
      );
    }

    switch (cleanPath) {
      case '/virtual-try-on':
        return (
          <VirtualTryOnPage
            navigate={navigate}
            onAddToCart={handleAddToCart}
            onOpenAppointment={() => setAppointmentOpen(true)}
          />
        );

      case '/new-arrivals':
        return (
          <NewArrivalsPage
            navigate={navigate}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
          />
        );

      case '/women':
        return (
          <WomenPage
            navigate={navigate}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
          />
        );

      case '/men':
        return (
          <MenPage
            navigate={navigate}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
          />
        );

      case '/collections':
        return <CollectionsPage navigate={navigate} />;

      case '/jewellery':
        return (
          <JewelleryPage
            navigate={navigate}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
            onOpenAppointment={() => setAppointmentOpen(true)}
            onAddToCart={handleAddToCart}
            onQuickView={(prod) => setQuickViewProduct(prod)}
          />
        );

      case '/stars':
        return <StarsOfDilnashiPage navigate={navigate} />;

      case '/vows':
        return (
          <DilnashiVowsPage
            navigate={navigate}
            onOpenAppointment={() => setAppointmentOpen(true)}
          />
        );

      case '/runways':
        return <RunwaysPage navigate={navigate} />;

      case '/about':
        return (
          <AboutUsPage
            onOpenAppointment={() => setAppointmentOpen(true)}
          />
        );

      case '/':
      default:
        return (
          <HomePage
            navigate={navigate}
            onOpenAppointment={() => setAppointmentOpen(true)}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
            onQuickView={(prod) => setQuickViewProduct(prod)}
          />
        );
    }
  };

  return (
    <div className="dilnashi-application">
      {/* Universal Header with Mega Menus */}
      <Navbar
        currentPath={currentPath}
        navigate={navigate}
        activeUniverse={activeUniverse}
        setActiveUniverse={setActiveUniverse}
        wishlistCount={totalWishlistCount}
        cartCount={totalCartCount}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenAppointment={() => setAppointmentOpen(true)}
      />

      {/* Main Page View */}
      <main className="main-content-flow">{renderCurrentPage()}</main>

      {/* Universal Footer */}
      <Footer navigate={navigate} />

      {/* Slide-over Drawers & Modals */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        navigate={navigate}
      />

      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveWishlist={handleRemoveWishlist}
        onAddToCart={handleAddToCart}
        navigate={navigate}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        navigate={navigate}
      />

      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />

      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />

      {/* Interactive Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={isWishlisted}
        navigate={navigate}
      />

      {/* Floating Gold Toast Notification */}
      <ToastNotification
        message={toastNotice.message}
        visible={toastNotice.visible}
      />

      {/* Floating VIP Atelier Concierge Button */}
      <button
        className="floating-vip-btn"
        onClick={() => setAppointmentOpen(true)}
        title="Book VIP Atelier Salon Appointment"
        aria-label="VIP Concierge"
      >
        <SparklesIcon size={16} color="var(--gold-bright)" />
        <span>VIP Concierge</span>
      </button>
    </div>
  );
}

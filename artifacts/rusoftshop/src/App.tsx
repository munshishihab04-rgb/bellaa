import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ShopifyProvider, CartProvider } from "@shopify/hydrogen-react";
import { CartUIProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import HomePage from "@/pages/home";
import CatalogPage from "@/pages/catalog";
import CategoryPage from "@/pages/catalog-category";
import ProductPage from "@/pages/product";
import CartPage from "@/pages/cart";
import BlogPage from "@/pages/blog";
import ContactsPage from "@/pages/contacts";
import FAQPage from "@/pages/faq";
import DownloadPage from "@/pages/download";
import PaymentPage from "@/pages/payment";
import ReturnPage from "@/pages/return";
import ReviewsPage from "@/pages/reviews";
import WholesalePage from "@/pages/wholesale";
import WorkPage from "@/pages/work";
import PrivacyPage from "@/pages/privacy";
import TermsPage from "@/pages/terms";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const STORE_DOMAIN = (import.meta.env.VITE_SHOPIFY_STORE_DOMAIN as string) || 'licenvo.myshopify.com';
const STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN as string;

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/catalog" component={CatalogPage} />
      <Route path="/catalog/:slug" component={CategoryPage} />
      <Route path="/product/:slug" component={ProductPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/contacts" component={ContactsPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/download" component={DownloadPage} />
      <Route path="/payment" component={PaymentPage} />
      <Route path="/return" component={ReturnPage} />
      <Route path="/reviews" component={ReviewsPage} />
      <Route path="/wholesale" component={WholesalePage} />
      <Route path="/work" component={WorkPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ShopifyProvider
      storeDomain={STORE_DOMAIN}
      storefrontToken={STOREFRONT_TOKEN}
      storefrontApiVersion="2026-04"
      countryIsoCode="IT"
      languageIsoCode="IT"
    >
      <CartProvider>
        <CartUIProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
                <Router />
                <CartDrawer />
              </WouterRouter>
              <Toaster />
            </TooltipProvider>
          </QueryClientProvider>
        </CartUIProvider>
      </CartProvider>
    </ShopifyProvider>
  );
}

export default App;

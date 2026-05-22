const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN as string;
const SHOPIFY_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN as string;
const API_URL = `https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`;

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`Shopify API error: ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0]?.message ?? 'Shopify GraphQL error');
  return json.data as T;
}

export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  descriptionHtml: string;
  description: string;
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
  };
  compareAtPriceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
  };
  images: { edges: { node: { url: string; altText: string | null } }[] };
  metafields: ({ key: string; value: string; namespace: string } | null)[];
  variants: {
    edges: {
      node: {
        id: string;
        title: string;
        price: { amount: string; currencyCode: string };
        compareAtPrice: { amount: string; currencyCode: string } | null;
        availableForSale: boolean;
      };
    }[];
  };
  tags: string[];
  vendor: string;
}

const PRODUCT_FRAGMENT = `
  id
  handle
  title
  description
  descriptionHtml
  vendor
  tags
  priceRange { minVariantPrice { amount currencyCode } }
  compareAtPriceRange { minVariantPrice { amount currencyCode } }
  images(first: 10) { edges { node { url altText } } }
  variants(first: 20) {
    edges {
      node {
        id title
        price { amount currencyCode }
        compareAtPrice { amount currencyCode }
        availableForSale
      }
    }
  }
  metafields(identifiers: [
    { namespace: "custom", key: "caratteristiche" },
    { namespace: "custom", key: "requisiti_sistema" },
    { namespace: "custom", key: "piattaforme" },
    { namespace: "custom", key: "cosa_ricevi" },
    { namespace: "custom", key: "brand_logo" },
    { namespace: "custom", key: "faq" }
  ]) { key value namespace }
`;

export async function getProduct(handle: string): Promise<ShopifyProduct | null> {
  try {
    const data = await shopifyFetch<{ product: ShopifyProduct | null }>(`
      query GetProduct($handle: String!) {
        product(handle: $handle) { ${PRODUCT_FRAGMENT} }
      }
    `, { handle });
    return data.product;
  } catch (e) {
    console.error('Shopify getProduct error:', e);
    return null;
  }
}

export async function getProducts(first = 20): Promise<ShopifyProduct[]> {
  try {
    const data = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(`
      query GetProducts($first: Int!) {
        products(first: $first, sortKey: BEST_SELLING) {
          edges { node { ${PRODUCT_FRAGMENT} } }
        }
      }
    `, { first });
    return data.products.edges.map(e => e.node);
  } catch (e) {
    console.error('Shopify getProducts error:', e);
    return [];
  }
}

export async function getProductsByCollection(handle: string, first = 20): Promise<ShopifyProduct[]> {
  try {
    const data = await shopifyFetch<{ collection: { products: { edges: { node: ShopifyProduct }[] } } | null }>(`
      query GetCollection($handle: String!, $first: Int!) {
        collection(handle: $handle) {
          products(first: $first) {
            edges { node { ${PRODUCT_FRAGMENT} } }
          }
        }
      }
    `, { handle, first });
    return data.collection?.products.edges.map(e => e.node) ?? [];
  } catch (e) {
    console.error('Shopify getProductsByCollection error:', e);
    return [];
  }
}

export function buildCheckoutUrl(variantId: string, quantity = 1): string {
  const encodedVariant = btoa(variantId);
  return `https://${SHOPIFY_DOMAIN}/cart/${encodedVariant}:${quantity}?storefront=true`;
}

export function parsePrice(amount: string): number {
  return Math.round(parseFloat(amount));
}

export function formatPrice(amount: string): string {
  return `${parsePrice(amount).toLocaleString('it-IT')} €`;
}

export function getDiscount(price: string, compareAt: string | null | undefined): number {
  if (!compareAt) return 0;
  const p = parseFloat(price);
  const c = parseFloat(compareAt);
  if (c <= p) return 0;
  return Math.round(((c - p) / c) * 100);
}

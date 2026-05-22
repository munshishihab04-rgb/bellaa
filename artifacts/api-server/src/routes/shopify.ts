import { Router } from 'express';

const router = Router();

const SHOPIFY_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || 'licenvo.myshopify.com';
const PRIVATE_TOKEN = process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN || '';
const PUBLIC_TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN || '';
const API_VERSION = '2026-04';

router.post('/shopify/graphql', async (req, res) => {
  const token = PRIVATE_TOKEN || PUBLIC_TOKEN;
  if (!token) {
    res.status(500).json({ error: 'Shopify token not configured' });
    return;
  }
  try {
    const upstream = await fetch(
      `https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': token,
        },
        body: JSON.stringify(req.body),
      }
    );
    const data = await upstream.json();
    res.status(upstream.status).json(data);
  } catch (err) {
    res.status(502).json({ error: 'Upstream Shopify error' });
  }
});

router.post('/shopify/customer/token', async (req, res) => {
  const { code, redirectUri, codeVerifier } = req.body;
  const clientId = process.env.SHOPIFY_CUSTOMER_API_CLIENT_ID || '';
  if (!clientId) {
    res.status(500).json({ error: 'Customer API client ID not configured' });
    return;
  }
  try {
    const tokenRes = await fetch(
      `https://shopify.com/authentication/104962687317/oauth/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: clientId,
          redirect_uri: redirectUri,
          code,
          code_verifier: codeVerifier,
        }),
      }
    );
    const data = await tokenRes.json();
    res.status(tokenRes.status).json(data);
  } catch {
    res.status(502).json({ error: 'Customer token exchange failed' });
  }
});

export default router;

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();
const PORT = 8080;

app.use(helmet());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,                
  message: { error: 'Too many requests from this IP, please try again later' }
});
app.use('/api/', apiLimiter);

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

const serviceRegistry = {
  userService: 'http://localhost:3001',
  productService: 'http://localhost:3002',
  orderService: 'http://localhost:3003'
};

const handleProxyError = (err, req, res) => {
  console.error('Proxy Error:', err.message);
  res.status(503).json({ error: 'Service temporarily unavailable' });
};

const userServiceProxy = createProxyMiddleware({
  target: serviceRegistry.userService,
  changeOrigin: true,
  pathRewrite: { '^/api/users': '/users' },
  onError: handleProxyError
});

const productServiceProxy = createProxyMiddleware({
  target: serviceRegistry.productService,
  changeOrigin: true,
  pathRewrite: { '^/api/products': '/products' },
  onError: handleProxyError
});

const orderServiceProxy = createProxyMiddleware({
  target: serviceRegistry.orderService,
  changeOrigin: true,
  pathRewrite: { '^/api/orders': '/orders' },
  onError: handleProxyError
});

app.use('/api/users', authenticate, userServiceProxy);
app.use('/api/products', productServiceProxy);
app.use('/api/orders', authenticate, orderServiceProxy);

app.use((req, res) => res.status(404).json({ error: 'Route not found' })); 
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
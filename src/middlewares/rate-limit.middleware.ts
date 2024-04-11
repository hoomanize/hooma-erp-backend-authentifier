import rateLimit from 'express-rate-limit'

export const addRateLimitingMiddleware = (app, routes) => {
  routes.forEach((route) => {
    app.use(route.url, rateLimit(route.rateLimit))
  })
}

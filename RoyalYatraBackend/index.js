const crypto = require('node:crypto')
const fs = require('node:fs/promises')
const path = require('node:path')
const cors = require('cors')
require('dotenv').config()
const express = require('express')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')

const app = express()
const port = Number(process.env.PORT) || 5000
const enquiryDataDirectory = path.resolve(process.env.ENQUIRY_DATA_DIR || path.join(__dirname, 'data'))
const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

const packages = [
  {
    id: 'golden-triangle',
    name: 'The Golden Triangle, Unhurried',
    region: 'Delhi · Agra · Jaipur',
    duration: '6 days · 5 nights',
    rating: '4.9',
    price: 54900,
    tag: 'GUEST FAVOURITE',
    summary: 'Three iconic cities, with time for the lovely little detours.',
    image: 'photo-1564507592333-c60657eea523',
  },
  {
    id: 'kerala-slow-days',
    name: "Kerala, at the Water's Edge",
    region: 'Kochi · Munnar · Alleppey',
    duration: '7 days · 6 nights',
    rating: '4.9',
    price: 62800,
    tag: 'SLOW TRAVEL',
    summary: 'Tea-scented hills, a houseboat night and nowhere to hurry.',
    image: 'photo-1602216056096-3b40cc0c9944',
  },
  {
    id: 'rajasthan-royal-trail',
    name: 'A Royal Rajasthan Trail',
    region: 'Jaipur · Jodhpur · Udaipur',
    duration: '8 days · 7 nights',
    rating: '4.8',
    price: 78600,
    tag: 'CULTURE & HERITAGE',
    summary: 'Colourful bazaars, old forts and evenings worth lingering over.',
    image: 'photo-1477587458883-47145ed94245',
  },
  {
    id: 'himachal-mountain-air',
    name: 'A Breath of Mountain Air',
    region: 'Himachal · Shimla · Manali',
    duration: '6 days · 5 nights',
    rating: '4.8',
    price: 48900,
    tag: 'MOUNTAIN ESCAPE',
    summary: 'Pine-scented walks, cosy stays and the long way around.',
    image: 'photo-1626621341517-bbf3d9990a23',
  },
]

app.disable('x-powered-by')
app.use(helmet())
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true)
    return callback(new Error('Origin is not allowed by CORS'))
  },
}))
app.use(express.json({ limit: '10kb' }))
app.use('/api', rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
}))

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'royalyatra-api' })
})

app.get('/api/packages', (_request, response) => {
  response.json({ data: packages })
})

app.post('/api/enquiries', rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
}), async (request, response, next) => {
  const { name, email, phone, destination, message } = request.body || {}
  const enquiry = {
    name: typeof name === 'string' ? name.trim() : '',
    email: typeof email === 'string' ? email.trim().toLowerCase() : '',
    phone: typeof phone === 'string' ? phone.trim() : '',
    destination: typeof destination === 'string' ? destination.trim() : '',
    message: typeof message === 'string' ? message.trim() : '',
  }
  const errors = {}

  if (enquiry.name.length < 2 || enquiry.name.length > 80) errors.name = 'Enter a name between 2 and 80 characters.'
  if (enquiry.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) errors.email = 'Enter a valid email address.'
  if (enquiry.phone.length > 24 || (enquiry.phone && !/^[+()\d\s.-]{7,24}$/.test(enquiry.phone))) errors.phone = 'Enter a valid phone number.'
  if (enquiry.destination.length > 100) errors.destination = 'Destination must be 100 characters or fewer.'
  if (enquiry.message.length < 10 || enquiry.message.length > 2000) errors.message = 'Tell us a little more in 10 to 2,000 characters.'

  if (Object.keys(errors).length) {
    return response.status(400).json({ message: 'Please check the highlighted details.', errors })
  }

  const record = {
    id: crypto.randomUUID(),
    ...enquiry,
    createdAt: new Date().toISOString(),
  }

  try {
    await fs.mkdir(enquiryDataDirectory, { recursive: true })
    await fs.appendFile(
      path.join(enquiryDataDirectory, 'enquiries.jsonl'),
      `${JSON.stringify(record)}\n`,
      { encoding: 'utf8', mode: 0o600 },
    )
    return response.status(201).json({
      message: 'Your trip enquiry has been received.',
      data: { id: record.id },
    })
  } catch (error) {
    return next(error)
  }
})

app.use((_request, response) => {
  response.status(404).json({ message: 'The requested API route was not found.' })
})

app.use((error, _request, response, _next) => {
  if (error.message === 'Origin is not allowed by CORS') {
    return response.status(403).json({ message: 'This origin is not allowed to access the API.' })
  }
  if (error instanceof SyntaxError && 'body' in error) {
    return response.status(400).json({ message: 'Request body must be valid JSON.' })
  }
  console.error('API request failed:', error.message)
  return response.status(500).json({ message: 'The server could not complete the request.' })
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Royal Yatra API listening on port ${port}`)
  })
}

module.exports = app

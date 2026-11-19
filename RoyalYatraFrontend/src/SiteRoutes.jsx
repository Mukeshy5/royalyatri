import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingIntro from './components/seo-pages/LandingIntro.jsx'
import {
  AboutPage, ContactPage, FAQPage, HomePage, NotFoundPage, SiteLayout, ToursPage,
} from './components/TravelSite.jsx'
import { packagesPath, travelPages } from './seo/travelPages.js'

const landingPages = travelPages.filter(({ path }) => path !== packagesPath)

export default function SiteRoutes({ pathname, locationSearch = '', tourResults, apiUrl = '/api' }) {
  const search = new URLSearchParams(locationSearch)
  return (
    <SiteLayout pathname={pathname}>
      <Routes>
        <Route path="/" element={<HomePage {...tourResults} apiUrl={apiUrl} />} />
        <Route path={packagesPath} caseSensitive element={<ToursPage {...tourResults} search={search} />} />
        <Route path="/about" caseSensitive element={<AboutPage />} />
        <Route path="/contact" caseSensitive element={<ContactPage key={locationSearch} search={search} apiUrl={apiUrl} />} />
        <Route path="/faq" caseSensitive element={<FAQPage />} />
        {landingPages.map((page) => (
          <Route key={page.path} path={page.path} caseSensitive element={
            <LandingIntro page={page} {...(page.path === '/destinations-in-india' ? tourResults : {})} />
          } />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SiteLayout>
  )
}

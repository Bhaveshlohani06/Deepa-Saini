import React from 'react'
import {Helmet} from 'react-helmet'
import Footer from './Footer'
import Header from './Header'
import { Toaster } from 'react-hot-toast'

const Layout = ({ children, title = "", description = "", keywords = "", author = "" }) => {
  return (
    <>
    {/* Page metadata */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title ? `${title} | Deepa Saini` : "DeepaSaini"}</title>
      </Helmet>

      {/* Header */}
      <Header/>

      <main style={{ minHeight: "70vh" }}>
                <Toaster />
                {children}
            </main>


      {/* Footer */}
      <Footer />
      </>
  )
}

export default Layout
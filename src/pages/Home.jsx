import Acerca from '@/components/AcercaDe'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
import HeroKlickBoost from '@/components/Hero'
import JsonLd from '@/components/JsonLd'
import Navbar from '@/components/Navbar'
import Portafolio from '@/components/Portfolio'
import SEO from '@/components/SEO'
import Servicios  from '@/components/Servicios'
import Testimonios from '@/components/Testimonios'
import React from 'react'

export const Home = () => {
  return (
    <div className='min-h-screen overflow-hidden'>
        <SEO />
        <JsonLd />
        <Navbar />
        {/* Main content */}

        <HeroKlickBoost />
        <Servicios />
        <Portafolio />
        <Acerca />
        <Testimonios />
        <Contacto />

        {/* Footer */}
        <Footer />

    </div>
  )
}

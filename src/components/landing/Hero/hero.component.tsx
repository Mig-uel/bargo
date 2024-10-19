import { Button } from '@/components/ui/button'
import { HeroCarousel } from '../'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
          We are changing the way people shop
        </h1>

        <p className='mt-8 max-w-lg text-lg leading-8'>
          I'm baby waistcoat gastropub slow-carb, tofu cloud bread Brooklyn
          sartorial cornhole activated charcoal mlkshk etsy raw denim live-edge
          cred. Microdosing tonx cred, truffaut mixtape man braid 8-bit pug
          iPhone twee. Adaptogen praxis retro, put a bird on it brunch keffiyeh
          mukbang man braid.
        </p>

        <Button asChild size='lg' className='mt-10'>
          <Link to='/products'>Check Our Our Products</Link>
        </Button>
      </div>

      <HeroCarousel />
    </section>
  )
}
export default Hero

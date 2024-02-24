import hero from '../assets/hero.png'

export default function Hero() {
  return (
    <div>
        <img src={hero} alt="Hero image" className='w-full max-h-[600px] object-cover'/>
    </div>
  )
}

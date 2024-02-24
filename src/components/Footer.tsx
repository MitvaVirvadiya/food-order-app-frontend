
export default function Footer() {
  return (
    <div className="bg-orange-500 py-10">
        <div className="container mx-auto flex flex-col justify-between items-center md:flex-row">
            <span className="text-white tracking-tighter text-3xl font-bold">Vinland</span>
            <span className="flex gap-4 text-white font-bold tracking-tighter">
                <span>Privacy policy</span>
                <span>Terms of Service</span>
            </span>
        </div>
    </div>
  )
}

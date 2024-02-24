import landingImage from "../assets/landing.png"
import appImage from "../assets/appDownload.png"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 text-center flex flex-col gap-5 -mt-16">
            <h1 className="text-4xl text-orange-500 tracking-tighter font-bold">Wanna Find Peace Online</h1>
            <span className="text-xl">Food is just one click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} alt="Landing image" />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">Order your food even faster</span>
                <span>Download the Vinland App for faster ordering and personalised
                recommendations</span>
                <img src={appImage} alt="App image" />
            </div>
        </div>
    </div>
  )
}

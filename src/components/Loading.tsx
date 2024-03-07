import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white flex justify-center items-center">
        <Loader2 className="h-[100px] w-[100px] animate-spin text-orange-500" />
    </div>
  )
}


export default Loading;
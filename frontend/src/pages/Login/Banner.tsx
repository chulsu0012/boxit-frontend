import { images } from "../../data/TempPath"
import { Carousel } from "@/components/ui/Carousel"

export default function Banner() {
  return (
    <div className="h-screen">
      <Carousel
        images={images}
      />
    </div>
  )
}
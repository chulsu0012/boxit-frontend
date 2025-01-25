import { images } from "../../data/TempPath"
import { Carousel } from "./Carousel"

export default function Banner() {
  return (
    <div className="h-screen">
      <Carousel
        images={images}
      />
    </div>
  )
}
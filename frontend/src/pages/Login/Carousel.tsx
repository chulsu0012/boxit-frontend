import { Img } from "@/components/ui/Img";
import { useInterval } from "@/hooks/useInterval";
import { useCarouselStore } from "@/store/CarouselStore";
import { LiaChevronCircleLeftSolid, LiaChevronCircleRightSolid } from "node_modules/react-icons/lia";

type CarouselProps = { 
  images: string[]
}

export const Carousel = ({ images }: CarouselProps ) => {
  const { currentIndex, setIndex } = useCarouselStore()
  
  const prevSlide = () => {
    setIndex((currentIndex - 1 + images.length) % images.length)
  }
  
  const nextSlide = () => {
    setIndex((currentIndex + 1) % images.length)
  }

  const { onMouseOver, onMouseLeave } = useInterval(nextSlide, 4000)
  
  return (
    <div
    className="relative h-full overflow-hidden"
    onMouseOver={onMouseOver}
    onMouseLeave={onMouseLeave}
    >
      <div
      className="flex h-full transition-transform duration-500"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <Img
          key={index}
          src={src}
          alt="Banner Image"
          className="z-0 object-cover"
          />
        ))}
      </div>
      
      <button
      className="absolute text-4xl -translate-y-1/2 text-baseBlack top-1/2 left-12"
      onClick={prevSlide}
      >
        <LiaChevronCircleLeftSolid />
        </button>
      <button
      className="absolute text-4xl -translate-y-1/2 text-baseBlack top-1/2 right-12"
      onClick={nextSlide}
      >
        <LiaChevronCircleRightSolid />
      </button>

      <div className="absolute flex justify-center space-x-5 transform -translate-x-1/2 bottom-16 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setIndex(index)}
            className={`w-5 h-5 rounded-full ${
              currentIndex === index ? 'bg-baseGray' : 'bg-baseBlack'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
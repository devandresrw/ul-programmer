import Image from "next/image"

export const HomeSlide = () => {
  return (
    <div className="">
      <Image
        src={'./logo.svg'}
        alt="andresrw"
        width={300}
        height={200}
        className="absolute top-10"
      />
    </div>
  )
}
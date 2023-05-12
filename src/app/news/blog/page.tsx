
import Image from "next/image";

export default function News() {
  
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-full">
        <Image
          src="/images/hero-img.jpg"
          alt="Picture of the author"
          width={1500}
          height={1000}
          className="object-cover object-center bg-center w-full h-96 filter brightness-50"
        />
        <div className="flex flex-col px-20 gap-5 justify-center items-center absolute top-28 text-lg text-white w-full h-96">
          <span className="text-4xl uppercase">Blog</span>
          <div className="flex flex-row items-center justify-between gap-1">
            <span className="text-default text-lg uppercase">Home</span>/
            <span className="text-lg uppercase">Blog</span>
          </div>
        </div>
      </div>
      <section className="py-10 flex px-20 sm:px-3 flex-col  items-center justify-start w-full gap-10">
       
        
      </section>
    </main>
  );
}

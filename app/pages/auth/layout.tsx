import Footer from "@/app/components/global/Footer";
import NavBar from "@/app/components/global/NavBar/NavBar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="
      w-full h-fit 
      flex flex-col 
      justify-center items-center
      bg-primaryBG
    ">
        {/* Right Container */}
        <div className="
          w-full h-fit md:h-full
          flex flex-col 
          justify-between items-center
          self-stretch
        ">
            <NavBar />
            
            {/* Container */}
            <div className="
              w-full h-full 
              flex flex-col
              p-32
              gap-4
              justify-center items-center
              self-stretch
            ">
              {children}
            </div>

            <Footer />
        </div>

        {/* Left Image Container */}
        <div className="
          w-full h-full 
          flex flex-col 
          pl-0 pr-4 py-4
          justify-center items-center
        ">

            <img 
                src="/images/spacegrain.webp" 
                alt="Background" 
                className="
                w-full h-full 
                object-cover
                rounded-lg
                "
            />

        </div>

    </main>
  );
}
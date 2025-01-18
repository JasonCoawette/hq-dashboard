import Footer from "@/app/components/global/Footer";
import NavBar from "@/app/components/global/NavBar/NavBar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
return (
    <main className="
      w-full h-lvh 
      flex flex-col
      justify-center items-center
      bg-primaryBG
    ">

        <div className="
          w-full h-fit
          flex flex-col
          justify-between items-center
        ">

          {/* Make this navbar the back arrow version */}
          <NavBar />

          {children}

          <Footer />

        </div>
      
        {/* Left Image */}
        <div className="
          w-full h-fit
          flex flex-col
          justify-center items-center
          p-4 md:pl-0
          invisible md:visible
        ">

          <div className="
            w-full h-full
            flex flex-col
            justify-center items-center
            bg-secondaryBG
            border-2 border-stroke
            rounded-md
          ">
            <h1 className="
              LargeText
            ">[STRATUS VENTURES]</h1>
          </div>

        </div>

    </main>
  );
}
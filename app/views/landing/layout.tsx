import Footer from '@/app/components/global/Footer';
import NavBar from '@/app/components/global/NavBar/NavBar';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="
      w-full h-fit
      flex flex-col
      justify-between items-center
    ">
      <NavBar />
        {children}
      <Footer />
    </div>
  );
}
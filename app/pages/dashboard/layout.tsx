import MenuBar from "@/app/components/dashboard/navigation/MenuBar";

export default function HQDashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-fit flex flex-col justify-start items-center">
            {children}
            <MenuBar />
        </div>
    );
}
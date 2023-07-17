import DesktopSidebar from "@/app/components/sidebar/DesktopSidebar";

async function Sidebar({children}: {
    children: React.ReactNode
}){
    return (
        <div className = "h-full">
            <DesktopSidebar />
            <main className = "h-full">
                {children}
            </main>
            {children}
        </div>
        )

}


export default  Sidebar
import DesktopSidebar from "@/app/components/sidebar/DesktopSidebar";
import MobileFooter from "@/app/components/sidebar/MobileFooter";
import getCurrentUser from "@/app/actions/getCurrentUser";

async function Sidebar({children}: {
    children: React.ReactNode
}) {
    const currentUser = await getCurrentUser()

    return (
        <div className="h-full">
            <DesktopSidebar currentUser={currentUser!}/>
            <MobileFooter/>
            <main className="h-full">
                {children}
            </main>
            {children}
        </div>
    )

}


export default Sidebar
import React from "react";
import Sidebar from "@/app/components/sidebar/SideBar";


export default async function ConversationsLayout({
                                                      children
                                                  }: { children: React.ReactNode }) {
    return (
        <Sidebar>
            <div className="h-full">
                {children}
            </div>
        </Sidebar>
    )
}
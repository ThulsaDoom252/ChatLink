"use client"

import {User} from "@prisma/client";
import Image from "next/image";
import currentUser from "../../public/images/currentUser.png"

interface AvatarProps {
    user?: User
}

const Avatar: React.FC<AvatarProps> = ({user}) => {
    return (
        <div className="relative w-fit">
            <div className="
            relative
            bg-red-900
            inline-block
            rounded-full
            overflow-hidden
            h-9
            w-9
            md:h-11
            md:w-11
            ">
                <Image src={user?.image || currentUser} alt="your-avatar" fill/>
            </div>
            <span className="
            absolute
            block
            rounded-full
            bg-green-500
            ring-2
            ring-white
            top-0
            right-0
            h-2
            w-2
            md:h-3
            md:w-3
            "/>
        </div>
    );
};

export default Avatar;
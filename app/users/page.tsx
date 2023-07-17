'use client';
import Button from "@/app/components/Button";

import {signOut} from "next-auth/react"

const Users = () => {
    return (
        <Button fullWidth onClick={signOut}>Logout</Button>
    );
};

export default Users;
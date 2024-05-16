"use client"

import { FC, useEffect, useState } from "react"

import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

interface NavbarActionsProps {
    userId: string | null
}

const NavbarActions: FC<NavbarActionsProps> = ({ userId }) => {

    const [mounted, setMounted] = useState(false);

    const router = useRouter();
    const cart = useCart();

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null;
    }

    return <div className="ml-auto flex items-center gap-x-4">
        <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-black px-4 py-2">
            <ShoppingBag size={20} color="white" />
            <span className="ml-2 text-sm font-medium text-white">
                {cart.items.length}
            </span>
        </Button>
        {
            !userId ?
                <Button
                    className="py-2 bg-white text-black border border-gray-300 hover:bg-gray-100"
                    onClick={() => router.push('/sign-in')}
                >
                    Sign in
                </Button>
                :
                <UserButton afterSignOutUrl="/sign-in" />
        }

    </div>
}

export default NavbarActions;
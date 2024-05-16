"use client"

import { FC, useEffect, useState } from "react"

import { priceFormatter } from "@/lib/utils";

interface CurrencyProps {
    value: string
}

const Currency: FC<CurrencyProps> = ({ value }) => {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {setMounted(true)}, [])

    if(!mounted) return null;

    return <div className="font-semibold">
        {priceFormatter.format(Number(value))}
    </div>
}

export default Currency;
"use client"

import { FC, MouseEventHandler } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Expand, ShoppingCart } from "lucide-react"

import { Product } from "@/types"
import IconButton from "@/components/ui/icon-button"
import Currency from "@/components/ui/currency"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart"

interface ProductCardProps {
    data: Product
}

const ProductCard: FC<ProductCardProps> = ({ data }) => {

    const router = useRouter();
    const previewModal = usePreviewModal();

    const cart = useCart();

    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation(); // override main div onClick

        previewModal.onOpen(data);
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation(); // override main div onClick

        cart.addItem(data);
    }


    return <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">

        {/* Image and actions */}
        <div className="aspect-square rounded-xl bg-gray-100 relative">
            <Image
                fill
                src={data?.images?.[0].url}
                alt={`${data.name} image`}
                className="aspect-square object-cover rounded-md"
            />

            <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                <div className="flex gap-x-6 justify-center">
                    <IconButton
                        onClick={onPreview}
                        icon={<Expand size={20} className="text-gray-600" />}
                    />
                    <IconButton
                        onClick={onAddToCart}
                        icon={<ShoppingCart size={20} className="text-gray-600" />}
                    />
                </div>
            </div>
        </div>

        {/* Description  */}

        <div>
            <p className="font-semibold text-base">
                {data.name}
            </p>
            <p className="text-sm text-gray-500">
                {data.category.name}
            </p>
        </div>

        {/* Price  */}
        <div className="flex items-center justify-between">
            <Currency value={data.price} />
        </div>
    </div>
}

export default ProductCard;
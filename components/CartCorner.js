import { useContext, useEffect } from "react"
import { CartState } from "./CartState"
import { ShoppingBagIcon } from "@heroicons/react/outline"
import { useRouter } from 'next/router'
import { ScrollState } from "./ScrollState"

export const CartCorner = () => {
    const { cartContents } = useContext(CartState)
    const { setScrollPosition } = useContext(ScrollState)
    const router = useRouter()

    useEffect(() => {
        console.log('cartContents in CartCorner', cartContents)
    }, [cartContents])

    const onIconClick = () => {
        const scrollPosition = window.scrollY
        setScrollPosition(scrollPosition)
        router.push("/cart")
    }

    return (
        <div className="relative">
            {cartContents.length > 0 &&
                <div className='absolute -top-2 -right-2 rounded-full w-5 h-5 text-sm text-center text-white bg-red-500'>
                    {cartContents.length > 0
                        ? cartContents.map(item => item.quantity).reduce((prev, current) => prev + current, 0)
                        : 0
                    }
                </div>
            }
            <ShoppingBagIcon onClick={onIconClick} className='stroke-slate-900 w-8 cursor-pointer' />
        </div>
    )
}
import Link from "next/link"
import { useContext, useState } from "react"
import { CartState } from "./CartState"
import { FilmIcon } from "@heroicons/react/outline"
import { Poster } from '../components/Poster'


export function MovieCard(props) {
    const { data, setScrollPosition } = props
    const { modifyCart } = useContext(CartState)
    const [showOverlay, setShowOverlay] = useState(false)

    const overlayOn = () => {
        setShowOverlay(true)
    }

    const overlayOff = () => {
        setShowOverlay(false)
    }

    const addItem = (event) => {
        event.preventDefault()
        const { id, title, poster_path, overview } = data
        modifyCart({
            action: 'addItem',
            newItem: { id, title, poster_path, overview, quantity: 1 }
        })
    }

    const updateScrollPosition = () => {
        const scrollPosition = window.scrollY
        console.log('Setting scrollposition in MovieCard to', scrollPosition)
        setScrollPosition(scrollPosition)
    }

    return (
        <div className="w-48 max-h-96 my-4 mx-2">
            <Link href={`/item/${data.id}`} passHref>
                <div className="relative flex flex-col justify-start">
                    <div onMouseEnter={overlayOn} onMouseLeave={overlayOff} className="cursor-pointer my-0">
                        {showOverlay &&
                            <div
                                onClick={updateScrollPosition}
                                className="flex flex-col justify-center items-center rounded-t-lg absolute w-48 h-72 top-0 right-0 z-40 bg-opacity-60 bg-slate-900">
                                <FilmIcon className="w-12 h-12 stroke-white opacity-90" />
                                <p className="text-white font-light opacity-90">See details</p>
                            </div>
                        }
                    <Poster title={data.title} poster_path={data.poster_path}/>
                    </div>
                    <button
                        type="button"
                        onClick={addItem}
                        className="min-w-full py-1 my-0 bg-blue-500 hover:bg-blue-700 text-white"
                    >
                        Add to cart
                    </button>
                </div>
            </Link>
        </div>
    )
}
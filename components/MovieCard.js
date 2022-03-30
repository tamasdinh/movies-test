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

    const sendEvents = () => {
        const longEventContent = {
            test01: "test01",
            test02: "test02",
            test03: "test03",
            test04: "test04",
            test05: "test05",
            test06: "test06",
            test07: "test07",
            test08: "test08",
            test09: "test09",
            test10: "test10",
            test11: "test11",
            test12: "test12",
            test13: "test13",
            test14: "test14",
            test15: "test15",
            test16: "test16",
            test17: "test17",
            test18: "test18",
            test19: "test19",
            test20: "test20",
            test21: "test21",
            test22: "test22",
            test23: "test23",
            test24: "test24",
            test25: "test25",
        }

        const nestedEventContent = {
            test01: {
                test01a: "test01a",
                test01b: "test01b",
                test01c: "test01c",
                test01d: "test01d",
                test01e: "test01e",
                // test01f: "test01f",
            }
        }

        console.log('Sending long event', longEventContent)
        window.gtag('event', 'longEvent', longEventContent)

        console.log('Sending nested event', nestedEventContent)
        window.gtag('event', 'nestedEvent', nestedEventContent)
    }

    const addItem = (event) => {
        event.preventDefault()
        const { id, title, poster_path, overview } = data
        modifyCart({
            action: 'addItem',
            newItem: { id, title, poster_path, overview, quantity: 1 }
        })
        sendEvents({ id, title })
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
                        <Poster title={data.title} poster_path={data.poster_path} />
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
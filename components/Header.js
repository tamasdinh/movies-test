import { CartCorner } from './CartCorner'

export const Header = (props) => {

    const { headerText } = props

    return (
        <div className="flex flex-row justify-between items-center w-screen h-16 px-8 fixed top-0 z-50 shadow-lg bg-white">
            <h1>{headerText}</h1>
            <div className="flex-grow"></div>
            <CartCorner/>
        </div>
    )
}
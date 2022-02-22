import { useContext } from "react"
import Head from 'next/head'
import { CartState } from "../components/CartState"
import { CartItem } from "../components/CartItem"
import { ContactForm } from "../components/ContactForm"
import { BackToBrowse } from "../components/BackToBrowse"
import { Header } from '../components/Header'

export default function Cart() {

    const { cartContents, modifyCart } = useContext(CartState)

    return (
        <>
            <Head>
                <title>Cart</title>
                <meta name="description" content="cart" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header headerText="Cart" />
            <main className="max-w-2xl mx-auto px-8">
                {cartContents.length === 0 &&
                    <div className="flex flex-col justify-center items-center min-h-screen">
                        <h1 className="text-3xl font-light text-center text-slate-800">Your cart is empty. Go select titles to add to your cart!</h1>
                        <BackToBrowse message="Browse popular titles" direction="forward" />
                    </div>
                }
                {cartContents.length > 0 &&
                    <>
                        <div className="h-16"></div>
                        <div>
                            <BackToBrowse message="Go back to browsing" direction="back" />
                            <h1 className="text-lg font-bold mt-10 mb-5 text-slate-800">Your tickets</h1>
                            {cartContents.map((cartItem, index) => (
                                <div key={cartItem.id}>
                                    <CartItem data={cartItem} modifyCart={modifyCart} />
                                    {index + 1 < cartContents.length &&
                                        <hr />
                                    }
                                </div>
                            ))}
                        </div>
                        <div>
                            <h1 className="text-lg font-bold mt-10 mb-5 text-slate-800">Personal details</h1>
                            <ContactForm modifyCart={modifyCart} />
                        </div>
                    </>
                }
            </main>
        </>
    )
}
export const ContactForm = (props) => {

    const { modifyCart } = props

    const clearCart = () => {
        modifyCart({
            action: 'clear',
            newItem: {}
        })
    }

    return (
        <form onSubmit={clearCart}>
            <div className="flex flex-row flex-wrap justify-around">
                <div className="mt-2 min-w-full sm:min-w-0">
                    <label htmlFor="name" className="text-sm font-bold text-slate-800 px-1">Full name</label>
                    <input id="name" type="text" required className="min-w-full h-9 bg-slate-200 rounded-md px-2" />
                </div>
                <div className="mt-2 min-w-full sm:min-w-0">
                    <label htmlFor="email" className="text-sm font-bold text-slate-800 px-1">Email address</label>
                    <input id="email" type="email" required className="min-w-full h-9 bg-slate-200 rounded-md px-2" />
                </div>
                <button type="submit" className="min-w-full text-white bg-blue-500 hover:bg-blue-700 rounded-md py-2 my-8">Place order</button>
            </div>
        </form>
    )
}
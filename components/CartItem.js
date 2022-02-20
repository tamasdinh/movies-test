import Image from 'next/image'
import { TrashIcon } from '@heroicons/react/outline'

export const CartItem = (props) => {
    const { data, modifyCart } = props

    const removeItem = () => {
        modifyCart({
            action: 'removeItem',
            newItem: data
        })
    }

    return (
        <div className="flex flex-col sm:flex-row items-center px-10 py-2">
            <div className='mx-6 mt-4'>
                <Image
                    width={100}
                    height={150}
                    // layout="fill"
                    alt={`${data.title} poster image`}
                    src={`https://image.tmdb.org/t/p/w185/${data.poster_path}`} />
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-sm font-medium'>{data.title}</p>
                <p className='text-sm leading-5 line-clamp-2 max-w-sm text-slate-600'>{data.overview}</p>
            </div>
            <div className='flex flex-row my-4'>
                <div className='mx-12'>{`${data.quantity}`}</div>
                <TrashIcon onClick={removeItem} className='w-6 h-6 mx-6 stroke-slate-500 hover:stroke-red-700 hover:cursor-pointer' />
            </div>
        </div>
    )
}
import Image from 'next/image'

export const Poster = (props) => {

    const { title, poster_path } = props

    return (
        <Image
            className="rounded-t-lg my-0"
            width={192}
            height={288}
            // layout="fill"
            alt={`${title} poster image`}
            src={`https://image.tmdb.org/t/p/w185${poster_path}`} />
    )
}
import { useRouter } from "next/router"
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/outline'

export const BackToBrowse = (props) => {
    const { message, direction, action, getNewPage } = props
    const router = useRouter()

    const buttonAction = async () => {
        switch (action) {
            case "nextPage":
                getNewPage()
            default:
                router.push("/")
        }
    }

    return (
        <div
            className="w-52 flex flex-row justify-center items-center my-8 cursor-pointer text-slate-600 hover:text-blue-500"
            onClick={buttonAction}>
            {direction === "back" &&
                <>
                    <ArrowCircleLeftIcon className="w-8 h-8 m-2" />
                    <div>{message}</div>
                </>
            }
            {direction === "forward" &&
                <>
                    <div>{message}</div>
                    <ArrowCircleRightIcon className="w-8 h-8 m-2" />
                </>
            }
        </div>
    )
}
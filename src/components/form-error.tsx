import { MdOutlineCancel } from 'react-icons/md'
export default function FormError({ message }: { message: string | '' }) {
  if (message) {
    return (
      <div className="w-fit h-fit flex gap-1 items-center ml-4 text-red-500 ">
        <p className="text-[18px]">
          <MdOutlineCancel />
        </p>
        <p> {message}</p>
      </div>
    )
  }
}

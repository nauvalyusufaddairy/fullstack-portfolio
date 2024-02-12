import { FaRegCheckCircle } from 'react-icons/fa'
export default function FormSucces({ message }: { message: string | '' }) {
  if (message) {
    return (
      <div className="w-fit h-fit flex gap-1 items-center ml-4 text-teal-500 font-bold ">
        <p>
          <FaRegCheckCircle />
        </p>
        <p> {message}</p>
      </div>
    )
  }
}

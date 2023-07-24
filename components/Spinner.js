import { RingLoader } from "react-spinners";

export default function Spinner({fullWidth}) {
  if (fullWidth) {
    return (
      <div className="w-full flex justify-center">
        <RingLoader color={'#1e3a8a'} speedMultiplier={2} />
      </div>
    )
  }
  return (
    <RingLoader color={'#1e3a8a'} speedMultiplier={2} />
  )
}
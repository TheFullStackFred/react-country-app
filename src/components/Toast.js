import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Toast() {
  const notify = () =>
    toast.dark('Hello World!', {
      position: toast.POSITION.BOTTOM_CENTER
    })

  return (
    <div>
      <button className="glow-on-hover" onClick={notify}>
        HIT ME 👊
      </button>
      <ToastContainer />
      <ToastContainer
        style={{
          width: '40vw'
        }}
        autoClose={10000}
      />
    </div>
  )
}

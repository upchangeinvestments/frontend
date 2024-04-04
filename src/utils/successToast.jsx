import { toast } from 'react-toastify';
import '../App.css'

const successToast = (message) => {
    toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "ToastSuccessBg"
    });
}

export default successToast;
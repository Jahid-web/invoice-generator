import { toast } from "react-toastify";

export default (options) => {
  const toastOptions = {
    position: options.position,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  switch (options.type) {
    case "info":
      return toast.info(options.message, toastOptions);
      break;
    case "success":
      return toast.success(options.message, toastOptions);
      break;
    case "error":
      return toast.error(options.message, toastOptions);
      break;
    case "warning":
      return toast.warning(options.message, toastOptions);
      break;
    default:
      toast.error("Something went wrong", toastOptions);
  }
};

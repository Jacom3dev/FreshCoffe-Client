import toast from 'react-hot-toast';

export const notify = (message:string) => toast.success(message,{position:'top-right'});
export const notifyError = (message:string) => toast.error(message,{position:'top-center'});
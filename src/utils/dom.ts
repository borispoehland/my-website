// @ts-ignore
import Swal from 'sweetalert2/dist/sweetalert2';

export const openResourceInNewTab = (path: string): void => {
  window.open(path, '__blank');
};

export const fireSweetAlert = (
  type: 'success' | 'error',
  message: string
): Promise<void> => {
  return Swal.fire({
    title: type === 'success' ? 'Success!' : 'Something went wrong',
    icon: type,
    html: message,
  });
};

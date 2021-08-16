// @ts-ignore
import Swal from 'sweetalert2/dist/sweetalert2';

/**
 * Contains functions that only work within useEffect, i.e. when the window is defined
 */

export const openResourceInNewTab = (path: string): void => {
  window.open(path, '__blank');
};

export interface ISwalProps {
  swalTitle: string;
  swalDescription: string;
  swalType: 'success' | 'error';
}

export const fireSweetAlert = ({
  swalDescription,
  swalTitle,
  swalType,
}: ISwalProps): Promise<void> => {
  return Swal.fire({
    title: swalTitle,
    icon: swalType,
    html: swalDescription,
  });
};

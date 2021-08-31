import { CSSProperties, ReactNode } from 'react';

declare global {
  interface HasChildren {
    children: ReactNode;
  }

  interface HasClassName {
    className: string;
  }

  interface HasStyle {
    style: CSSProperties;
  }
}

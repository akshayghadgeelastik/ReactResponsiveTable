// types.ts
import { CSSProperties } from 'react';

export interface Column {
  name: string;
  selector: (row: any) => string | React.ReactNode;   
  cell?: (row: any) => React.ReactNode;
  width?: string; 
  style?: CSSProperties;
  center?: boolean;
  adjustWidthOnSmallerDevice?: boolean;
  showOnMobileDevice?: boolean;
  showOnTabletDevice?: boolean;
}

export interface RowData {
  [key: string]: any;
}

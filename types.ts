
export interface Pathera {
  id: string;
  name: string;
  totalBricks: number;
  weeklyBricks: number[]; // [Mon, Tue, Wed, Thu, Fri, Sat, Sun, Total]
  pathaiAmount: number;
  deposit: number;
  hasKhadai: boolean;
  khadaiPayment: number;
  trend: number[]; // For sparkline
}

export interface Khadai {
  id: string;
  name: string;
  totalBricks: number;
  weeklyBricks: number[]; // [Mon, Tue, Wed, Thu, Fri, Sat, Sun, Total]
  khadaiAmount: number;
  deposit: number;
}

export enum Tab {
  Overview = 'Overview',
  Pathera = 'Pathera',
  Khadai = 'Khadai',
}

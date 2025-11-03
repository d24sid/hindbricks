
import { Pathera, Khadai } from './types';

// Mock data for Patheras
export const patheraData: Pathera[] = [
    { id: 'P001', name: 'Ramesh Kumar', totalBricks: 125000, weeklyBricks: [1200, 1500, 1300, 1600, 1400, 1800, 0, 8800], pathaiAmount: 44000, deposit: 10000, hasKhadai: false, khadaiPayment: 0, trend: [5, 6, 4, 7, 6, 8, 9] },
    { id: 'P002', name: 'Suresh Singh', totalBricks: 112000, weeklyBricks: [1100, 1400, 1200, 1500, 1300, 1700, 0, 8200], pathaiAmount: 41000, deposit: 5000, hasKhadai: true, khadaiPayment: 16400, trend: [8, 7, 6, 7, 8, 7, 6] },
    { id: 'P003', name: 'Anil Yadav', totalBricks: 105000, weeklyBricks: [1000, 1300, 1100, 1400, 1200, 1600, 0, 7600], pathaiAmount: 38000, deposit: 8000, hasKhadai: false, khadaiPayment: 0, trend: [4, 5, 6, 5, 7, 6, 8] },
    { id: 'P004', name: 'Vikas Sharma', totalBricks: 98000, weeklyBricks: [900, 1200, 1000, 1300, 1100, 1500, 0, 7000], pathaiAmount: 35000, deposit: 12000, hasKhadai: true, khadaiPayment: 14000, trend: [6, 5, 7, 6, 5, 7, 8] },
    { id: 'P005', name: 'Deepak Patel', totalBricks: 95000, weeklyBricks: [800, 1100, 900, 1200, 1000, 1400, 0, 6400], pathaiAmount: 32000, deposit: 4000, hasKhadai: false, khadaiPayment: 0, trend: [7, 8, 6, 7, 8, 9, 8] },
    { id: 'P006', name: 'Manoj Tiwari', totalBricks: 91000, weeklyBricks: [700, 1000, 800, 1100, 900, 1300, 0, 5800], pathaiAmount: 29000, deposit: 6000, hasKhadai: true, khadaiPayment: 11600, trend: [9, 8, 7, 8, 7, 6, 5] },
    { id: 'P007', name: 'Sunil Gupta', totalBricks: 88000, weeklyBricks: [600, 900, 700, 1000, 800, 1200, 0, 5200], pathaiAmount: 26000, deposit: 9000, hasKhadai: false, khadaiPayment: 0, trend: [5, 6, 7, 8, 7, 8, 9] },
    { id: 'P008', name: 'Amit Verma', totalBricks: 85000, weeklyBricks: [500, 800, 600, 900, 700, 1100, 0, 4600], pathaiAmount: 23000, deposit: 3000, hasKhadai: true, khadaiPayment: 9200, trend: [6, 7, 5, 6, 7, 5, 6] },
    { id: 'P009', name: 'Rajesh Mehra', totalBricks: 82000, weeklyBricks: [400, 700, 500, 800, 600, 1000, 0, 4000], pathaiAmount: 20000, deposit: 7000, hasKhadai: false, khadaiPayment: 0, trend: [8, 9, 7, 8, 6, 7, 8] },
    { id: 'P010', name: 'Sanjay Rawat', totalBricks: 79000, weeklyBricks: [300, 600, 400, 700, 500, 900, 0, 3400], pathaiAmount: 17000, deposit: 1000, hasKhadai: true, khadaiPayment: 6800, trend: [4, 5, 3, 5, 4, 6, 5] },
];

// Mock data for Khadais
export const khadaiData: Khadai[] = [
    { id: 'K001', name: 'Mahesh Pal', totalBricks: 250000, weeklyBricks: [2200, 2500, 2300, 2600, 2400, 2800, 0, 14800], khadaiAmount: 100000, deposit: 20000 },
    { id: 'K002', name: 'Ganesh Kumar', totalBricks: 230000, weeklyBricks: [2100, 2400, 2200, 2500, 2300, 2700, 0, 14200], khadaiAmount: 92000, deposit: 15000 },
    { id: 'K003', name: 'Rakesh Sahu', totalBricks: 215000, weeklyBricks: [2000, 2300, 2100, 2400, 2200, 2600, 0, 13600], khadaiAmount: 86000, deposit: 18000 },
];

// Mock data for Pie Chart
export const khadaiPieChartData = [
    { name: 'Patheras doing own Khadai', value: 4 },
    { name: 'Separate Khadai', value: 6 },
];

// Mock data for Bar Chart
export const monthlyProductionData = [
    { name: 'Jul', thisSeason: 400000, lastSeason: 380000 },
    { name: 'Aug', thisSeason: 420000, lastSeason: 390000 },
    { name: 'Sep', thisSeason: 450000, lastSeason: 410000 },
    { name: 'Oct', thisSeason: 480000, lastSeason: 460000 },
    { name: 'Nov', thisSeason: 510000, lastSeason: 490000 },
    { name: 'Dec', thisSeason: 530000, lastSeason: 500000 },
    { name: 'Jan', thisSeason: 550000, lastSeason: 520000 },
    { name: 'Feb', thisSeason: 0, lastSeason: 540000 },
    { name: 'Mar', thisSeason: 0, lastSeason: 560000 },
    { name: 'Apr', thisSeason: 0, lastSeason: 510000 },
    { name: 'May', thisSeason: 0, lastSeason: 480000 },
    { name: 'Jun', thisSeason: 0, lastSeason: 450000 },
];

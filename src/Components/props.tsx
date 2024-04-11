export default interface Props {
    state: {
        total: number;
        currentNumber: string;
        operator: string;
        hasDecimal: boolean;
        isNegative: boolean;
      };
      setState: (arg0: any) => void;
  }
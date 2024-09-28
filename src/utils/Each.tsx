import { ReactNode, Children, ReactElement } from "react";

interface EachProps<T> {
  // eslint-disable-next-line no-unused-vars
  render: (item: T, index: number) => ReactNode;
  of: T[];
}

export const Each = <T,>({ render, of }: EachProps<T>): ReactElement => {
  return <>{Children.toArray(of.map((item, index) => render(item, index)))}</>;
};

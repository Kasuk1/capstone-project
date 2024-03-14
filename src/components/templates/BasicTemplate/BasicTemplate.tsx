import { Footer, Navbar } from 'components';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const BasicTemplate = ({ children }: Props) => {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <main>{children}</main>
      <section>
        <Footer />
      </section>
    </>
  );
};

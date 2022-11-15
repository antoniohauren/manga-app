import Footer from '../Footer';
import Header from '../Header';
import { BaseTemplateProps } from './BaseTemplate.types';

import S from './BaseTemplate.module.scss';

function BaseTemplate({ children }: BaseTemplateProps) {
  return (
    <div className={S.wrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default BaseTemplate;

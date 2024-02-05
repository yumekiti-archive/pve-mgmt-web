import { FC } from 'react';
import { footerText } from '../../constants/texts';

const Component: FC = () => (
  <footer className="bg-Elements-CardBackground p-1 md:p-2">
    <div className="max-w-7xl mx-auto">
      <span
        className="px-2 text-xs md:text-sm"
        dangerouslySetInnerHTML={{ __html: footerText }}
      />
    </div>
  </footer>
);

export default Component;
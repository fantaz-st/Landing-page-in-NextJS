import Image from 'next/image';

import logo from '../../public/images/fantaz.svg';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <a>
        <Image src={logo} width="170px" height="43px" alt="fantaz page logo" />
      </a>
    </Link>
  );
};

export default Logo;

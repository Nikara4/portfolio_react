import Link from 'next/link';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { RiCodeSSlashLine } from 'react-icons/ri';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <RiCodeSSlashLine size='2.5rem' />
          <Span>&nbsp;Coding Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#technologies'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#achievements'>
          <NavLink>Courses & Certificates</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/Nikara4'>
        <AiFillGithub />
      </SocialIcons>

      <SocialIcons href='https://www.linkedin.com/in/aleksandra-szczur/'>
        <AiFillLinkedin />
      </SocialIcons>

      <SocialIcons href='https://www.facebook.com/olaszczur4'>
        <AiFillFacebook />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

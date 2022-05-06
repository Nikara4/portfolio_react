import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
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
          <Span>&nbsp;Full-Stack Portfolio</Span>
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
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#technologies'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#achievements'>
          <NavLink>Achievements</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='/'>
        <AiFillGithub size='2rem'/>
      </SocialIcons>
      <SocialIcons href='/'>
        <AiFillLinkedin size='2rem'/>
      </SocialIcons>
      <SocialIcons href='/'>
        <AiFillInstagram size='2rem'/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

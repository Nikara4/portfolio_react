import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:555-555-555">555-555-555</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@contact.pl">contact@contact.pl</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>     
        <CompanyContainer>
          <Slogan>whatssup</Slogan>
        </CompanyContainer> <SocialContainer>
      <SocialIcons href='/'>
        <AiFillGithub />
      </SocialIcons>

      <SocialIcons href='/'>
        <AiFillLinkedin />
      </SocialIcons>

      <SocialIcons href='/'>
        <AiFillInstagram />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

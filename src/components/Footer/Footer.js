import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

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
          <LinkItem href='tel:505-335-208'>505-335-208</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:olaszczur93@gmail.com'>
            olaszczur93@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Problems are just solutions, which have not yet presented
            themselves.
          </Slogan>
          <Slogan>
            <LinkItem href='https://www.flaticon.com/free-icons/web-development' style={{ fontSize: '12px' }}>
              Icon used for favicon by Freepik - Flaticon
            </LinkItem>
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/Nikara4'>
            <AiFillGithub />
          </SocialIcons>

          <SocialIcons href='https://www.linkedin.com/in/aleksandra-szczur/'>
            <AiFillLinkedin />
          </SocialIcons>

          <SocialIcons href='https://www.facebook.com/olaszczur4'>
            <AiFillFacebook />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

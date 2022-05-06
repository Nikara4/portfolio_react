import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="technologies">
<SectionDivider />
<SectionTitle main>Technologies</SectionTitle>
<SectionText>I am currently learning how to be a Front-End Developer. I have majored in cultural studies and tourism and my work experience is related to administration and client service.</SectionText>
<List>
  <ListItem>
    <DiReact size="3rem" />
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>Experience with <br /> stuff</ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiZend size="3rem" />
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>Experience with <br /> stuff</ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiFirebase size="3rem" />
    <ListContainer>
      <ListTitle>Databases</ListTitle>
      <ListParagraph>Experience with <br /> stuff</ListParagraph>
    </ListContainer>
  </ListItem>
</List>
</Section>
);

export default Technologies;

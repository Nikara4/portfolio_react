import { DiReact, DiNodejsSmall } from 'react-icons/di';
import { FiDatabase } from "react-icons/fi";
import { BiPaint } from "react-icons/bi";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="technologies">
<SectionDivider divider />
<SectionTitle>Technologies</SectionTitle>
<SectionText>My main focus of learning are Front-End Developer languages, however I have extended my knowledge to Node.js with Express and MongoDB database to be self-sufficient in building Full-Stack apps.</SectionText>
<List>
  <ListItem>
    <DiReact size="3rem" />
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>Experience with <br /> JavaScript, React, Next.js, TypeScript, jQuery</ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiNodejsSmall size="3rem" />
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>Experience with <br /> Node.js, Express</ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <FiDatabase size="2rem" />
    <ListContainer>
      <ListTitle>Databases</ListTitle>
      <ListParagraph>Experience with <br /> MongoDB</ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <BiPaint size="2rem" />
    <ListContainer>
      <ListTitle>Design</ListTitle>
      <ListParagraph>Experience with <br /> Sass, Material UI</ListParagraph>
    </ListContainer>
  </ListItem>
</List>
</Section>
);

export default Technologies;

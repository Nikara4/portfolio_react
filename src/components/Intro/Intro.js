import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './IntroStyles';

const Intro = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hello to <br />
      My Developer Portfolio
    </SectionTitle>
    <SectionText>
    I like to call myself a witch or a magician, because coding is like magic - creating something extraordinary out of a simple text. You have entered my magic world, where I can show you, what I've created. Feel free to look around or contact me for more.
    </SectionText>
    <Button onClick={() => window.location = 'https://nikara4.github.io/MyCV/'}>My resume</Button>
  </LeftSection>
</Section>
);

export default Intro;
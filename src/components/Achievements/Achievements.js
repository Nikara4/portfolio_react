import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AchievementsStyles';
import { data } from '../../constants/constants';

const Acomplishments = () => (
<Section>
  <SectionTitle main>Personal Acomplishments</SectionTitle>
  <Boxes>
{data.map((card, index) => (
<Box key={index}>
<BoxNum>{card.number}+</BoxNum>
<BoxText>{card.text}</BoxText>
</Box>
))}
  </Boxes>
</Section>
);

export default Acomplishments;

import Link from 'next/link';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  Box,
  Boxes,
  BoxTitle,
  BoxScope,
  BoxText,
  ExternalLinks,
} from './CoursesStyles';
import { courses } from '../../constants/constants';

const Courses = () => (
  <Section id='courses'>
    <SectionDivider divider />
    <SectionTitle>Courses & Certificates</SectionTitle>
    <Boxes>
      {courses.map(({ title, scope, date, link, platform, course, id }) => (
        <Box key={id}>
          <BoxText>{platform}</BoxText>
          <Link href={course}>
            <BoxTitle>{title}</BoxTitle>
          </Link>
          <BoxText>Scope: </BoxText>
          <BoxScope>
            {scope.map((el, i) => (
              <span
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#d8bfbf',
                  flexBasis: '50%',
                }}
              >
                {el}
              </span>
            ))}
          </BoxScope>
          <BoxText>Completed: {date}</BoxText>
          {link && <ExternalLinks href={link}>Certificate</ExternalLinks>}
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Courses;

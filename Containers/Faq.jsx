import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Layout from '../Components/Layout/Layout';
import { faqQuestions } from '../Components/FaqQuestions';

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Layout>
      <Box sx={styles.faq} id="faq">
        <Box sx={styles.faq__text}>
          <Typography variant="h2">Frequently Asked Questions</Typography>
          <Typography variant="h4">What question on your mind, lets find the answers</Typography>
        </Box>
        {faqQuestions.map(({ content, title }, i) => (
          <Accordion variant="themed" key={i} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="`panel${i}bh-content`" id="`panel${i}bh-header`">
              <Typography variant="body3" sx={{ fontWeight: '600', lineHeight: '3rem' }}>
                {`0${i + 1}. ${title}`}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body3">{content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Layout>
  );
};

export default Faq;

const styles = {
  faq: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '7rem 0',
  },
  faq__text: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
};

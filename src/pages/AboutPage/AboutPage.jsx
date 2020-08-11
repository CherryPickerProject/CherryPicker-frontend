import React from 'react';
import { Grid } from 'semantic-ui-react';
import PortalLayout from '../../layouts/PortalLayout';
import { AboutHeader, AboutText, HighlightText } from './AboutPage.styles';

const App = ({ location: { pathname } = {} } = {}) => {
  const para1 = 'Let\'s face it. Finding the perfect venue that fits your budget and event needs is a tough job.\n\n';
  const para2 = 'Even though there are many event venue rental websites on the Internet, it is difficult to make a firm decision. There is no single central platform for you to make comparisons between the different offerings. Countless hours are wasted trying to navigate between the different website vendors, compare offerings by different vendors and decide which is credible.\n\n';
  const para3one = 'At CherryPicker, we understand your pain and we want to make things easier for you. CherryPicker is a powerful meta-search engine that will help you in your quest of searching for the perfect venue for your event needs. By using the state of the art technology, we connect you with existing venue rental websites. We help you sieve through the plethora of venue choices on the internet and aggregate them on our website. Our algorithms help to recommend venues tailored to your event needs according to your input in the ';
  const para3two = '. CherryPicker provides a convenient platform for you to cherry pick preferred venues with our ';
  const para3three = ', and share them with your beloved friends or colleagues with our ';
  const para3four = '. Once you have made a firm decision, simply click on the selected venue to be redirected to the selected rental website to make your booking.\n\n';
  const para4 = 'The team at CherryPicker is passionate about helping you cherry pick the perfect venue for your event needs. We are a young team of technology enthusiasts with Computer Science backgrounds from NUS & NTU in Singapore. Rest assured that we are working hard to make this website as best as it can be to serve your needs. Should you have any feedback or would like to collaborate with us, we can be contacted at: ';
  const para5 = '\n\nThe data on this website are taken from: TagVenue, Venuerific, VenuExplorer and Huone.';

  return (
    <PortalLayout pathname={pathname}>
      <Grid container columns={1}>
        <Grid.Row>
          <AboutHeader>
            About Us
          </AboutHeader>
        </Grid.Row>
        <Grid.Row>
          <AboutText>
            {para1}
            {para2}
            {para3one}
            <HighlightText>search engine</HighlightText>
            {para3two}
            <HighlightText>bookmark feature</HighlightText>
            {para3three}
            <HighlightText>sharing feature</HighlightText>
            {para3four}
            {para4}
            <HighlightText>reachcherrypickerteam@gmail.com</HighlightText>
            {para5}
          </AboutText>
        </Grid.Row>
      </Grid>
    </PortalLayout>
  );
};

export default App;

import Logo from "./components/logo";
import OuterCont from "./components/outercont";
import ContentCont from "./components/contentCont";
import Heading from "./components/heading";
import PicCard from "./components/piccard";
import CardCont from "./components/cardCont";
import HeightSpacer from "./components/spacer";
import Button from "./components/button";
import CenterCont from "./components/centerCont";
import Card from "./components/card";
import Cover from "./components/cover";
import InnerCont from "./components/innerCont";

import im1 from "./media/photos/Begginer.png";
import im2 from "./media/photos/advan.png";
import im3 from "./media/photos/2x/History-picture.png";
import logoim from "./media/logo/1.5x/Shine-logo.png"

const vid1="/bachata_una_noche_perfecta_tracked.mp4";

import text from "./media/content/text.json";

export default function Home() {
  return (
    <>
    <Cover/>
    <OuterCont>
      
      
      <InnerCont wid={logoim.width}>
      
      <Logo logo={logoim}/>

      <HeightSpacer /><HeightSpacer />

      <ContentCont>
        <Heading>
          About
        </Heading>
        <CardCont>
          <Card vid={vid1} t={text.feel}>
            {text.feel.heading}
          </Card>
          <Card vid={vid1} t={text.bodymovement}>
            {text.bodymovement.heading}
          </Card>
          {/* <Card img={im2}>
          {text.bodymovement.heading}
          </Card> */}
          <Card im={im3} t={text.history}>
          {text.history.heading}
          </Card>
        </CardCont>
      </ContentCont>

      <HeightSpacer />

      <ContentCont>
        <Heading>
          Workshops
        </Heading> 
        <CardCont>
          <Card vid={vid1} t={text.bachata}>
          {text.bachata.heading}
          </Card>
          <Card im={im3} t={text.salsa}>
          {text.salsa.heading}
          </Card>
          <Card im={im1} t={text.beginner}>
            {text.beginner.heading}
          </Card>
          <Card im={im2} t={text.intermediate}>
            {text.intermediate.heading}
          </Card>
        </CardCont>
      </ContentCont>

      <HeightSpacer /><HeightSpacer />
      <CenterCont>
        <Button></Button>
      </CenterCont>
      <HeightSpacer /><HeightSpacer />
      </InnerCont>
    </OuterCont>
    </>
  )
}

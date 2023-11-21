import Logo from "../components/logo";
import OuterCont from "../components/outercont";
import ContentCont from "../components/contentCont";
import Heading from "../components/heading";
import Card from "../components/piccard";
import CardCont from "../components/cardCont";
import HeightSpacer from "../components/spacer";
import Button from "../components/button";
import CenterCont from "../components/centerCont";
import VideoCard from "../components/card";
import DropDown from "../components/dropdown";
import Form from "../components/form";

import im1 from "../media/photos/348604550_1220797151968122_4621731098027034156_n.jpg";
import im2 from "../media/photos/348636079_154861930745838_3529567923429280657_n.jpg";
import im3 from "../media/photos/2x/History-picture.png";
import logoim from "../media/logo/1.5x/Shine-logo.png";

const vid1="";

export default function Home() {
  return (
    <OuterCont>
        <ContentCont>
            <Heading>
                Form
            </Heading>
            <Form></Form>
       </ContentCont>
       <HeightSpacer /><HeightSpacer />
    </OuterCont>
  )
}

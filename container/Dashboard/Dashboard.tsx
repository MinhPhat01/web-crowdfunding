import { Spacing, WrapperSection } from "@/components";
import Headline from "@/components/Headline/Headline";

import RecentCampaign from "./components/RecentCampaign";
import PopularCampaign from "./components/PopularCampaign";
import CampaignCardHeader from "./components/CampaignCardHeader";

const Dashboard = () => {
  return (
    <WrapperSection>
      <Headline title="Your Campaign" quantity={4} />

      <Spacing spacing={1.25} />

      <CampaignCardHeader
        img="/images/card1.avif"
        category="Architecture"
        title="Remake - We Make architecture exhibition"
        description="Remake - We Make: an exhibition about architecture's social
        agency in the face of urbanisation"
        amount={200}
        backers={173}
        date={30}
        raised={190}
      />

      <Spacing spacing={5} />

      <Headline title="Popular Campaign" />

      <Spacing spacing={1.25} />

      <PopularCampaign />

      <Spacing spacing={5} />

      <Headline title="Recent Campaign" />

      <Spacing spacing={1.25} />

      <RecentCampaign />
    </WrapperSection>
  );
};

export default Dashboard;

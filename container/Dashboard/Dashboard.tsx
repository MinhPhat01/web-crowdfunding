import { Fragment } from "react";

import { Box } from "@mui/material";

import Headline from "@/components/Headline/Headline";
import CampaignCardRow from "./components/CampaignCardRow";
import { Spacing } from "@/components";

const Dashboard = () => {
  return (
    <Fragment>
      <Headline title="Your Campaign" quantity={4} />

      <Spacing spacing={1.25} />

      <CampaignCardRow
        img="/images/card1.avif"
        category="Architecture"
        title="Remake - We Make architecture exhibition"
        description="Remake - We Make: an exhibition about architecture's social
        agency in the face of urbanisation"
        amount={200}
        backers={173}
        date={30}
      />
    </Fragment>
  );
};

export default Dashboard;

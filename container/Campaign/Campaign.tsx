import React from "react";

import { Stack } from "@mui/material";

import {
  ButtonSecondary,
  CampaignCardHeader,
  Headline,
  Spacing,
  WrapperSection,
} from "@/components";
import CreateCampaign from "./components/CreateCampaign";

export default function Campaign() {
  return (
    <WrapperSection>
      <CreateCampaign />

      <Spacing spacing={5} />

      <Headline title="Your Campaign" quantity={4} />

      <Spacing spacing={2.5} />

      <Stack gap="40px" flexDirection="column" alignItems="center">
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

        <CampaignCardHeader
          img="/images/cardHeader2.avif"
          category="Architecture"
          title="Remake - We Make architecture exhibition"
          description="Remake - We Make: an exhibition about architecture's social
        agency in the face of urbanisation"
          amount={100}
          backers={273}
          date={28}
          raised={190}
        />

        <CampaignCardHeader
          img="/images/cardHeader1.avif"
          category="Architecture"
          title="Remake - We Make architecture exhibition"
          description="Remake - We Make: an exhibition about architecture's social
        agency in the face of urbanisation"
          amount={220}
          backers={123}
          date={18}
          raised={990}
        />

        <ButtonSecondary title="See more+" />
      </Stack>
    </WrapperSection>
  );
}

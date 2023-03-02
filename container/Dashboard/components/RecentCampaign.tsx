import React, { Fragment, useMemo } from "react";

import { Grid } from "@mui/material";

import CampaignCard from "./CampaignCard";
import { cardList } from "@/constant";

const RecentCampaign = () => {
  const renderCampaignCard = useMemo(() => {
    if (cardList == undefined) return null;
    return cardList.map((item) => {
      return (
        <Grid item xs={3} key={item.id}>
          <CampaignCard
            title={item.title}
            amount={item.amount}
            author={item.author}
            avatar={item.avatar}
            img={item.img}
            description={item.description}
            backers={item.backers}
            category={item.category}
            raised={item.raised}
          />
        </Grid>
      );
    });
  }, []);

  return (
    <Fragment>
      <Grid container spacing={"1.875rem"}>
        {renderCampaignCard}
      </Grid>
    </Fragment>
  );
};

export default RecentCampaign;

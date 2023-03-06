import React, { Fragment, useMemo } from "react";

import { Grid } from "@mui/material";

import { cardList } from "@/constant";
import { CampaignCard } from "@/components";

const RecentCampaign = () => {
  const renderCampaignCard = useMemo(() => {
    if (cardList == undefined) return null;
    return cardList.map((item) => {
      return (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
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

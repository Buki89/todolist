import React, { FC } from "react";
import { ActionBar, Card, CardHeader, Screen } from "../../components";
import { CardHeaderContainer, TaskList } from "../../containers";
import { format } from "date-fns";

type DashboardScreenProps = {};

const DashboardScreen: FC<DashboardScreenProps> = () => {
  const formattedDate = format(new Date(), "d LLL");
  return (
    <Screen>
      <Card>
        <CardHeader>
          <CardHeaderContainer title={formattedDate} />
          <ActionBar />
        </CardHeader>
        <TaskList />
      </Card>
    </Screen>
  );
};

export default DashboardScreen;

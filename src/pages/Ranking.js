import React from "react";

import Heading from "@/components/Page/Heading";
import Container from "@/components/Page/Container";
import RankTable from "@/components/RankTable";

const Ranking = () => {
  return (
    <>
      <Container>
        <Heading title="Ranking de alunos" />
        <RankTable />
      </Container>
    </>
  );
};

export default Ranking;

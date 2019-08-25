import React from "react";
import { useSelector } from "react-redux";
import RankTableRow from "@/components/RankTableRow";
import StudentTableRow from "@/components/StudentTableRow";

const RankTable = () => {
  const alunos = useSelector(state => state.alunos.list);
  const ranks = useSelector(state => state.ranks.list);

  return (
    <>
      <div>
        {ranks &&
          ranks.length > 0 &&
          ranks
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((rank, ranksIndex) => {
              if (
                alunos &&
                alunos.length > 0 &&
                alunos.filter(aluno =>
                  !ranks[ranksIndex - 1]
                    ? aluno.score >= rank.minScore
                    : aluno.score >= rank.minScore && aluno.score < ranks[ranksIndex - 1].minScore
                ).length
              ) {
                return (
                  <RankTableRow index={ranksIndex} rank={rank} key={rank.id}>
                    {alunos
                      .filter(aluno => {
                        return !ranks[ranksIndex - 1]
                          ? aluno.score >= rank.minScore
                          : aluno.score >= rank.minScore && aluno.score < ranks[ranksIndex - 1].minScore;
                      })
                      .map((aluno, alunoIndex, arr) => (
                        <StudentTableRow index={alunoIndex} arr={arr} aluno={aluno} key={aluno.id} />
                      ))}
                  </RankTableRow>
                );
              }

              return null;
            })}
      </div>
    </>
  );
};

export default RankTable;

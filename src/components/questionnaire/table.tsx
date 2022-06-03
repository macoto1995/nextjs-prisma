import { FC } from "react";
import { Table, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { Questionnaire } from "entities/questionnaire/entity";

export type Props = {
  questionnaires: Questionnaire[]
}

export const QuestionnaireTable: FC<Props> = ({
  questionnaires
}) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Td>タイトル</Td>
          <Td>説明</Td>
          <Td>回答数</Td>
        </Tr>
      </Thead>
      <Tbody>
        {questionnaires.map((q, i) => {
          return (
            <Tr key={i}>
              <Td>{q.title}</Td>
              <Td>{q.description}</Td>
              <Td>{q.n_answers}</Td>
            </Tr>  
          )
        })}          

      </Tbody>
    </Table> 
  ) 
}
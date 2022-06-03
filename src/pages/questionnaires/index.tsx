import type { NextPage, GetServerSideProps } from 'next'
import { QuestionnaireTable } from 'components/questionnaire/table'
import { fixture as questionnaireFixture } from 'entities/questionnaire/fixture'
import { Questionnaire } from 'entities/questionnaire/entity'

type Props = {
  questionnaires: Questionnaire[]
}


export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const questionnaires = [questionnaireFixture, questionnaireFixture, questionnaireFixture]
  return {
    props: {
      questionnaires
    }
  }
}


const Questionnaire:NextPage<Props> = ({
  questionnaires
}) => {

  return <QuestionnaireTable questionnaires={questionnaires} />
}

export default Questionnaire


import type { NextPage } from 'next'
import { QuestionnaireTable } from 'components/questionnaire/table'
import { fixture as questionnaireFixture } from 'entities/questionnaire/fixture'
const Questionnaire:NextPage = () => {
  const questionnaires = [questionnaireFixture, questionnaireFixture, questionnaireFixture]

  return <QuestionnaireTable questionnaires={questionnaires} />
}

export default Questionnaire


import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/questions';
import { nextStep, prevStep, resetStep } from '../actions/step';
import QuestionInput from '../components/forms/QuestionInput';
import SelectPrefectureForm from '../components/forms/SelectPrefectureForm';
import { preserveAnswer } from '../actions/answers'
import PlanInput from '../components/forms/PlanInput';
import { postPlans } from '../actions/plans'
import jpPrefecture from 'jp-prefecture'

class QuestionsPage extends Component {
  constructor(){
    super()
    this.hello = "hello"
    this.plan = {
      title: "",
      prefecture: "",
      answers_attributes: []
    }
    this.options = jpPrefecture.getAll("pref", ["id", "name"]).map((pref) => {
      let { id, name } = pref
      return {
        label: name,
        value: id
      }
    })
  }

  componentDidMount(){
    this.props.getQuestions()
    this.props.resetStep()
  }

  componentWillMount(){
    this.props.resetStep()
  }

  handleNextSubmit(){
    this.props.nextStep()
  }

  handlePrevSubmit(){
    this.props.prevStep()
  }

  handleSubmitChoice(e){
    const $input = e.target
    let answers = this.plan.answers_attributes
    let question_id = $input.dataset.question_id
    let question_ids = answers.map((answer) => {
      return answer.question_id
    })
    let answer = {
      question_id: question_id,
      choice_id: $input.value
    }
    if (question_ids.indexOf(question_id) >= 0) {
      console.log(answer)
      answers[question_ids.indexOf(question_id)] = answer
    } else {

      answers.push(answer)
    }
  }

  handlePlanTitleSubmit(e){
    this.plan.title = e.target.value
  }

  handlePlanSubmit(){
    this.props.postPlans(JSON.stringify(this.plan))
    .then((data)=>{
      this.props.history.pushState(null, `/plans/${data.id}/recommendations`)
    })
  }

  handlePrefectureSubmit(e) {
    console.log(e.target.value)
    this.plan.prefecture = e.target.value
    console.log(this.plan)
  }



  render() {
    let { questions, step } = this.props
    return(
      <div id="question_page">
        <div className="question-image-over"></div>
        <div id="question_form">
          <form>
            {(() => {
              if(questions.length > 0 && step > 1){
                return <QuestionInput question={questions[step - 2]} handleSubmitChoice={this.handleSubmitChoice.bind(this)} />
              } else if (step === 0) {
                return <PlanInput handlePlanTitleSubmit={this.handlePlanTitleSubmit.bind(this)} />
              } else {
                return <SelectPrefectureForm options={this.options} handlePrefectureSubmit={this.handlePrefectureSubmit.bind(this)}/>
              }
            })()}
          </form>
          <div className="button_box">
            { step > 0 ? <button className="btn btn-primary btn_question left-button" onClick={this.handlePrevSubmit.bind(this)}> &lt;&lt; Prev</button> : false}
            { step - 1 < questions.length ? <button className="btn btn-primary btn_question right-button" onClick={this.handleNextSubmit.bind(this)}>Next &gt;&gt; </button> : false}
            { step - 1 === questions.length ? <button className="btn btn-primary btn_question right-button submit-btn" onClick={this.handlePlanSubmit.bind(this)}>Submit</button> : false}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  let { questions } = state.questions
  let { step } = state.step
  return { questions, step, state }
}

function mapDispatchToProps(dispatch){
  return {
    getQuestions: bindActionCreators(getQuestions, dispatch),
    nextStep: bindActionCreators(nextStep, dispatch),
    prevStep: bindActionCreators(prevStep, dispatch),
    preserveAnswer: bindActionCreators(preserveAnswer, dispatch),
    postPlans: bindActionCreators(postPlans, dispatch),
    resetStep: bindActionCreators(resetStep, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsPage)

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/questions';
import { nextStep, prevStep } from '../actions/step';
import QuestionInput from '../components/forms/QuestionInput';
import { preserveAnswer } from '../actions/answers'

class QuestionsPage extends Component {
  componentDidMount(){
    this.props.getQuestions()
  }

  handleNextSubmit(){
    this.props.nextStep()
  }

  handlePrevSubmit(){
    this.props.prevStep()
  }

  handleSubmitChoice(e){
    const $input = e.target
  }

  render() {
    let { questions, step } = this.props
    return(
      <div id="question_page">
        <div id="question_form">
          <form>
            {(() => {
              if(questions.length > 0){
                return <QuestionInput question={questions[step]} handleSubmitChoice={this.handleSubmitChoice.bind(this)} />
              }
            })()}
          </form>
          <div className="button_box">
            { step > 0 ? <button className="btn btn-primary btn_question" onClick={this.handlePrevSubmit.bind(this)}> &lt;&lt; Prev</button> : false}
            { step < questions.length - 1 ? <button className="btn btn-primary btn_question" onClick={this.handleNextSubmit.bind(this)}>Next &gt;&gt; </button> : false}
            { step === questions.length - 1 ? <button className="btn btn-primary btn_question">Submit</button> : false}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  let { questions } = state.questions
  let { step } = state.step
  return { questions, step }
}

function mapDispatchToProps(dispatch){
  return {
    getQuestions: bindActionCreators(getQuestions, dispatch),
    nextStep: bindActionCreators(nextStep, dispatch),
    prevStep: bindActionCreators(prevStep, dispatch),
    preserveAnswer: bindActionCreators(preserveAnswer, dispatch),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsPage)
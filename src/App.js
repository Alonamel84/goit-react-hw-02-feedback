import './App.css';
import Notification from './components/Notification/Notification.jsx';
import Section from './components/SectionTitle';
import FeadbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClick = e => {
    this.setState(prevState => {
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() !== 0
      ? Math.floor((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };
  render() {
    return (
      <>
        <Section title="Please leave feadback">
          <FeadbackOptions
            type="button"
            name={this.state}
            onLeaveFeedback={this.onClick}
          ></FeadbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>

        {this.countTotalFeedback() === 0 && <Notification />}
      </>
    );
  }
}
export default App;

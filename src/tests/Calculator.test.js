import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  });

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });


// calculator.add() - add 1 to 4 and get 5
  it('should be able to add', () => {
    const button1 = container.find('#number1');
    button1.simulate('click');

    const buttonAdd = container.find('#operator_add');
    buttonAdd.simulate('click');

    const button4 = container.find('#number4');
    button4.simulate('click');

    const buttonEquals = container.find('#operator-equals');
    buttonEquals.simulate('click');

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  });

// calculator.subtract() subtract 4 from 7 and get 3
  it('should be able to subtract', () => {
    const button7 = container.find('#number7');
    button7.simulate('click');

    const buttonSubtract = container.find('#operator-subtract');
    buttonSubtract.simulate('click');

    const button4 = container.find('#number4');
    button4.simulate('click');

    const buttonEquals = container.find('#operator-equals');
    buttonEquals.simulate('click');

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  });

// calculator.multiply() - multiply 3 by 5 and get 15
  it('should be able to multiply', () => {
    const button3 = container.find('#number3');
    button3.simulate('click');

    const buttonMultiply = container.find('#operator-multiply');
    buttonMultiply.simulate('click');

    const button5 = container.find('#number5');
    button5.simulate('click');

    const buttonEquals = container.find('#operator-equals');
    buttonEquals.simulate('click');

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
 });

//  calculator.divide() - divide 21 by 7 and get 3
  it('should be able to divide', () => {
    const button2 = container.find('#number2');
    button2.simulate('click');

    const button1 = container.find('#number1');
    button1.simulate('click');

    const buttonDivide = container.find('#operator-divide');
    buttonDivide.simulate('click');

    const button7 = container.find('#number7');
    button7.simulate('click');

    const buttonEquals = container.find('#operator-equals');
    buttonEquals.simulate('click');

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
 });

//  calculator.numberClick() - concatenate multiple number button clicks

  it('should be able to concatenate multiple number button clicks', () => {
    const button6 = container.find('#number6');
    button6.simulate('click');
    button6.simulate('click');
    button6.simulate('click');

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual;('666');
 });

// calculator.operatorClick() - chain multiple operations together
  it('should be able to chain multiple operations together', () => {  
    const button3 = container.find('#number3');
    button3.simulate('click');

    const buttonMultiply = container.find('#operator-multiply');
    buttonMultiply.simulate('click');

    const button5 = container.find('#number5');
    button5.simulate('click');

    const buttonEquals = container.find('#operator-equals');
    buttonEquals.simulate('click');

    const buttonAdd = container.find('#operator_add');
    buttonAdd.simulate('click');
    button5.simulate('click');

    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('20');   
  });

  // calculator.clearClick() - clear the running total without affecting the calculation

  it('should be able to clear running total without affecting the calculation  ', () => {
    const button5 = container.find('#number5');
    button5.simulate('click');

    const buttonAdd = container.find('#operator-add');
    buttonAdd.simulate('click');

    const button8 = container.find('#number8');
    button8.simulate('click');

    const buttonClear = container.find('#clear');
    buttonClear.simulate('click');

    const buttonAdd = container.find('#operator-add');
    buttonAdd.simulate('click');

    const button2 = container.find('#number2');
    button2.simulate('click');

    const buttonEquals = container.find('#operator-equals');
    buttonEquals.simulate('click');

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('7');

  });


});
   









import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Select from './select';

describe('Select Component', () => {
  let wrapper;
  let changeOptionStub;
  const options = [
    {
      'value': 'price',
      'text': 'Filtrar por preço'
    },
    {
      'value': 'name',
      'text': 'Filtrar por nome'
    },
  ];

  describe('When passing correct props to component', () => {

    beforeEach(() => {
      changeOptionStub = sinon.stub();
      wrapper = shallow(<Select whenChangeSelected={changeOptionStub} options={options} />);
    });

    describe('#Props', () => {

      describe('options', () => {
        test('should render "option" tag with each option passed', () => {
          expect(wrapper.find('option')).to.have.lengthOf(2);
        });

        test('should render "option" tag with text correct', () => {
          expect(wrapper.find('option').first().text()).to.be.equal('Filtrar por preço')
        });

        test('should call "whenOptionClick" when an option was clicked', () => {
          wrapper.find('select').simulate('change', { target: { value: options[1].value } });
          expect(changeOptionStub.calledWith({ value: options[1].value })).to.be.true;
        });
      });

    });

  });

});
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PageTitle from './page-title';

describe('Page Title Component', () => {
  let wrapper;
  const title = 'test';

  describe('When passing correct props to component', () => {
    beforeEach(() => {
      wrapper = shallow(<PageTitle title={title} />);
    });

    describe('#Props', () => {

      describe('title', () => {

        test('should render title prop inside h1', () => {
          expect(wrapper.find('h1').text()).to.be.equal(title)
        });

      });
    });

  });

});
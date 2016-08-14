import test from 'ava';
import {describe} from 'ava-spec';
import React from 'react';
import { shallow } from 'enzyme';
import LiveIndicator from '../';

describe('LiveIndicator', () => {
    test('should render a plain text string', t => {
        const wrapper = shallow(<LiveIndicator />);
        t.is(wrapper.text(), 'Hello World!');
    });
});

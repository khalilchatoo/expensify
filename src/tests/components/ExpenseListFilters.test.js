import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters 
			filters={filters}
			setTextFilter={setTextFilter}
			sortByDate={sortByDate}
			sortByAmount={sortByAmount}
			setStartDate={setStartDate}
			setEndDate={setEndDate}
		/>
	);
});

test('should render ExpenseListFilters correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with altFilters correctly', () => {
	wrapper.setProps({ filters: altFilters });
	expect(wrapper).toMatchSnapshot();
});

//should handle text change
test('should handle test change', () => {
	wrapper.find('input').simulate('change', { target: { value: '10' }});
	expect(setTextFilter).toHaveBeenLastCalledWith('10');
});

//should handle sort by date
test('should handle sort by date', () => {
	wrapper.find('select').simulate('change', { target: { value: 'date' }});
	expect(sortByDate).toHaveBeenCalled();
});

//should handle sort by amount
test('should handle sort by amount', () => {
	wrapper.find('select').simulate('change', { target: { value: 'amount' }});
	expect(sortByAmount).toHaveBeenCalled();
});

//should handle date changes
test('should handle date changes', () => {	
	wrapper.find(DateRangePicker).prop('onDatesChange')({
		startDate: 0,
		endDate: 1
	});
	expect(setStartDate).toHaveBeenLastCalledWith(0);
	expect(setEndDate).toHaveBeenLastCalledWith(1);
});

//should handle date focus changes
test('should handle date focus changes', () => {
	wrapper.find(DateRangePicker).prop('onFocusChange')('endDate');
	expect(wrapper.state('calendarFocused')).toBe('endDate');
});
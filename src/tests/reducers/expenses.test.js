import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state to', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expenses if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const expenseToAdd = {
		id: 4,
		description: 'Car Payment',
		note: 'Mercedes-Benz G550',
		amount: 15500000,
		createdAt: 0
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense: expenseToAdd
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expenseToAdd]);

});

test('should edit an expense', () => {
	const editedExpense = {
		id: expenses[1].id,
		description: 'test',
		note: 'test edit',
		amount: expenses[1].amount,
		createdAt: expenses[1].createdAt
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: editedExpense
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([ expenses[0], editedExpense, expenses[2]]);
});

test('should not edit an expense if expense not found', () => {
	const editedExpense = {
		id: expenses[1].id,
		description: 'test',
		note: 'test edit',
		amount: expenses[1].amount,
		createdAt: expenses[1].createdAt
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id: 0,
		updates: editedExpense
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});
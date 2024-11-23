import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos correctly', () => {
    render(<TodoList />);
    // Verify initial todos are displayed
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a project')).toBeInTheDocument();
  });

  test('allows users to add a new todo', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');

    // Simulate user adding a new todo
    fireEvent.change(inputElement, { target: { value: 'Write tests' } });
    fireEvent.click(addButton);

    // Verify the new todo is added
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('allows users to toggle a todo as completed or not completed', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    // Simulate toggling completion
    fireEvent.click(todoItem);

    // Verify todo is marked completed
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    // Simulate toggling back to not completed
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('allows users to delete a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0];

    // Simulate deleting a todo
    fireEvent.click(deleteButton);

    // Verify the todo is removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
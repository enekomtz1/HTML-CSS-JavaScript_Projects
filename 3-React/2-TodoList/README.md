
# Todo List

This Todo List application is built using React with Vite. It offers a simple and intuitive interface for managing daily tasks. Users can add new tasks, view a list of existing tasks, and delete them as needed.
## Screenshot

![TodoListScreenshot](https://i.imgur.com/lrKDJR3.png)
## TodoList.jsx Code Explanation
The Todo List app is developed using React and styled with CSS. It uses React's `useState` hook to manage state and React Icons for interactive UI elements.

- **State Management:** The `useState` hook initializes two state variables: `todos` (an array to store todo items) and `input` (a string to store the current input field value).

- **Adding Todos:** The `addTodo` function updates the `todos` array with a new item containing a unique `id` (generated by `generateId`) and the current `input` value, then clears the input field.

- **Removing Todos:** The `removeTodo` function filters out the todo item by its `id`, effectively removing it from the `todos` array.

- **Rendering:**
  - A text input field captures the user's input for new todos.
  - A button with a `+` icon (from `react-icons/sl`) adds the new todo to the list.
  - The list of todos is displayed below the input field, where each todo item has a button with an `x` icon to remove the todo from the list.

The component structure is simple, consisting of a main `div` container that includes the input group and the list of todos. Each todo is represented as an `li` element within a `ul`, styled and controlled with React.
## Lessons Learned

1. **Component Structure:** Keeping components simple and focused on a single responsibility enhances readability and maintainability. The Todo List app demonstrates this with separate functions for adding and removing todos, showing the importance of clear component segmentation.

2. **State Management:** Utilizing React's `useState` hook effectively to manage the application's state is crucial. In this project, `useState` is used to track the todo items and the input field's value, illustrating how to handle dynamic data within a React application.

3. **Event Handling:** Learning to handle events in React, such as adding a new todo or removing an existing one, is essential. This project shows the practical use of event handlers in React components to interact with user actions.

4. **Dynamic Rendering:** The ability to render lists dynamically based on state changes is a powerful feature of React. The app's use of the `map` function to display todos demonstrates how to render components based on an array's contents, updating the UI in response to state changes.

5. **CSS Integration:** Styling React components with CSS demonstrates the importance of visual design in user interface development. This project highlights how to use CSS effectively to enhance the functionality and user experience of a React application.

These lessons emphasize the importance of component design, state management, event handling, dynamic rendering, and styling in developing efficient and user-friendly React applications.
## Deployment
1. Clone the repository.
2. Install dependencies with
```bash 
npm install
```

3. Start the development server with
```bash 
npm run dev
```
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/enekomtz1)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enekomtz)

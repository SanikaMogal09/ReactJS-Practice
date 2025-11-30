# UseEffect

useEffect hook allows you to perform side effects in your componenets.
Some exmaples of side effects are: fetching data, directly updating the DOM etc

### Syntax
useEffcet(()={

});

### Remember 

1.  Without dependency array ==> callback function will run on every single render
2.  useEffect hook cannot be written within the conditional statements
3. With empty dependency array[' '] ==>it will only fire that function on the initial render
4. With empty dependency array[value] ==>as state changes that component will render and that callback function will fire

### Exercise - Understanding useEffect in React

#### Step 1: Basic Usage of `useEffect`

1. Create a new file called `BasicEffect.jsx`.
2. Inside this file, create a functional component called `BasicEffect`.
3. Use `useEffect` to log a message to the console whenever the component mounts (i.e., when it’s rendered the first time).

#### Step 2: `useEffect` with Dependencies

1. Create a new file called `CounterEffect.jsx`.
2. Inside this file, create a functional component called `CounterEffect`.
3. Use `useEffect` to update the document title whenever a counter value changes.
   - Initialize a `count` state with `0` using `useState`.
   - Render a button that increments the count.
   - Use `useEffect` to update the document title whenever `count` changes.

#### Step 3: `useEffect` for Fetching Data

1. Create a new file called `FetchDataEffect.jsx`.
2. Inside this file, create a functional component called `FetchDataEffect`.
3. Use `useEffect` to fetch data from an API when the component mounts.
   - Use the API endpoint `https://jsonplaceholder.typicode.com/posts` to fetch some data.
   - Store the data in a state variable and display the title of the first post.


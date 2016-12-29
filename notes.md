### ESLinter
  - for a new project, run the following command:
  - npm install --save-dev eslint-config-rallycoding (or any npm module that contains an eslint-config rule set)

### Difference between React & React Native
  - React
    - Knows how a component should behave
      - What functions it should have
    - Knows how to take a bunch of components and make them work together
  - React Native
    - Portal to the mobile device
      - Knows how to take the output from a component and place it on the screen
    - Provides default core components (image, text, view)

Only the 'root' component uses 'AppRegistry'
 - Every other component that the root component uses will be a 'child' component

### Styling
 - FlexBox
  - System of positioning elements within a container
  - justifyContent (positions in the vertical direction (up / down))
    - flex-end (push content to bottom of the container)
    - center (center of top/bottom)
    - flex-start (default - top of the container)
    - space-around
      - equalizes space between all elements (including space between top & bottom)
    - space-between
      - aligns first item to top, last item to bottom, equalizes space between all other elements
    - flex-direction
      - row
        - spaces items in the horizontal direction
      - column (Default)
        - spaces items in the vertical direction
  - alignItems (Positions horizontally (left/right))
    - flex-end (all the way right)
    - center
    - flex-start (default, all the way left)
  - Shadow
    - shadowOffset is the direction in which you want the shadow to appear
      - shadowOffset: { width: 0, height: 2 }
  - flex: 1
    - Expand to fill as much content as you can (within whatever container / parent component you're being rendered)

### Functional components
  - Only rule is that they must return some amount of JSX
  - Presenting static data
  - Can't be used for fetching data

### Class-based component
  - Used for dynamic data sources
  - Handles any data that might change
    - Fetching data, user events, etc.
  - Knows when it gets re-rendered

### Rules of Component State:
  - Definition: A plain Javascript object used to record and respond to user-triggered events.
  - When we need to update what a component shows, call this.setState({})
  - Only change via this.setState({}) not this.state

### Difference between state and props
  - Whenever we want to communicate from parent --> child, we use props.
  - State is for a component's internal record-keeping

## Redux
  - Why Redux?
    - Redux is the best way to maintain code organization as an application grows.
      - Code simplicity.
  - Reducer
    - A function that returns some data.
    - Never mutate state in a reducer. Instead, completely recreate it.
      - Golden rule: always return brand new objects in reducers.
    - E.g. return [...state, action.payload];
  - Action
    - Plain Javascript Object (curly braces)
    - An object that tells the reducer how to modify its data.
    - One requirement - must have a "type" property.
    - Action also typically has a "payload" property (the data you want it to act on).
  - State
    - Application's data.
    - Data for our app to use.
  - Store
    - An object that holds the application's data.
  - Redux.createStore() expects at least one Reducer function.
    - Whatever the reducer returns is our application state.
  - connect()
    - Allows a component to access application state.
    - E.g. export default connect()(ComponentName)
      - connect has two arguments
        - First argument is mapStateToProps
          - Pass in null if don't want to map anything to props.
        - Second argument is any action creators this Component needs to call
  - App starts
    - Store is created
    - Evaluate all Reducers in reducers/index.js to get initial application state.
    - "Provider" - this is new to me. Need to research further whether this is new to Redux or just wasn't covered in previous courses.
    - mapStateToProps returns an object which takes a portion of the application state and makes it locally available to the component via this.props
  - Redux convention to create a "types.js" file where you export the action types (instead of at top of actions/index.js)

### Async Redux (Redux Thunk)
  - Allows you to return a function instead of an action
    - Dispatches this function

### Routing Between Different Views
```
npm install --save react-native-router-flux
import { Scene } from 'react-native-router-flux
```
  - "key" prop identifies a particular screen
  - "component" prop tells what component / container to show
  - "title" prop gives a pre-built header with some special properties

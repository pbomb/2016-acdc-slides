// Import React
import React from "react";
import CodeSlide from 'spectacle-code-slide';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  S,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "./theme";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/prism-atom-dark.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1}>
              redux-saga and redux-effex
            </Heading>
            <Text textSize="1.5em" margin="20px 0 0" bold>
              What they are. How they're different.
            </Text>
            <Text textSize="1em" margin="20px 0 0" bold>
              Agile Central ⚡ Developers Conference 2016
            </Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1}>
              Where do you do async in your Redux?
            </Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} fit>
              React render
            </Heading>
            <Appear>
              <List>
                <ListItem>Synchronous</ListItem>
                <ListItem>Pure</ListItem>
                <ListItem>Props + State = Output</ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} fit>
              Redux Reducers
            </Heading>
            <Appear>
              <List>
                <ListItem>Synchronous</ListItem>
                <ListItem>Pure</ListItem>
                <ListItem>Action + State = Next State</ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} fit>
              Where does async go?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} fit>
              Action Creators?
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth={ 1200 }
            textSize="1.5rem"
            lang="js"
            code={ require("raw!../assets/examples/action-object.js") }
            color="secondary"
            ranges={[
              { loc: [0, 12] },
              { loc: [3, 10], note: "Returns simple action object" },
            ]}
          />
          <Slide transition={["slide"]}>
            <Heading size={1} fit>
              Redux Middleware
            </Heading>
          </Slide>
          <Slide transition={["fade"]}>
            <Heading size={1} fit>
              Agile Central Async Example
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth="85%"
            textSize="1.3rem"
            lang="js"
            code={ require("raw!../assets/examples/ca-agile-action.js") }
            ranges={[
              { loc: [0, 26] },
              { loc: [0, 6], note: "3 actions - Pending, Success, Failure" },
              { loc: [7, 13], note: "Example of one of those actions" },
              { loc: [14, 15], note: "Exported async action creator" },
              { loc: [15, 24], note: "Returns an action with metadata and callbacks" },
              { loc: [18, 19], note: "API call returns promise" },
              { loc: [19, 20], note: "Dispatches pending action" },
              { loc: [20, 21], note: "Dispatches success action" },
              { loc: [21, 22], note: "Dispatches failure action" }
            ]}
          />
          <Slide transition={["fade"]}>
            <Heading size={1} fit>
              Agile Central API Middleware
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth="85%"
            textSize="1.3rem"
            lang="js"
            code={ require("raw!../assets/examples/ca-agile-api-middleware.js") }
            ranges={[
              { loc: [0, 20] },
              { loc: [0, 1], note: "Action type that is handled by this middleware" },
              { loc: [2, 3], note: "Implements middleware API" },
              { loc: [3, 6], note: "Pass through all other actions" },
              { loc: [7, 11], note: "Get state and action metadata" },
              { loc: [12, 13], note: "Dispatches pending action" },
              { loc: [14, 15], note: "Calls API function" },
              { loc: [15, 16], note: "Dispatches success action" },
              { loc: [16, 17], note: "Dispatches failure action" }
            ]}
          />
          <Slide transition={["slide"]} fill>
            <Heading size={1} fit textSize="0.5rem">
              Agile Central Middleware Pros / Cons
            </Heading>
            <List fit>
              <ListItem textSize="2rem">+ Declarative</ListItem>
              <ListItem textSize="2rem">+ Easy to read</ListItem>
              <ListItem textSize="2rem">+ Easy to instrument</ListItem>
              <ListItem textSize="2rem">- Disjointed</ListItem>
              <ListItem textSize="2rem">- Inflexible</ListItem>
              <ListItem textSize="2rem">- Inconsistent</ListItem>
              <ListItem textSize="2rem">- Hard to compose</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} fit>
              Disjointed
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth="85%"
            textSize="1rem"
            lang="js"
            code={ require("raw!../assets/examples/disjointed-action.js") }
            ranges={[
              { loc: [0, 2], note: "Collapse project action - Mutate Action" },
              { loc: [4, 5], note: "Ensure getProjectPrefIdFromOid returns true" },
              { loc: [5, 10], note: "Can't assume getProjectPrefIdFromOid returned true. Must call it again." },
            ]}
          />
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} fit>
              Inflexible
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth="85%"
            textSize="1rem"
            lang="js"
            code={ require("raw!../assets/examples/inflexible-action.js") }
            ranges={[
              { loc: [0, 2], note: "Copy dashboard action - Mutate Action" },
              { loc: [14, 38], note: "Success action" },
              { loc: [24, 34], note: "Downshifts into redux-thunk to dispatch 2 actions" },
            ]}
          />
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} fit>
              Hard to compose
            </Heading>
            <Text margin={ "2rem 0 "}>
              What if we want to save a preference on success?
            </Text>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} fit>
              redux-saga
            </Heading>
            <Text margin={ "2rem 0 "}>
              Side-effect library for redux
            </Text>
          </Slide>
          <Slide transition={["slide"]}>
            <Text textSize="4rem" textColor="tertiary">
              <S type="bold">Sagas</S> are implemented as <S type="bold">Generator functions</S> that <S type="bold">yield objects</S> to the redux-saga middleware
            </Text>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} fit>
              How do generators work?
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth="85%"
            textSize="1rem"
            lang="js"
            code={ require("raw!../assets/examples/generators.js") }
            ranges={[
              { loc: [0, 10] },
              { loc: [0, 4], note: "Generator fn yields 2 values" },
              { loc: [5, 6], note: "Call generator. Does not execute fn body. Returns an iterator." },
              { loc: [7, 8], note: "Call gen.next(), gets first yielded value" },
              { loc: [8, 9], note: "Call gen.next(), gets second yielded value" },
              { loc: [9, 10], note: "Call gen.next(), generator is done" },
            ]}
          />
          <CodeSlide
            transition={[]}
            maxWidth="85%"
            textSize="1rem"
            lang="js"
            code={ require("raw!../assets/examples/saga.js") }
            ranges={[
              { loc: [0, 20] },
              { loc: [16, 20], note: "Execute saga everytime FETCH_DEFECTS is dispatched" },
              { loc: [4, 15], note: "Saga implmentation" },
              { loc: [6, 8], note: "Tell middleware to fetch defects" },
              { loc: [8, 10], note: "Tell middleware to dispatch DEFECTS_RECEIVED action" },
            ]}
          />
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} fit>
              How do we test the saga?
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth="85%"
            textSize="1rem"
            lang="js"
            code={ require("raw!../assets/examples/saga-test.js") }
            ranges={[
              { loc: [0, 4], note: "Generator function" },
              { loc: [5, 12], note: "Saga test" },
              { loc: [6, 7], note: "Setup mock defects" },
              { loc: [7, 8], note: "Call generator" },
              { loc: [9, 10], note: "Test next yielded value is defects fetch" },
              { loc: [10, 11], note: "Test next yielded value, given defects, dispatches action" },
              { loc: [11, 12], note: "Test generator is done" },
            ]}
          />
          <Slide transition={["slide"]}>
            <Heading size={1} fit textSize="0.5rem">
              redux-saga Pros / Cons
            </Heading>
            <List>
              <ListItem textSize="2rem">+ Declarative</ListItem>
              <ListItem textSize="2rem">+ ActionCreators always dispatch action objects</ListItem>
              <ListItem textSize="2rem">+ All side effects implemented as sagas</ListItem>
              <ListItem textSize="2rem">+ Easy to understand what side effect is doing</ListItem>
              <ListItem textSize="2rem">+ Easy to test / minimal mocking</ListItem>
              <ListItem textSize="2rem">+ Composing sagas is easy</ListItem>
              <ListItem textSize="2rem">- Generators & redux-saga API are complicated</ListItem>
              <ListItem textSize="2rem">- Does declarative indirection make static analysis harder?</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} fit>
              redux-effex
            </Heading>
            <Text textSize="2rem" margin={ "2rem 0 "}>
              Another side-effect library for redux
            </Text>
            <Text textSize="2rem" margin={ "2rem 0 "}>
              Simpler. Uses <S type="bold">async/await vs generators</S>.
            </Text>
            <Text textSize="2rem" margin={ "2rem 0 "}>
              Doesn't provide declarative effects fns.
            </Text>
          </Slide>
          <CodeSlide
            transition={[]}
            maxWidth="85%"
            textSize="1rem"
            lang="js"
            code={ require("raw!../assets/examples/effex.js") }
            ranges={[
              { loc: [0, 15] },
              { loc: [12, 15], note: "Execute side-effect everytime FETCH_DEFECTS is dispatched" },
              { loc: [3, 11], note: "Effect implmentation" },
              { loc: [5, 6], note: "Fetch defects" },
              { loc: [6, 7], note: "Dispatch DEFECTS_RECEIVED action" },
            ]}
          />
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} fit textSize="0.5rem">
              redux-effex Pros / Cons
            </Heading>
            <List>
              <ListItem textSize="2rem">+ ActionCreators always dispatch action objects</ListItem>
              <ListItem textSize="2rem">+ All side effects implemented as effects</ListItem>
              <ListItem textSize="2rem">+ Easy to understand what side effect is doing</ListItem>
              <ListItem textSize="2rem">+ async/await easier than generators</ListItem>
              <ListItem textSize="2rem">+ static analysis is straight-forward</ListItem>
              <ListItem textSize="2rem">+ Composing effects is easy</ListItem>
              <ListItem textSize="2rem">- Not as easy to test / requires more mocking</ListItem>
            </List>
          </Slide>
          <Slide transition={["spin", "slide"]}>
            <Heading size={1} caps fit lineHeight={1.5} textColor="secondary">
              Thanks!
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

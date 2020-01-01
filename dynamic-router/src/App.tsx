import React from 'react';
import './app.css';
import { topics } from "./constants/data";
import { Link, Route, useParams, Redirect, useRouteMatch } from "react-router-dom";

const Topics = () => {
  const match = useRouteMatch();
  return (
    <>
      <h1>Topics</h1>
      <h3>Topics</h3>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>
            <Link to={`${match.url}${topic.id}`}>
              {topic.name}
            </Link>
          </li>)
        )}
      </ul>
      <Route path={`${match.path}:topicId`}>
        <TopicWithResources />
      </Route>
    </>
  );
}

const TopicWithResources = () => {
  const match = useRouteMatch();
  console.log(match);
  const { topicId } = useParams<any>();
  const topic = topics.find(topic => topic.id === topicId);
  if (!topic) {
    return <Redirect to="/" />
  }
  return (
    <>
      <hr/>
      <h1>{topic.name}</h1>
      <p>{topic.description}</p>
      <h3>Resources</h3>
      {topic.resources.map(resource => (
          <li key={resource.id}>
            <Link to={`${match.url}/${resource.id}`}>
              {resource.name}
            </Link>
          </li>)
      )}
      <Route path={`${match.path}/:resourceId`}>
        <ResourceWithLink />
      </Route>
    </>
  );
}

const ResourceWithLink = () => {
  const { topicId, resourceId } = useParams<any>();
  const topic = topics.find(topic => topic.id === topicId);
  const resource = topic?.resources.find(resource => resource.id === resourceId);
  if (!topic || !resource ) {
    return <Redirect to={`/${topicId}`} />
  }
  return (
    <>
      <hr/>
      <h1>{resource.name}</h1>
      <p>{resource.description}</p>
      <a href={resource.url}>{resource.url}</a>
    </>
  );
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Route path="/">
        <Topics />
      </Route>
    </div>
  );
}

export default App;

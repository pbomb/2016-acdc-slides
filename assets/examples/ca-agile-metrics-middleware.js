import { startSpan } from '../ClientMetrics';

export default store => next => action => {
  const { type } = action;
  const span = startSpan({
    component: 'Dispatcher',
    description: `dispatching ${type}`
  });

  returnValue = next(action);
  span.end();
  return returnValue;
};


import inject from './script/hotjar';

export default function middlewareFactory (settings) {
  const actionType = 'trigger';

  if (!settings) {
    console.error('Hotjar settings for hjid and hjsv must be provided for redux-hotjar-trigger.');
    return store => next => action => {
      next(action);
    }
  }

  if (!hj) {
    inject(settings);
  }

  return store => next => action => {
    const hotjar = action && action.meta && action.meta.hotjar;
    if (hj && hj instanceof Function && hotjar && hotjar[actionType]) {
      hj(actionType, hotjar[actionType])
    }
    return next(action);
  };
}

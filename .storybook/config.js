
import { configure } from '@kadira/storybook';

function loadStories() {
    // OnOffSwitch is our example/template, so load it first to make it the default.
  const context = require.context('../app/stories/', false, /\.jsx?$/)
  context.keys().forEach(context)
}

configure(loadStories, module);

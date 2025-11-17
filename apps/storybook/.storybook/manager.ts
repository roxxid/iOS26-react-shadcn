import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'iOS26 React Components',
    brandUrl: 'https://github.com/your-username/ios26-react-shadcn',
  },
})


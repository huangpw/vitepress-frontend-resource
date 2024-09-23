import Theme from 'vitepress/theme'
import './vars.css'
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import 'vitepress-plugin-back-to-top/dist/style.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    vitepressBackToTop({
      // default
      threshold: 300,
    })
  },
}

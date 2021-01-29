import { extend, configure } from 'vee-validate'
import { required, min } from 'vee-validate/dist/rules'

extend('required', required)
extend('min', min)

export default function ({ app }) {
  configure({
    defaultMessage: (field, values) => {
      return app.i18n.t(`validation.${values._rule_}`, values)
    },
  })
}

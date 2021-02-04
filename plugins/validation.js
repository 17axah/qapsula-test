import { extend, configure } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

extend('required', required)
extend('email', email)

export default function ({ app }) {
  configure({
    defaultMessage: (field, values) => {
      return app.i18n.t(`validation.${values._rule_}`, values)
    },
  })
}

import Vue from 'vue'

function lowerCase(value) {
  return value.toLowerCase()
}

Vue.filter('lower', lowerCase)

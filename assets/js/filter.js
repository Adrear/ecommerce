// import fns from 'date-fns'

const dollars = num => `₴ ${num}`
// const timestamp = str => (str ? str.substr(0, 2) + ':' + str.substr(2, 2) : str)

// const date = (date) => {
//   return fns.format(date, 'DD/MM')
// }

// const dateFormat = date => date.split('-').reverse().join('-')

// const dateAndTime = (seconds) => {
//   const offset = new Date(seconds * 1000).getTimezoneOffset() * 60
//   const timestamp = new Date((seconds - offset) * 1000)
//   return fns.format(timestamp, 'DD/MM HH:mm')
// }

export {
  dollars
  // , timestamp, date, dateAndTime, dateFormat
}

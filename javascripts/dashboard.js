new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data() {
    return {
      allMessage: 123095,
      adminReply: 123081,
      startDate: null,
      startDateMenu: false,
      endDate: null,
      endDateMenu: false,
      replyIntervals: ['5 mins'],
      replyInterval: '5 mins',
      keywords: [
        { key: 'Electricity', value: 235 },
        { key: 'Water', value: 223 },
        { key: 'Swimming', value: 156 },
        { key: 'Breakfast', value: 98 },
        { key: 'Dinner', value: 86 },
        { key: 'Dinner', value: 86 },
      ],
    }
  }
})
// ts-check

function ReplyMessage(title, message, days, startTime, endTime) {
  this.title = title;
  this.message = message;
  this.days = days || ["Everyday"];
  this.startTime = startTime;
  this.endTime = endTime;
}

const MODE = {
  CREATE: "create",
  EDIT: "edit",
};

new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data() {
    return {
      mode: MODE.CREATE,
      startTime: null,
      startTimeMenu: false,
      endTime: null,
      primaryKeyword: "",
      additionalKeyword: "",
      message: "",
      endTimeMenu: false,
      replyMessages: [],
    };
  },
  methods: {
    submit() {
      const index = this.replyMessages.findIndex((r) => r.title === this.title);
      if (index >= 0) {
        return;
      }

      const replyMessage = new ReplyMessage(
        this.title,
        this.message,
        this.days,
        this.startTime,
        this.endTime
      );

      if (this.mode === MODE.CREATE) {
        this.replyMessages.push(replyMessage);
      }

      if (this.mode === MODE.EDIT) {
        this.replyMessage[index] = replyMessage;
      }
    },
  },
});

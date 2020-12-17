// ts-check

function ReplyMessage(title, message, days, startTime, endTime) {
  this.title = title;
  this.message = message;
  this.days = days;
  this.startTime = startTime;
  this.endTime = endTime;
}

const MODE = {
  CREATE: "Create",
  EDIT: "Save",
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
      title: "",
      days: [],
      message: "",
      endTimeMenu: false,
      replyMessages: [],
      selectedIndex: -1,
      deleteDialog: false,
      snackbar: false,
      snackbarText: ''
    };
  },
  methods: {
    changeMode(mode) {
      this.mode = mode;
    },
    newMessage() {
      this.startTime = null
      this.endTime = null
      this.title = ""
      this.days = []
      this.message = ""
      this.selectedIndex = -1

      this.changeMode(MODE.CREATE)
      this.showSnackBar('Created new keyword reply message')
    },
    showSnackBar(text) {
      this.snackbar = true
      this.snackbarText = text
    },
    selectMessage(i) {
      const replyMessage = this.replyMessages[i]
      if(!replyMessage) {
        return
      }
      this.startTime = replyMessage.startTime
      this.endTime = replyMessage.endTime
      this.title = replyMessage.title
      this.message = replyMessage.message
      this.days = replyMessage.days
      
      this.selectedIndex = i

      this.changeMode(MODE.EDIT)
    },
    deleteMessage() {
      this.replyMessages = this.replyMessages.filter((_, index) => index !== this.selectedIndex);

      this.newMessage()
      this.deleteDialog = false
      this.showSnackBar('Deleted auto reply message')
    },
    submit() {
      const newReplyMessage = new ReplyMessage(
        this.title,
        this.message,
        this.days,
        this.startTime,
        this.endTime
      );

      if (this.mode === MODE.CREATE) {
        this.replyMessages.push(newReplyMessage);
        this.newMessage()
        this.showSnackBar('Created new auto reply message')
      }

      if (this.mode === MODE.EDIT) {
        this.replyMessages[this.selectedIndex].title = this.title
        this.replyMessages[this.selectedIndex].message = this.message
        this.replyMessages[this.selectedIndex].days = this.days
        this.replyMessages[this.selectedIndex].startTime = this.startTime
        this.replyMessages[this.selectedIndex].endTime = this.endTime

        this.showSnackBar(`Saved auto reply message “${this.title}”`)
      }
    },
  },
});

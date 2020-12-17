// ts-check

function KeywordReplyMessage(primaryKeywords, additionalKeywords, message) {
  this.primaryKeywords = primaryKeywords || [];
  this.additionalKeywords = additionalKeywords || [];
  this.message = message || "";
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
      replyMessages: [],
      selectedIndex: -1,
      primaryKeywords: null,
      additionalKeywords: [],
      message: "",
    };
  },

  methods: {
    changeMode(mode) {
      this.mode = mode;
    },
    newMessage() {
      this.primaryKeywords = [],
      this.additionalKeywords = [],
      this.message = "",
      this.selectedIndex = -1,

      this.changeMode(MODE.CREATE);
    },
    selectMessage(i) {
      const replyMessage = this.replyMessages[i];
      if (!replyMessage) {
        return;
      }

      console.log(replyMessage)
      
      this.primaryKeywords = replyMessage.primaryKeywords,
      this.additionalKeywords = replyMessage.additionalKeywords,
      this.message = replyMessage.message,

      this.selectedIndex = i,

      this.changeMode(MODE.EDIT);
    },
    deleteMessage(i) {
      this.replyMessages = this.replyMessages.filter((_, index) => index !== i);

      this.newMessage();
    },
    submit() {
      const newReplyMessage = new KeywordReplyMessage(
        this.primaryKeywords,
        this.additionalKeywords,
        this.message,
      );

      if (this.mode === MODE.CREATE) {
        this.replyMessages.push(newReplyMessage);
        this.newMessage();
      }

      if (this.mode === MODE.EDIT) {
        this.replyMessages[this.selectedIndex].primaryKeywords = this.primaryKeywords;
        this.replyMessages[this.selectedIndex].additionalKeywords = this.additionalKeywords;
        this.replyMessages[this.selectedIndex].message = this.message;
      }
    },
  },
});

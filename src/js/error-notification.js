import { Stack, error, notice } from "@pnotify/core/dist/PNotify.js";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const notification = {
  noticeStackOptions: new Stack({
    dir1: "dawn",
    dir2: "right",
    firstpos1: 0,
    firstpos2: 10,
    maxStrategy: "close",
    maxClosureCausesWait: false,
    sticker: false,
  }),
  noticeOptions: {
    sticker: false,
    closer: false,
    delay: 2000,
  },
  errorTooManyResults() {
    error({
      title: "Too many matches found.",
      text: "Please enter a more specific query!",
      stack: this.noticeStackOptions,
      ...this.noticeOptions,
    });
  },
  errorNotFound() {
    error({
      title: "Not found.",
      text: "Please enter correct query!",
      stack: this.noticeStackOptions,
      ...this.noticeOptions,
    });
  },
  errorEmptyQueryInput() {
    notice({
      title: "The input field is empty.",
      text: "Start typing the country name.",
      stack: this.noticeStackOptions,
      ...this.noticeOptions,
    });
  },
  errorQuery() {
    error({
      title: "The request failed",
      text: "Please try again",
      stack: this.noticeStackOptions,
      ...this.noticeOptions,
    });
  },
};
export default notification;

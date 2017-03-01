/* eslint-disable */
import I from "immutable";

export default function singleReducer(state = I.Map(), action) {
  switch (action.type) {
  case "SET_REPO_INFO":
    if (action.data[0] === 200) {
      return state.set("badgeRepoInfo", action.data[1][0]);
    }
    return state.set("badgeRepoInfo", action.data[1]);
  case "SET_USER_INFO":
    if (action.data[0] === 403) {
      return state.set("badgeUserInfo", {
        login: "API rate limit exceeded",
        html_url: "https://developer.github.com/v3/rate_limit/"
      });
    }
    return state.set("badgeUserInfo", action.data[1]);
  case "SET_GRAPH_INFO":
    return state.set("badgeGraphInfo", action.data);
  case "SET_USERNAME":
    return state.set("username", action.data);
  case "SET_TEMP_USERNAME":
    return state.set("tempUsername", action.data);
  default:
    return state;
  }
}


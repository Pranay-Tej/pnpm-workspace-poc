import { store } from "@/store/appStore";

// utils can access current store with store.getState
function checkSomethingAboutUserPlan() {
  const state = store.getState();
  if (state.user.plan === "free") {
    // do something
  }
  // calculate something else
}

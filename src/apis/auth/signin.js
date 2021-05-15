import firebase from "firebase";

export function signin() {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().languageCode = "zh-TW";
  provider.setCustomParameters({
    hd: "gmail.com",
  });
  firebase.auth().signInWithRedirect(provider);
}

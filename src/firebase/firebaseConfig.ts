// 必要なSDKの関数をインポートします
import { initializeApp } from "firebase/app";
// 使用したいFirebase製品のSDKを追加します
// 詳細: https://firebase.google.com/docs/web/setup#available-libraries

// Firebaseのウェブアプリ設定
const firebaseConfig = {
    apiKey: "AIzaSyAGS_lYC_rFRk-tOHD54dc-Y2OKLWUO8Cc",
    authDomain: "slack-clone-9a107.firebaseapp.com",
    projectId: "slack-clone-9a107",
    storageBucket: "slack-clone-9a107.appspot.com",
    messagingSenderId: "730337044761",
    appId: "1:730337044761:web:f28228cbe915a424a53d88",
};
// Firebaseを初期化します
const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };

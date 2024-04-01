

src/
├─ app/                        # Redux設定
│  ├─ hooks.ts                 # Reduxのカスタムフック
│  └─ store.ts                 # Reduxストアの設定
│  │
├─ components/                 
│  ├─ ChatContainer/           
│  │  ├─ ChannelAddModal.tsx   # チャンネルを追加するモーダル
│  │  ├─ ChannelCell.tsx       # チャンネル名の表示
│  │  ├─ ChannelList.tsx       # チャンネルリスト、チャンネルを追加ボタン
│  │  ├─ MessageArea.tsx       # メッセージリスト、メッセージのフォーム
│  │  └─ MessageTile.tsx       # メッセージ1つの表示
│  ├─ ChatContainer.tsx        # 右側部分の表示
│  ├─ Login.tsx                # Googleでログイン
│  └─ Sidebar.tsx              # サイドバーの表示
│  
├─ features/                   # 機能ごとのReduxロジックとコンポーネント
│  ├─ auth/                    
│  │  ├─ auth.ts               # Firebase認証関連の関数（Googleログイン等）
│  │  └─ useAuthState.tsx      # 自動ログイン機能
│  ├─ channel/                 
│  │  ├─ channelAPI.ts         # チャンネルに関するAPI呼び出しの定義
│  │  └─ channelSlice.ts       # チャンネルのstate管理に関するRedux Sliceの定義
│  ├─ message/                 
│  │  └─ messageAPI.ts         # メッセージに関するAPI呼び出しの定義
│  └─ user/                    
│     ├─ userAPI.ts            # ユーザー情報に関するAPI呼び出しの定義
│     └─ userSlice.ts          # ユーザー情報のstate管理に関するRedux Sliceの定義
│
├─ firebase/                   # Firebase設定
│  └─ firebaseconfig.ts        
│
├─ types/                      # TypeScriptの型定義
│  ├─ Channel.ts               
│  ├─ Message.ts               
│  └─ User.ts          
│        
├─ index.css                   # グローバルスタイルシート
├─ index.tsx                   # アプリケーションのエントリーポイント
└─ App.tsx                     # アプリケーションのルートコンポーネント





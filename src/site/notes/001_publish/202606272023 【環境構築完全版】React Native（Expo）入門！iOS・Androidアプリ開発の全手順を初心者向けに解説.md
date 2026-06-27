---
{"dg-publish":true,"permalink":"/001-publish/202606272023-react-native-expo-i-os-android/","tags":["React Native","Expo","アプリ開発","モバイル開発"],"created":"2026-06-27T20:23:49.339+09:00","dg-note-properties":{"reviewed":true,"reviewed_at":"2026-06-28T08:18:19","rating":5,"memo":"iPadアプリを開発できる！しかもネイティブで使えそう！","tags":["React Native","Expo","アプリ開発","モバイル開発"]}}
---


![YouTube動画サムネイル](https://img.youtube.com/vi/TWUpzNGp7fI/maxresdefault.jpg)


<iframe id="yt-player" width="100%" height="400" src="https://www.youtube.com/embed/TWUpzNGp7fI?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowfullscreen style="margin-top: 15px;"></iframe>
<style>img[alt="YouTube動画サムネイル"] { display: none !important; }</style>


- 00:00 <https://youtu.be/TWUpzNGp7fI?t=0m0s> React Nativeとは？
    - JavaScript/TypeScriptを用いて、1つのコードからiOSとAndroidの両方のスマートフォンアプリを同時に作成できるフレームワーク。
    - メタ（旧Facebook）が開発・運用しており、高い信頼性と安定性を持つ。
    - 通常のネイティブ開発（iOSはSwift、AndroidはKotlin）では別々にコードを書く必要があり開発コストが2倍になるが、React Nativeであれば共通コードで爆速開発が可能。
- 03:55 <https://youtu.be/TWUpzNGp7fI?t=3m55s> Flutterとの比較
    - FlutterはGoogleが開発しており、Dartという言語を使用する。
    - React NativeはJavaScriptベースのためWeb開発者が参入しやすく、AI（CursorやClaudeなど）によるコード生成や学習量が圧倒的に多いため、AI駆動開発との親和性が非常に高い。
- 07:04 <https://youtu.be/TWUpzNGp7fI?t=7m4s> Expo（エキスポ）の概要と重要性
    - React Nativeの開発で生じる面倒な環境構築や設定を自動化し、劇的に簡単にしてくれるメタ推奨の必須級ツール。
    - 通常必要となるXcodeやAndroid Studioの複雑な初期設定をスキップし、Node.js環境があればコマンド一発でアプリ開発を数分でスタートできる。
    - アップデートの際、ネイティブ機能に触れないバグ修正等であれば審査を通さずに即時反映（OTAアップデート）が可能。
- 12:21 <https://youtu.be/TWUpzNGp7fI?t=12m21s> Expo Go と 開発用ビルド（Development Build）の違い
    - **Expo Go**：スマートフォンに専用アプリを入れるだけで、PCのQRコードを読み取って実機テストができる。学習やプロトタイプ開発に最適（カメラ、位置情報、通知など標準機能は網羅）。
    - **開発用ビルド**： RevenueCat（アプリ内課金）、高度なGoogle Map、Stripe決済など、外部のサードパーティ製ネイティブモジュールを使う場合に必要となる、自分専用のカスタムExpo環境。
    - **推奨ルート**：最初は手軽なExpo Goで開発をスタートし、高度な機能が必要になったタイミングで開発用ビルドへ移行するのがベスト。
- 22:25 <https://youtu.be/TWUpzNGp7fI?t=22m25s> Expoの初期セットアップ（共通手順）
    - コマンドライン（ターミナル）を開き、`npx create-expo-app@latest` を実行する。
    - アプリ名（例：`expo-test`）を入力すると、自動的に必要なNPMパッケージがダウンロードされ、数分でプロジェクトファイル一式が完成する。
- 26:29 <https://youtu.be/TWUpzNGp7fI?t=26m29s> MacでのiOSシミュレーター設定
    - App Storeから **Xcode** をインストール。
    - Xcodeの設定画面（Settings > Locations）から「Command Line Tools」をインストールする。
    - Componentsタブから最新の「iOS」シミュレーター（約10GB）をダウンロードする。
    - Xcodeのメニュー（Open Developer Tool > Simulator）から仮想のiPhoneを画面上に起動可能。
- 33:37 <https://youtu.be/TWUpzNGp7fI?t=33m37s> iOSシミュレーターでのアプリ起動とコード編集
    - VS Code等のエディタで作成したプロジェクトを開き、統合ターミナルで `npm run ios` を実行する。
    - **接続エラーの対処法**：ネットワーク環境によって同期が切れる場合は、公式ドキュメントに準じ、トンネルモードオプションを有効にした `npx expo start --tunnel` コマンドで起動を試みる。
    - `app/index.tsx` のテキストを書き換えると、ホットリロード機能により一瞬でシミュレーター側の画面に「Hello」などの変更が反映される。
    - プロジェクトをゼロから自作する際は、`npm run reset-project` を実行して初期のテンプレート表示を最小限のクリーンな状態に戻す。
- 44:20 <https://youtu.be/TWUpzNGp7fI?t=44m20s> Android Studioとエミュレーターの設定
    - 公式サイトからMacのCPU（Appleチップ/Intelチップ）に合わせて **Android Studio** をダウンロード。
    - 初期セットアップウィザード（Standard）に従い、Android SDKやエミュレーター基盤を導入する（規約にAcceptをチェックして完了）。
    - More Actions > Virtual Device Manager から仮想Android端末（Pixelなど）を起動する。
- 56:03 <https://youtu.be/TWUpzNGp7fI?t=56m3s> Androidエミュレーターでのアプリ起動
    - 事前にAndroidエミュレーターの電源を入れて立ち上げておく。
    - プロジェクトフォルダ内で `npm run android` もしくはネットワーク制限回避のため `npx expo start --tunnel` を起動し、ターミナル上で「a」キーを入力する。
    - 自動的にエミュレーター側に「Expo Go」がインストールされ、作成したアプリの画面が同期される。

---
**関連リンク**: [[JavaScript\|JavaScript]] [[TypeScript\|TypeScript]] [[iOSシミュレーター\|iOSシミュレーター]] [[Android Studio\|Android Studio]] [[クロスプラットフォーム開発\|クロスプラットフォーム開発]]

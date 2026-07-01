---
{"dg-publish":true,"permalink":"/000-inbox/202607012105-google-ai-studio/","created":"2026-07-01T21:06:34.552+09:00","dg-note-properties":{}}
---


![YouTube動画サムネイル](https://img.youtube.com/vi/0nTm5LDYhX0/maxresdefault.jpg)


<iframe id="yt-player" width="100%" height="400" src="https://www.youtube.com/embed/0nTm5LDYhX0?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowfullscreen style="margin-top: 15px;"></iframe>
<style>img[alt="YouTube動画サムネイル"] { display: none !important; }</style>


- 00:00 <https://youtu.be/0nTm5LDYhX0?t=0m0s> はじめに
    - Google AI Studioの始め方から応用までをステップバイステップで解説。
    - 英語の画面や複雑な設定項目に迷う初心者でも、本動画1本で操作方法が理解できる。
- 01:19 <https://youtu.be/0nTm5LDYhX0?t=1m19s> 本動画の主な内容（7つのトピック）
    1. Google AI Studioの基本的な使い方
    2. AIモデルの選び方
    3. 動画アップロード機能の活用法（ChatGPTにはない強み）
    4. 動画アップロード時のエラー対処法（Windows向け）
    5. 応用編：画面共有によるリアルタイム対話（最新機能）
    6. 地図操作（API連携）などの応用例
    7. データの取り扱い・セキュリティ上の注意点
- 03:06 <https://youtu.be/0nTm5LDYhX0?t=3m6s> 初期設定と基本的な使い方
    - 背景色の変更：黒い画面（ダークモード）から白い画面（ライトモード）への切り替え方法。
    - 日本語化：Google Chromeの翻訳機能を使って画面全体を日本語化。
    - 実行ショートカット：入力欄で「Ctrl + Enter」を押すことでプロンプトを送信。
- 04:02 <https://youtu.be/0nTm5LDYhX0?t=4m2s> 搭載モデルと設定項目
    - 通常のタスクでは「Gemini 1.5 Pro」を選択すれば性能面で安定する。
    - 「比較する（Compare）」機能を使うことで、2つの異なるモデルの出力結果や応答速度を左右に並べて同時に検証できる。
- 05:49 <https://youtu.be/0nTm5LDYhX0?t=5m49s> グラウンディング機能（ネット検索連携）
    - 設定をオンにすることで、最新のWeb情報を検索して回答に反映させることが可能。
    - 例：「東京の天気を教えて」と入力すると、ネット上の最新気象データを参照して正確な数値を返す。
- 06:24 <https://youtu.be/0nTm5LDYhX0?t=6m24s> プロンプトの保存先
    - 作成したプロンプト履歴は自動的に「Google ドライブ（マイドライブ内のGoogle AI Studioフォルダ）」に保存される。
    - ドライブ側でファイルを削除すると、Google AI Studioの履歴からも消去される。
- 07:13 <https://youtu.be/0nTm5LDYhX0?t=7m13s> Google AI Studioの強力なメリット
    - 無料で動画や画像を直接読み込ませることが可能。
    - 最大200万トークンという膨大なコンテキストウィンドウ（記憶容量）を持ち、長時間の動画や大量のデータを一度に処理できる。
- 07:56 <https://youtu.be/0nTm5LDYhX0?t=7m56s> 【重要】データ利用の注意点
    - 無料版で入力したデータは「Googleの製品改善（AIの学習）」に使用される可能性がある。
    - 企業秘密、機密情報、個人情報などは入力しないよう注意が必要（NotebookLMとは仕様が異なる）。
- 09:08 <https://youtu.be/0nTm5LDYhX0?t=9m8s> AIモデルの詳細比較
    - **Gemini 1.5 Pro**：ビジネスや普段使いで最も安定して複雑なタスクをこなせる。
    - **Gemini 1.5 Flash**：スピード重視の軽量モデル。
- 09:39 <https://youtu.be/0nTm5LDYhX0?t=9m39s> Gemini 2.0 Flash Experimentalの特徴
    - 最新の試験的運用モデルであり、高速かつ多機能。
    - プレビュー版モデルの中で唯一「グラウンディング（ネット検索）」に対応しているため、高機能かつ最新情報が必要な場合におすすめ。
- 11:24 <https://youtu.be/0nTm5LDYhX0?t=11m24s> Gemini Experimental 1206とその他のモデル
    - **Gemini Experimental 1206**：検証時点でAIベンチマークランキング1位の極めて高い知能を持つモデル。トークン容量も多く、動画処理にも最適で投稿者一押しのモデル。
    - **Gemini 2.0 Flash Thinking Experimental**：段階的に思考プロセスを経て回答するモデル（ランキング2位）。
- 12:18 <https://youtu.be/0nTm5LDYhX0?t=12m18s> 教育特化モデル「Ran LM 1.5 Pro Experimental」
    - 勉強のサポートや教育に特化したユニークなモデル。
    - システムインストラクションに役割を明記して使うことで、答えをすぐに教えるのではなく、ヒントを出してユーザーの気づきを促す優しい先生のような対話が可能。
- 15:08 <https://youtu.be/0nTm5LDYhX0?t=15m8s> おすすめモデルランキングと制限事項
    - 1位：Experimental 1206（ネット不要なら最強）
    - 2位：Gemini 2.0 Flash Exp（オールラウンダー・ネット検索対応）
    - 3位：Gemini 2.0 Flash Thinking（思考重視。ただし動画アップロードはトークン制限の関係で約30秒以下に限定されるため非推奨）
- 18:03 <https://youtu.be/0nTm5LDYhX0?t=18m3s> 動画ファイルを活用したコンテンツ制作デモ
    - MP4などの動画ファイルをドラッグ＆ドロップで直接読み込ませる。
    - 「動画の概要を作成して」「タイムスタンプ（チャプター）を作って」といった指示により、数分でYouTubeの概要欄やSEOに強いテキストを自動生成。
    - さらに、その内容をベースに「ブログ記事」や「X（旧Twitter）用の投稿ドラフト」へ瞬時に変換可能。
- 21:05 <https://youtu.be/0nTm5LDYhX0?t=21m5s> 動画アップロード時のエラー対処法
    - 動画ファイルが500MB〜600MBを超えると、容量オーバーで赤文字のエラーが出てアップロードできないことがある。
    - 対処法として、Windows標準の無料アプリ「Clipchamp（クリップチャンプ）」を使用し、画質を480p等に下げてエクスポートすることで、1GB未満（推奨は数百MB程度）に容量を圧縮して読み込ませる方法を紹介。
- 24:04 <https://youtu.be/0nTm5LDYhX0?t=24m4s> 応用編：マルチモーダルLive APIのデモ
    - リアルタイムでカメラ映像や音声、テキストを組み合わせたインタラクティブな対話が可能。
    - デモでは、カメラに映した指の数、指輪をしている指（薬指）、物体の認識（セブンイレブンのドリップコーヒー）を高速で判別し、Web検索を組み合わせて購入ページのURLまで提示する流れを実演。
- 27:42 <https://youtu.be/0nTm5LDYhX0?t=27m42s> 画面共有（スクリーン機能）の実用例
    - PCの画面（例：Googleスプレッドシート）をリアルタイムに共有しながらAIと会話。
    - 「SUM関数の計算結果が合わない」という問いに対し、数式の記述ミス（コロンの不足など）をAIが映像から即座に発見して修正案を提示する。
- 30:35 <https://youtu.be/0nTm5LDYhX0?t=30m35s> 高度な画像認識とJSON出力
    - 撮影された画像内の物体を認識するだけでなく、その位置情報を「JSON形式」と呼ばれるプログラムで扱いやすいデータとして出力可能。
    - これにより、社内システムや外部アプリとの開発連携が非常にスムーズになる。
- 31:51 <https://youtu.be/0nTm5LDYhX0?t=31m51s> Map Explorerと外部ツール連携の展望
    - システムインバウンドで「旅行代理店」の役割を与え、Google MapのAPIを呼び出して地図上に場所をピンポイントで示すデモ。
    - 今後は音声入力でGoogleカレンダーやGoogleマップ等との連携が強化され、「会議中に画面共有しながら、会話ベースでスケジュール登録や場所移動の予約を行う」といった業務効率化が現実的になる。
- 34:06 <https://youtu.be/0nTm5LDYhX0?t=34m6s> 企業におけるAI化とデータ蓄積の重要性
    - 事前にプロンプトへ会社の拠点情報などを組み込んでおくことで、マップやツール連携の精度が飛躍的に向上する。
    - AIの導入が早い企業ほど、非構造化データ（未整理の画像や動画）をAIによって構造化データ（JSON等）に変換・蓄積できるため、圧倒的なアドバンテージを得られる。
- 36:43 <https://youtu.be/0nTm5LDYhX0?t=36m43s> 【深掘り】有料化プランとデータ学習の仕組み
    - 「Pay as you go（従量課金）」を設定してクレジットカードを登録しても、それはプログラムから呼び出す「APIキーの利用」が有料になるだけであり、**Google AI Studioのウェブ画面上のリクエストは無料のままで、データは引き続き学習に使用される**。
    - 機密データを扱う場合は、AI Studioの画面を直接使うのではなく、有料プランが適用される「API経由で自社システムを組む」必要がある点に注意。
- 40:22 <https://youtu.be/0nTm5LDYhX0?t=40m22s> まとめ
    - 無料で使えるGoogle AI Studioは非常に強力だが、セキュリティ面を正しく理解し、社内機密情報を避けて公開データのみでプロンプトの試作を行うなどの工夫をして使いこなすのがベスト。
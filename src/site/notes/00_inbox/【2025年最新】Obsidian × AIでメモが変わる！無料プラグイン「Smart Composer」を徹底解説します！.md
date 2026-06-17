---
{"dg-publish":true,"permalink":"/00-inbox/2025-obsidian-ai-smart-composer/","created":"2026-06-17T10:54:06.746+09:00","dg-note-properties":{}}
---

# 

![YouTube動画サムネイル](https://img.youtube.com/vi/VspOkpPgE6c/maxresdefault.jpg)

- 00:00 <https://youtu.be/VspOkpPgE6c?t=0m0s> イントロダクション
    - 最近ローカル環境で動作するオフラインのメモツール「Obsidian」に注力している。
    - Notion（有料版のNotion AI）と比較した際、ObsidianにはAI機能がデフォルトで足りないのが弱点だった。
    - メモの作成、リライト、事前のリサーチにおいて現代のAIは必須ツールになりつつある。
    - 今回は、ObsidianでもNotion AIのようにAIを快適に使えるようにする方法を紹介する。
- 01:04 <https://youtu.be/VspOkpPgE6c?t=1m4s> 拡張機能プラグイン「Smart Composer」とは
    - 外部の生成AIのAPIをObsidianに引っ張ってくるためのハブとなるコミュニティプラグイン「Smart Composer」を使用する。
    - 導入手順：
        - 左下の「設定」＞「コミュニティプラグイン」を有効化する。
        - コミュニティプラグインの「閲覧」から「Smart Composer」を検索してインストールし、有効化する。
    - Smart Composerの主な機能：
        - **AIチャット機能**: ノートの右側にサイドバーとしてAIチャット画面を展開し、ChatGPTのように対話ができる。
        - **ノートへのアクション**: 今開いているメモに対して「要約」や「タスク（ネクストアクション）の抽出」を依頼できる。
        - **ボルトサーチ（Vault Search）**: Obsidian内のボルト（管理しているメモ全体）から情報を検索・参照してAIが回答を生成する。
        - **MCP（Model Context Protocol）対応**: 外部のAPIやサービスを操作する仕組みにも対応している（本動画では解説省略）。
- 03:25 <https://youtu.be/VspOkpPgE6c?t=3m25s> 実際の挙動と活用デモ
    - 導入すると、サイドバーに「魔法の杖」のようなマジックアイコンが表示され、チャット画面が開く。
    - デモ1：ドキュメントの要約とタスク抽出
        - 「このドキュメントを要約して」と指示を出すだけで、内容を数行でまとめてくれる。
        - 会議の議事録などから「ネクストアクションを箇条書きにして」と指示すると、タスクを綺麗に洗い出してくれる。
        - ネットが繋がっていれば、MacだけでなくiPadやスマートフォンでも同様に動作するため非常に強力。
    - デモ2：ドキュメントの書き換え機能（Apply機能）
        - チャットで「この構成案を話し言葉に書き換えてください」と指示。
        - AIが文章を出力した後、「Apply」ボタンを押すと、現在のノート上に変更差分がハイライト表示される。
        - 緑色のハイライトがAIによる修正案、赤色が元の文章。
        - 修正内容を1行ずつ確認しながら適用（Accept Incoming）できるほか、一括適用（Accept）やキャンセルも可能。
- 07:20 <https://youtu.be/VspOkpPgE6c?t=7m20s> プラグインの設定方法
    - 設定画面の「コミュニティプラグイン」＞「Smart Composer」から設定を行う。
    - 大きく分けて「チャットに使うモデルの選択（Chat）」「各生成AIのAPIを設定するプロバイダー（Providers）」「利用可能なカスタムモデルの追加」の3項目で構成される。
    - 無料である程度賢いAIモデルを使用したい場合、Googleが提供する「Gemini」が非常におすすめ。
    - 動画内（撮影時点：2025年6月）では、最新の「Gemini 2.5 Flash Preview」を利用するための設定手順を解説する。
- 09:18 <https://youtu.be/VspOkpPgE6c?t=9m18s> Google AI StudioでのAPIキー取得手順
    - 開発者向けのツールである「Google AI Studio」にアクセスする（Googleアカウントでログイン可能）。
    - 画面上部の「Get API key」をクリック。
    - プロジェクト一覧からAPIキーを作成・表示し、生成されたコード（APIキー）をコピーする。
    - Obsidianの「Smart Composer」設定に戻り、「Providers」内の「Gemini」の項目にある「API Key」欄にコピーした文字列を貼り付けて保存（セーブ）する。※Base URLは変更不要。
- 10:39 <https://youtu.be/VspOkpPgE6c?t=10m39s> 最新モデル（Gemini 2.5 Flash）のカスタム追加手順
    - デフォルトの状態だと最新モデルが選択肢に表示されない場合があるため、カスタムモデルとして手動で追加する。
    - Google AI Studioの右上「Run settings」から、現在提供されている最新モデルの正確な「ID」と「モデル名（Model Name）」を確認する。
        - 例：`gemini-2.5-flash-preview` などの文字列を確認。
    - Obsidianの設定下部にある「Add Custom Model」をクリック。
        - **Provider ID**: `gemini` を選択。
        - **ID**: AI Studioで確認したモデルのIDを入力。
        - **Model Name**: モデルの表示名を入力（小文字のハイフン繋ぎの正確な名前）。
    - 入力後「Add」を押し、設定画面上部に戻って「Chat Model」と「Apply Model」のプルダウンから、今追加した最新モデルを選択すれば設定完了。
- 14:32 <https://youtu.be/VspOkpPgE6c?t=14m32s> 生成AIを活用するマインドセットとまとめ
    - Smart Composerを導入することで、Notion AIのように手軽に、かつローカル環境のデータを保持したまま安全にAIを活用できる。
    - 生成AIの活用方法は人それぞれ無限にパターンが存在する。
    - 「自分には使いこなせない」と最初から諦めるのではなく、**「困ったときにいつでも試せる環境（引き出し）」をあらかじめ作っておくこと**が今の時代に非常に重要。
    - 具体的なプロンプトや使い方がわからない場合は、「このメモをあなた（AI）にどう質問したら上手く活用できますか？」とAI自身に運用のアイデアを聞いてみる実験の精神を持つのがおすすめ。
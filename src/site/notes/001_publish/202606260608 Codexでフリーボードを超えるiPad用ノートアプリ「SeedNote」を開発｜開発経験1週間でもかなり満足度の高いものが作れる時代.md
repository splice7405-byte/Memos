---
{"dg-publish":true,"permalink":"/001-publish/202606260608-codex-i-pad-seed-note-1/","tags":["AI/開発","iPad","アプリ開発","ノートアプリ","SeedNote"],"created":"2026-06-26T06:08:41.487+09:00","dg-note-properties":{"reviewed":true,"reviewed_at":"2026-06-26T06:10:29","rating":5,"memo":"Codexは使ってみたいなぁ。","tags":["AI/開発","iPad","アプリ開発","ノートアプリ","SeedNote"]}}
---


![YouTube動画サムネイル](https://img.youtube.com/vi/NJWrn8p4ulg/maxresdefault.jpg)


<iframe id="yt-player" width="100%" height="400" src="https://www.youtube.com/embed/NJWrn8p4ulg?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowfullscreen style="margin-top: 15px;"></iframe>
<style>img[alt="YouTube動画サムネイル"] { display: none !important; }</style>


- 00:00 <https://youtu.be/NJWrn8p4ulg?t=0m0s> オープニングと開発ツールの衝撃
    - 日本語の指示だけでWebアプリや自動生成アプリなどが驚くほど簡単に作れる時代になった。
    - コードやプログラミング言語が一切わからない初心者でも、使い始めて約1週間でiPad用の無限キャンバスノートアプリを開発することができた。
- 01:30 <https://youtu.be/NJWrn8p4ulg?t=1m30s> 自作アプリ「SeedNote（シードノート）」の紹介
    - 思考を整理する前の「アイデアの種」を自由に書き残せる、フリーボードのような無限キャンバス系ノートアプリ。
    - **主な特徴・機能：**
        - ノイズを減らした静かなUIで深い内性に集中できるデザイン（コーポレートカラーの緑を基調）。
        - Apple純正の開発キット（流用）により、純正メモやフリーボード並みに滑らかでスムーズな描き味を実現（ペンの種類やカラー変更も可能）。
        - 視認性の高いドット・空白の空間設計（ドットは薄めで主張が激しくない）。
        - タブによるノートの即時切り替えや、サイドバーからのノート呼び出しによる高い操作性。
        - 写真（画像）やPDF、AI（NotionやChatGPT）に即時共有・出力できる同線を確保。
- 03:56 <https://youtu.be/NJWrn8p4ulg?t=3m56s> 使用したAI開発ツール（Codex / Claude Code）
    - **メインツール：** 「Codex」（ChatGPTから開発要素を分けたようなアプリ）。基本開発はデスクトップアプリを使い無料範囲も活用しながら進行。
    - **補助ツール：** 「Claude Code」。設計の初期段階や、実装に詰まった時の壁打ち相手として適宜相談。
    - **使い分けのコツ：** クロードは丸投げした際のデザイン性やUI、コード品質が良いため、最初の設計やUIを整えてもらうのにおすすめ。どちらも完全に日本語のみで指示を出している。
- 05:10 <https://youtu.be/NJWrn8p4ulg?t=5m10s> 既存ノートアプリへの不満と開発経緯
    - **MapNote（マップノート）：** 挙動は気に入っていたが、フォルダ管理機能が使いづらく単品管理になってしまう課題があった。
    - **Apple純正フリーボード：** Apple PencilのツールバーUI（縦横に動く、主張が強い）や、ドットの主張が強すぎて目へのノイズとなり、使う気が失せてしまった。
    - **GoodNotes（グッドノーツ）：** 無限キャンバスはあるが色味が強かったり、機能が多すぎて判断に迷う。また、他のノートを開くために一度ホームへ戻る必要がある。
    - **結論：** アイデア出しの際のちょっとしたストレスやノイズをすべて排除し、書きたい時にすぐ制限なくスムーズに没頭できる「自分専用の理想のツール」を求めて自作に至った。
- 07:46 <https://youtu.be/NJWrn8p4ulg?t=7m46s> AIを駆使した具体的な開発フロー
    - **構想・壁打ち：** 最初からCodexに丸投げするのではなく、まずはChatGPTやGeminiなどの馴染み深いチャットAIと「iPad用のアプリを作りたいが遅延はどうか」など徹底的に壁打ちを行う。
    - **仕様書の作成：** AIにターゲット層や大事にしたいポイントを整理してもらい、最終的にCodexへコピペすればアプリが仕上がるレベルの「仕様書」をAIに作ってもらう。
    - **デザインの実装：** ChatGPTの画像出力を挟んでモックアップを作成し、そのカラー情報やデザイン情報を仕様書に落とし込むことで実装の精度を大幅に向上させた。
- 11:39 <https://youtu.be/NJWrn8p4ulg?t=11m39s> こだわりの機能と外部AI（ChatGPT等）との連携
    - **タブ＆サイドバー：** グッドノーツ等にもないフォルダのドロップダウン階層付きサイドバーを実装。関連する複数ノートへのアクセスがサクサク行える。
    - **AIとの連携同線：** 手書きのノートをボタン一つで画像出力し、そのままChatGPTやGeminiへ共有。手書き文字をAIに認識・解析・分析してもらう現代的なワークフローを構築。
- 13:47 <https://youtu.be/NJWrn8p4ulg?t=13m47s> 今後実装したい機能とリリースへの展望
    - アイデアの進行状況や工程を視認しやすくするため、タグ機能を応用した「ボードビュー（カンバン方式）」のレイアウトを取り入れたい。
    - ノート側にURLを貼り、直接特定のボードを開ける「内部リンク機能」の実装（AIからの提案）。
    - 自分用なら1日〜数日でアプリが作れる時代。このSeedNoteは安全管理の面をクリアした上で、将来的には正式にリリース（配布）したいと考えている。
- 15:57 <https://youtu.be/NJWrn8p4ulg?t=15m57s> エンディング
    - 開発経験がなくてもこれほどのクオリティのものが作れる驚きを共有。Codexは無料でも触れるため、ぜひ一度体験してみてほしいと締めくくった。

---
**関連リンク**: [[Codex\|Codex]] [[Claude Code\|Claude Code]] [[フリーボード\|フリーボード]] [[GoodNotes\|GoodNotes]] [[生成AI\|生成AI]] [[UI/UXデザイン\|UI/UXデザイン]]

---
{"dg-publish":true,"permalink":"/001-publish/202606171029-obsidian-claude-arscontexta/","tags":["Obsidian","AI","セカンドブレイン","ナレッジマネジメント","ツール","arscontexta","自動化"],"created":"2026-06-17T10:29:10.434+09:00","dg-note-properties":{"tags":["Obsidian","AI","セカンドブレイン","ナレッジマネジメント","ツール","arscontexta","自動化"],"reviewed":true,"reviewed_at":"2026-06-20T16:22:59","rating":4,"memo":"興奮度は高めだが、Cloudeを使わないので、ちょっとハードル高め。"}}
---




![YouTube動画サムネイル](https://img.youtube.com/vi/Gdzu3DDatlw/maxresdefault.jpg)


<iframe id="yt-player" width="100%" height="400" src="https://www.youtube.com/embed/Gdzu3DDatlw?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowfullscreen style="margin-top: 15px;"></iframe>
<style>img[alt="YouTube動画サムネイル"] { display: none !important; }</style>


- 00:00 <https://youtu.be/Gdzu3DDatlw?t=0m0s> オープニング＆セカンドブレインの本質
    - ノート同士のリンクこそがセカンドブレインの鍵。リンクが増えるほどAIが関連情報を芋づる式に集められるようになり、回答の質が上がる。
    - 手動でのリンク構築は面倒で挫折しがちだが、これをAIが全自動で行ってくれるClaudeプラグイン「arscontexta（アースコンテキストタ）」を紹介。
- 02:56 <https://youtu.be/Gdzu3DDatlw?t=2m56s> arscontextaの概念と3つの自動生成空間
    - 「Obsidian Skills」がツールの使い方を教える「ツール層（料理道具マニュアル）」であるのに対し、「arscontexta」は考え方を構造化させる「認知層（料理人の思考体系）」。
    - セットアップにより3つの空間が自動生成される：
        - セルフ空間：エージェントの記憶（AIのアイデンティティ、仕事の進め方など）
        - ナレッジ空間：ナレッジグラフの本体（3階層のナビゲーション構造：インデックス ➔ マップ ➔ アトミックノート）
        - オプス空間：運用管理（処理待ちのタスクやセッションの記録）
- 05:43 <https://youtu.be/Gdzu3DDatlw?t=5m43s> セットアップの3ステップ
    - ステップ1：Claude Codeでプラグインをインストール（約2分）
    - ステップ2：`/setup` コマンドでAIの質問（ドメインや管理したい知識）に日本語で回答し、システムを自動生成（約20分）
    - ステップ3：Claude CodeおよびObsidianを必ず再起動する（生成されたスキルやフックを有効化するため）
- 06:30 <https://youtu.be/Gdzu3DDatlw?t=6m30s> 内部パイプライン「6R」と日常運用
    - 内部では「Record, Reduce, Reflect, Reweave, Reverify, Resynk」の6段階処理が回る。
    - 人間が日常的に行うのは実質2ステップのみ：
        - 1. 指定されたフォルダ（インボックス等）に思いついたメモをプレーンテキストで放り込む（リンクやタグは不要）。
        - 2. `/ralph` コマンドを1回実行する（自動でアトミック化・既存ノートとのリンク構築・検証までを完結）。
- 09:21 <https://youtu.be/Gdzu3DDatlw?t=9m21s> 実装デモ：環境構築から自動リンク生成まで
    - まっさらなボルトからスタートし、CLI（Claude Code）でのプラグイン導入、日本語での対話型セットアップ、フォルダ群の自動生成プロセスを実演。
    - インボックスに入れた4つの簡単なメモに対し、Obsidian上（またはCLI）で `/ralph` コマンドを実行することで、自動的に「Notes」フォルダへ昇格しマップにリンクが構築される様子をデモ。
- 17:19 <https://youtu.be/Gdzu3DDatlw?t=17m19s> 1週間運用したリアルなグラフ構造と注意点
    - 1週間で約300後半のアトミックノートが自動構築された実際のグラフビューを公開。毎日約10ノートずつ自然に成長する。
    - 現時点では、Obsidianのプラグイン（Cloudean）経由よりも、ターミナル（CLI）からコマンドを実行した方が動作が安定する。
- 19:48 <https://youtu.be/Gdzu3DDatlw?t=19m48s> 既存ボルトからの移行（マイグレーション）への配慮
    - 既存のフォルダ構成やノートが壊れたり消えたりすることはない（新しくナレッジ・セルフ・オプス空間が追加されるだけ）。
    - 設定ファイル（`cloude.md`など）の競合を防ぐため、別ファイルとして出力させるプロンプトのコツを提示。
    - 大量にある既存ノートの一括取り込み（バッチ処理）の具体的手順は次回の動画で解説。
- 22:36 <https://youtu.be/Gdzu3DDatlw?t=22m36s> エンディング＆まとめ
    - arscontextaを導入することで、ただのノート置き場だったObsidianが「書けば書くほどAIが賢くなる本物のセカンドブレイン」へと循環し始める。

---
**関連リンク**: [[arscontexta\|arscontexta]] [[Claude Code\|Claude Code]] [[ナレッジグラフ\|ナレッジグラフ]] [[アトミックノート\|アトミックノート]] [[Obsidian活用術\|Obsidian活用術]]

---
{"dg-publish":true,"permalink":"/001-publish/202606210649-obsidian-ai-obsidian-bases/","tags":["Obsidian","AI","データベース","効率化"],"created":"2026-06-21T06:50:20.844+09:00","dg-note-properties":{"reviewed":true,"reviewed_at":"2026-06-21T07:29:54","rating":3,"memo":"Obsidianのデータベースについての動画。まだ、ここまでいけていないけど、データベース連携がきたら、Notionから完全に移行するかもしれません。現段階ではデータベースは単品の要です。","tags":["Obsidian","AI","データベース","効率化"]}}
---


![YouTube動画サムネイル](https://img.youtube.com/vi/2zFNBSnTscc/maxresdefault.jpg)


<iframe id="yt-player" width="100%" height="400" src="https://www.youtube.com/embed/2zFNBSnTscc?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowfullscreen style="margin-top: 15px;"></iframe>
<style>img[alt="YouTube動画サムネイル"] { display: none !important; }</style>


- 00:00 <https://youtu.be/2zFNBSnTscc?t=0m0s> オープニングと視聴者コメントへの回答
    - 優秀で妥協しない人間になるには：基準値を高く持つことが重要。基準値が高い人と同じ環境に身を置く、同じ行動を積み重ねる。
    - 前提やルールを疑う目：言われたことを鵜呑みにせず、自分の頭で考える習慣（アブダクション的な発想）。「糊＝物をくっつけるもの」という前提を疑ったことで「剥がせる糊（ポストイット）」が生まれた例。
- 02:51 <https://youtu.be/2zFNBSnTscc?t=2m51s> 今回のテーマ「AIでデータベースを構築する」
    - 視聴者のリクエストに応え、Obsidianの中にAIを使って自動でデータベースを構築する方法を解説。
- 03:23 <https://youtu.be/2zFNBSnTscc?t=3m23s> Obsidian Bases（データベース機能）の復習と課題
    - Obsidian Basesとは：2025年に登場した新機能。本、会議、音楽、プロジェクトなどのメモを一覧でデータベース化できる。
    - メリット：Notionのデータベース機能と比較して非常に高速・軽量で、ストレスフリーに動作する。
    - デメリット（従来の難点）：構築の難易度が高い。YAML形式での記述が必要で、スペースの数が1つズレるだけでエラーになる。独自関数（データ関数、ファイル関数など）やプログラミング・数式の専門知識が必要だった。
    - 現代の解決策：人間が覚える必要はなく、すべて学習済みの「AIエージェント」に指示をすれば作れる時代になった。
- 05:08 <https://youtu.be/2zFNBSnTscc?t=5m8s> AIエージェントにデータベースを作らせるための準備
    - 必要なツールは2つ：
        - 1. Obsidian Skills（PCにダウンロードして使用するスキルツール）
        - 2. Cloudian（右サイドバーでAIエージェントを呼び出せるプラグイン、Claude CodeやCodexなどを動作させる）
- 06:19 <https://youtu.be/2zFNBSnTscc?t=6m19s> 【実践1】画像を一覧表示するデータベースの構築
    - 手順：Cloudianを開いて「/（スラッシュ）」を入力し、Obsidian Basesのスキルを選択。フォルダ（例：02イメージ）を指定して「画像の一覧表示データベースを作って」と日本語で指示。
    - エラーへの対処法：画像表示は難易度が高く初期ビルドでエラー（型ファイルに関数が見つからない等）が出ることがあるが、その画面のスクリーンショットを貼り付け、公式ドキュメントのリンク等を提示して「直して」と指示するだけでAIが自動修正してくれる。
    - 追加の指示：「画像を大きくして」など、さらに日本語で要望を伝えるだけで綺麗にレイアウトが修正される。
- 08:48 <https://youtu.be/2zFNBSnTscc?t=8m48s> 【実践2】開いているファイルの関連リンク（2ホップリンク）を表示するデータベース
    - 手順：「2ホップリンク（関連リンク）を実現する、今開いているファイルの関連リンクを表示できるデータベースを作って」と指示。
    - 専門用語の活用：AIエージェントは非常に優秀なため、「2ホップリンク」のようなドメイン用語・専門用語をプロンプトに入れることで、より正確に意図を理解して構築してくれる。
    - エラー対応：エラーが出た場合も同様に、エラー画面をスクショして送るだけで数分で修正が完了する。
- 10:52 <https://youtu.be/2zFNBSnTscc?t=10m52s> 飯塚氏がよく使っているおすすめのデータベース活用方法
    - 作成したデータベースを「右サイドバー」に配置する。
    - ファイルを切り替えるだけで、一瞬でそのファイルに関連するリンクがサイドバー側に同期・表示される（Basesの軽量・高速さが活きる）。
    - 画像データベースを右サイドバーに置くことで、ノート作成時にいつでも素材をドラッグ＆ドロップで挿入可能になる。
    - 検索機能（虫眼鏡アイコン）を使って「チャット」と打てばChatGPTの画像、「クロード」と打てばClaudeの画像などを一瞬で呼び出せる。
- 11:45 <https://youtu.be/2zFNBSnTscc?t=11m45s> まとめとエンディング
    - Obsidian Skillsの登場により、人間が苦労して数時間かけてYAMLや関数を書かなくても、AIに日本語で指示・スクショで修正依頼を出すだけで、数分で強力なデータベースが構築できるようになった。
    - Obsidian Basesは動作が非常に高速・軽量であるため、ノートの右サイドバーや埋め込みとして活用するのがおすすめ。
---
**関連リンク**: [[Obsidian Bases\|Obsidian Bases]] [[Obsidian Skills\|Obsidian Skills]] [[Cloudian\|Cloudian]] [[YAML\|YAML]] [[AIエージェント\|AIエージェント]]

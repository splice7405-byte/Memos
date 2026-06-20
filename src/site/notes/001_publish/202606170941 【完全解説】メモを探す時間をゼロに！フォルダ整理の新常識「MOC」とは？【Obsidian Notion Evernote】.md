---
{"dg-publish":true,"permalink":"/001-publish/202606170941-moc-obsidian-notion-evernote/","tags":["Obsidian","知識管理","ノート術","生産性","タスク管理"],"created":"2026-06-17T09:41:53.519+09:00","dg-note-properties":{"tags":["Obsidian","知識管理","ノート術","生産性","タスク管理"],"reviewed":true,"reviewed_at":"2026-06-20T16:21:44","rating":4,"memo":"フォルダというものを使わないという整理の仕方。新しくて難しいな。"}}
---



![YouTube動画サムネイル](https://img.youtube.com/vi/WxbsNbZot_M/maxresdefault.jpg)


<iframe id="yt-player" width="100%" height="400" src="https://www.youtube.com/embed/WxbsNbZot_M?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowfullscreen style="margin-top: 15px;"></iframe>
<style>img[alt="YouTube動画サムネイル"] { display: none !important; }</style>


- 00:00 <https://youtu.be/WxbsNbZot_M?t=0m0s> 導入：メモ管理における「散らかる恐怖」とフォルダ依存
    - 多くの人がAppleのメモ帳や従来のアプリの癖で、Obsidianでもフォルダを大量に作って分類しようとしてしまう。
    - しかし、Obsidianでフォルダを細かく作りすぎる運用は挫折の原因になりやすい。
- 01:12 <https://youtu.be/WxbsNbZot_M?t=1m12s> なぜObsidianとフォルダ（分類）の相性が悪いのか？
    - 知識やアイデアをフォルダで管理しようとすると、以下の3つの大きな問題（相性の悪さ）が発生する。
    - 02:26 <https://youtu.be/WxbsNbZot_M?t=2m26s> ① コウモリ問題（分類の迷い）
        - 「イチゴ大福」をフルーツ、デザート、和菓子のどこに入れるか迷うように、複数の属性を持つアイデアをどこにしまうべきか悩んでしまう問題。
        - どこにしまうか悩むせいで、せっかくのひらめきをメモに残すこと自体を諦めてしまい、アイデアが窒息してしまう。
    - 03:34 <https://youtu.be/WxbsNbZot_M?t=3m34s> ② 君の縄（名）問題（フォルダ名の忘却）
        - フォルダが20〜30個と増えていくにつれ、「あのメモ、どのフォルダに入れたっけ？」「フォルダ名は何だっけ？」と思い出せなくなる問題。
    - 04:02 <https://youtu.be/WxbsNbZot_M?t=4m2s> ③ 再編が難しい（構造の硬直化）
        - フォルダ構成は一度ガチガチに固めると、後から構造を変えたり別の場所に移動したりする組織再編のような作業が非常に重労働になる。
        - 時間の経過とともに変化する知識やメモの性質と、硬直的なフォルダ構造は根本的に合わない。
- 05:00 <https://youtu.be/WxbsNbZot_M?t=5m0s> 解決策：フォルダではなく「サークル」を作れ
    - 05:47 <https://youtu.be/WxbsNbZot_M?t=5m47s> フォルダ（会社組織）とサークルの違い
        - 従来のフォルダ管理は「会社組織」と同じ。所属部署が厳格に決まっており、組織改編が難しい。
        - Obsidianで推奨されるのは「サークル活動」のイメージ。一人の人間（1つのメモ）がマラソンサークルとアルコールサークルを掛け持ちできるように、1つのメモが複数の文脈に属してよい。サークル自体が消滅しても、メンバー（メモ）自体は消えない。
    - 08:36 <https://youtu.be/WxbsNbZot_M?t=8m36s> MOC（Map of Contents = コンテンツの地図）という概念
        - メモとメモをリンクで緩く繋ぐことで、フォルダを使わずに階層構造やインデックスを表現する手法。
        - 1枚のメモを「入り口（地図）」にして、そこに関連するメモへのリンクを並べることで、知識のネットワークを整理する。
- 09:33 <https://youtu.be/WxbsNbZot_M?t=9m33s> ObsidianでのMOC実演
    - 1万以上のファイルをフォルダ分けせず、1つのフォルダに「服を脱ぎ散らかすよう」に保管していても、MOCがあれば問題なく見つけられる。
    - 10:14 <https://youtu.be/WxbsNbZot_M?t=10m14s> MOCファイルの具体例
        - ノートの先頭に「MOC-◯◯」と名前をつけ、その中に見出し（H2など）を作り、関連するノートの内部リンク `[[ノート名]]` をサークルのメンバーのように並べていく。
    - 11:22 <https://youtu.be/WxbsNbZot_M?t=11m22s> 検索機能を使った一括MOC作成テクニック
        - 1. Obsidianの検索（虫眼鏡）でキーワード（例：「Obsidian」）を検索する。
        - 2. 検索結果の「検索結果をコピー」ボタンを押し、リンク形式でまとめてクリップボードに取得する。
        - 3. MOC用のノートに一括貼り付けし、そこから見出しをつけて緩く分類していく。
- 14:10 <https://youtu.be/WxbsNbZot_M?t=14m10s> AIエージェント（Claude Code）を使ったMOCの自動生成
    - Obsidian内のAIプラグイン（Claude Code等）を活用し、「◯◯に関するMOCを作って」と指示するだけで、AIが自動でカテゴリー分けを行い、数十本以上のノートを分類したインデックス（地図）を一瞬で生成してくれる。
    - 人間は整理という非創造的な作業をAIに任せ、アウトプットに集中できるようになる。
- 17:08 <https://youtu.be/WxbsNbZot_M?t=17m8s> 結論とまとめ：知識と行動のフォルダ使い分け
    - アイデアや知識はフォルダという箱に閉じ込めず、リンク（MOC）によるネットワークで繋ぐことで脳の仕組みに近いベストな状態を作れる。
    - 18:03 <https://youtu.be/WxbsNbZot_M?t=18m3s> 唯一の例外：フォルダを使うべき「行動・アウトプット」
        - 知識の整理にはフォルダは不要だが、プロジェクトや具体的な行動（例：「ブログ記事」「YouTube台本」など）に関しては、フォルダを作って明確に格納・管理する方がおすすめ。
    - 18:51 <https://youtu.be/WxbsNbZot_M?t=18m51s> 「知識はネットワーク、行動はフォルダ」
        - 学んだことやアイデアはフォルダを気にせずどんどん書き散らし、リンクで繋ぐ。成果物やプロジェクトはフォルダで分けるという明確な使い分けが最強の運用となる。
- 19:12 <https://youtu.be/WxbsNbZot_M?t=19m12s> アフタートーク
    - MOC（Map of Contents）は海外のNick Milo（ニック・マイロ）氏が提唱した概念。
    - 海外のObsidianコミュニティの活発さや、今後の海外展開への展望について。

---
**関連リンク**: [[MOC\|MOC]] [[Map of Contents\|Map of Contents]] [[ナレッジマネジメント\|ナレッジマネジメント]] [[リンク基盤\|リンク基盤]] [[脱フォルダ管理\|脱フォルダ管理]] [[知識のネットワーク\|知識のネットワーク]]

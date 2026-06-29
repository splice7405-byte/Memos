---
{"dg-publish":true,"permalink":"/001-publish/202606300542-notebook-lm-pdf-google-ai-studio/","tags":["AI","NotebookLM","GoogleAIStudio","効率化","PowerPoint"],"created":"2026-06-30T05:42:50.274+09:00","dg-note-properties":{"reviewed":true,"reviewed_at":"2026-06-30T05:56:06","rating":3,"memo":"NotebookLMからの出力をいじるアプリを作る動画。確かに作った方が早そうだ。","tags":["AI","NotebookLM","GoogleAIStudio","効率化","PowerPoint"]}}
---


![YouTube動画サムネイル](https://img.youtube.com/vi/wWwfsBgjne4/maxresdefault.jpg)


<iframe id="yt-player" width="100%" height="400" src="https://www.youtube.com/embed/wWwfsBgjne4?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowfullscreen style="margin-top: 15px;"></iframe>
<style>img[alt="YouTube動画サムネイル"] { display: none !important; }</style>


- 00:00 <https://youtu.be/wWwfsBgjne4?t=0m0s> 導入・NotebookLMのPDF資料の課題
    - NotebookLMで作成されたスライドPDFはデザインが完璧だが、PDF形式であるため文字や図の修正・編集ができないという課題がある。
    - 過去の動画でいくつかの解決策（Geminiのキャンバス、Canva、ナノバナナ等）を紹介したが、デザインの崩れや手間、費用の面で一長一短だった。
    - 今回は「Google AI Studio」を使い、プログラミング知識ゼロ（バイブコーディング）で、PDFをPowerPoint（.pptx）に一瞬で編集可能な状態で変換するアプリを構築する方法を解説。
- 02:29 <https://youtu.be/wWwfsBgjne4?t=2m29s> 本編のロードマップ（3つのステップ）
    - ステップ1：Google AI Studioでアプリを構築
    - ステップ2：出力されたスライドの人間による微修正
    - ステップ3：Google AI Studioの機能・料金の解説
- 03:15 <https://youtu.be/wWwfsBgjne4?t=3m15s> ステップ1：Google AI Studioでアプリを構築
    - 構築手順
        - ブラウザで「Google AI Studio」にアクセスし、Googleアカウントでログインする。
        - 左側メニューから「Build（ビルド）」を選択。
        - 使用するAIモデルに「Gemini 3 Preview」（または最新モデル）を指定。
        - プロンプト欄に「PDFで出力されたスライドを元のデザインを維持したままパワーポイントに変換できるアプリを作って下さい」と入力しビルドボタンを押す。
    - エラーの修正（オートフィックス）
        - PDFアップロード時にエラー（failed to parse PDF file）が出た場合は、画面に表示される「Auto-fix」ボタンを押してAIに修正を依頼する。
        - 図がうまく出力されない不具合が発生した際も、追加のプロンプトで再修正を行う。
    - 変換結果の確認
        - 完成したアプリにPDFをアップロードすると、スライドを分割して自動変換が始まる。
        - 右上の「Download PPTX」からPowerPoint形式のファイルがダウンロードできる。
        - ダウンロードしたファイルは、テキストサイズの関係で一部改行位置の調整が必要なものの、文字も図もすべて「選択・編集可能」なオブジェクトとして認識されている。
    - アプリの保存
        - 左上の「Back to start」から元の画面に戻り、「Recently built」セクションにある作成履歴からアプリをピン留めすることで、後から再利用可能になる。
- 07:01 <https://youtu.be/wWwfsBgjne4?t=7m1s> ステップ2：出力されたスライドの微修正
    - テキストボックスはPowerPoint上で簡単に文字サイズなどを調整できる。
    - 図の中に文字が入り込んでしまいトリミングが難しい箇所は、画像生成AIの「ナノバナナ（Imagen）」等を活用する。
    - 修正対象の図をコピーしてGeminiのプロンプトに貼り付け、「画像左下の文字を取り除いてください」と指示を出して再生成することで、文字だけが綺麗に消去された画像を手に入れることができる。
- 08:00 <https://youtu.be/wWwfsBgjne4?t=8m0s> ステップ3：Google AI Studioの解説・料金プラン
    - Google AI Studioとは
        - Googleの最新AIであるGeminiを、プログラミングの知識なしで、対話形式により自分専用のツールとしてカスタマイズして構築できる開発者向けのプラットフォーム。
    - 利用できる多様なAIモデル
        - Gemini（テキスト・マルチモーダル）
        - Gemini 2.5（音声生成・TTS）
        - ナノバナナ / Imagen（画像生成）
        - Veo（動画生成）
    - 料金プラン
        - 無料プラン：アプリの構築やテストの多くを無料枠の範囲内で利用可能。ただし、利用回数（リクエスト数）に制限がある点と、入力データがGoogleのサービス向上のために利用される可能性がある点に注意。
        - 従量課金プラン：無料枠を超えた利用や、一部の有料限定モデルを使用したい場合に対象となる。通常の個人利用であれば無料枠でも十分すぎる回数が確保されている。
- 09:56 <https://youtu.be/wWwfsBgjne4?t=9m56s> まとめ
    - NotebookLMの弱点である「PDF出力（編集不可）」という壁を、Google AI Studioを駆使することでスマートに突破可能。
    - 自分専用の変換アプリを作成することで、資料作成の効率を劇的に向上させることができる。

---
**関連リンク**: [[Gemini\|Gemini]] [[PDF編集\|PDF編集]] [[業務効率化\|業務効率化]] [[画像生成AI\|画像生成AI]] [[ツール開発\|ツール開発]]

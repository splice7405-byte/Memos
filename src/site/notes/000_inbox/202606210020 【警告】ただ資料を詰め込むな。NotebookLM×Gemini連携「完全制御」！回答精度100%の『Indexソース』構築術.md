---
{"dg-publish":true,"permalink":"/000-inbox/202606210020-notebook-lm-gemini-100-index/","tags":["AI","NotebookLM","Gemini","ナレッジマネジメント","業務効率化"],"created":"2026-06-21T00:20:42.375+09:00","dg-note-properties":{"tags":["AI","NotebookLM","Gemini","ナレッジマネジメント","業務効率化"]}}
---



![YouTube動画サムネイル](https://img.youtube.com/vi/ZB-spUUZB3o/maxresdefault.jpg)
    
    
    <iframe id="yt-player" width="100%" height="400" src="https://www.youtube.com/embed/ZB-spUUZB3o?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowfullscreen style="margin-top: 15px;"></iframe>
    <style>img[alt="YouTube動画サムネイル"] { display: none !important; }</style>
    

- 00:00 <https://youtu.be/ZB-spUUZB3o?t=0m0s> はじめに：インデックスソースという考え方
    - ノートブックLMのビジネス活用における壁を突破する独自手法。
- 01:09 <https://youtu.be/ZB-spUUZB3o?t=1m9s> NotebookLM運用における課題
    - Gemini連携時、特定ソースのみを選択する機能がない（全参照される）。
    - ソースが増えると検索精度が低下し、AIが情報を無視するリスクが高まる。
    - ノートブックを細分化しすぎると運用が煩雑になる。
- 05:00 <https://youtu.be/ZB-spUUZB3o?t=5m0s> インデックスソースとは
    - Notebook内の情報参照ルールとアウトプット設計図を記した「指示書（ソース）」。
    - AIによる勝手な判断を防ぎ、必要な情報へ確実にアクセスさせるためのガードレール。
- 07:55 <https://youtu.be/ZB-spUUZB3o?t=7m55s> ファイル名称のルール化（必須）
    - インデックスソースと連動させるため、ファイル名を体系的に管理する。
    - 例：`連番_顧客名_(状態)_内容` のようにルール化し、AIが瞬時に識別できるようにする。
- 10:03 <https://youtu.be/ZB-spUUZB3o?t=10m3s> インデックスソースの基本構造
    1. 運営原則（システムガードレール）：制約事項やハルシネーション防止策。
    2. プロジェクト登録台帳：全体管理用。
    3. カテゴリー識別子：ソースの性質（基本、最新など）を定義。
    4. 参照整合性・更新ルール：情報の優先順位（最新を優先するなど）。
- 11:30 <https://youtu.be/ZB-spUUZB3o?t=11m30s> 特殊な命名規則とGeminiのバイアス対策
    - インデックスソースファイルには、`!_SystemRule_MustRead` のようにAIが最重要視する名前を付ける。
    - Geminiには「完結に回答する」という強いバイアスがあるため、パーソナル設定を活用してルールを強制する。
- 14:07 <https://youtu.be/ZB-spUUZB3o?t=14m7s> 実践デモ：インデックスあり・なしの比較
    - 適切に制御された環境では、要求通りの流度（精度）で正確な回答が得られる。
    - 未設定の場合は回答が要約されすぎたり、一部の情報が漏れたりする。
- 23:01 <https://youtu.be/ZB-spUUZB3o?t=23m1s> まとめ
    - 3重の対策（インデックスソース＋命名規則＋Geminiパーソナル設定）を組み合わせることで、大量のソースを安定して運用可能。


---
**関連リンク**: [[NotebookLM\|NotebookLM]] [[Gemini\|Gemini]] [[インデックスソース\|インデックスソース]] [[プロンプトエンジニアリング\|プロンプトエンジニアリング]] [[ハルシネーション対策\|ハルシネーション対策]] [[情報整理\|情報整理]]

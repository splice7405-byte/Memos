import { NextResponse } from 'next/server';

export const config = {
  // すべてのページ（画像等を除く）にこの認証ロジックを適用
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

export function middleware(req) {
  const basicAuth = req.headers.get('authorization');

  // 環境変数からパスワードを取得（未設定ならデフォルト値 'mypassword'）
  const CORRECT_PASSWORD = process.env.BASIC_AUTH_PASSWORD || 'mypassword';

  if (basicAuth) {
    try {
      const authValue = basicAuth.split(' ')[1];
      // デコード時に日本語や特殊文字でエラーが出ないよう安全に処理
      const decoded = atob(authValue);
      const [user, pwd] = decoded.split(':');

      // 【条件判定】
      // 1. ユーザー名（ID）が空欄であること
      // 2. パスワードが一致していること
      if (user === '' && pwd === CORRECT_PASSWORD) {
        return NextResponse.next(); // 認証成功、ページを表示
      }
    } catch (e) {
      // デコードエラーなどが起きた場合も念のため弾く
    }

    // 認証情報があるが、条件を満たさない（IDが入っている or パスワード間違い）場合はGoogleへ転送
    return NextResponse.redirect('https://www.google.com');
  }

  // 最初のアクセス時（まだ何も入力していない時）は、認証ポップアップを出す
  return new NextResponse('Authentication Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  // 認証を適用するページ（画像やファビコン、CSSなどの拡張子付きファイルは除外する設定）
  matcher: ['/((?!.*\\.).*)'],
};

export function middleware(req) {
  const basicAuth = req.headers.get('authorization');

  // 環境変数からパスワードを取得（未設定ならデフォルト値 'mypassword'）
  const CORRECT_PASSWORD = process.env.BASIC_AUTH_PASSWORD || 'mypassword';

  if (basicAuth) {
    try {
      const authValue = basicAuth.split(' ')[1];
      // デコード処理
      const decoded = atob(authValue);
      const [user, pwd] = decoded.split(':');

      // 【条件判定】IDが空欄、かつパスワードが一致
      if (user === '' && pwd === CORRECT_PASSWORD) {
        // 認証成功：何も返さずに処理をスルーさせることで、通常のページが表示されます
        return;
      }
    } catch (e) {
      // デコードエラーなどの対策
    }

    // 条件を満たさない（IDが入力されている or パスワード間違い）場合はGoogleへ転送
    return Response.redirect('https://www.google.com', 307);
  }

  // 最初のアクセス時は認証ポップアップを要求
  return new Response('Authentication Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

// config と matcher を完全に削除し、すべてのアクセスを強制的にキャッチします

export function middleware(req) {
  const url = new URL(req.url);

  // 【超重要】画像やスタイルシート、faviconなどのファイルを認証から除外する（これらを弾くとサイトが崩れるため）
  if (
    url.pathname.includes('.') || 
    url.pathname.startsWith('/_next')
  ) {
    return;
  }

  const basicAuth = req.headers.get('authorization');

  // 環境変数からパスワードを取得（未設定ならデフォルト値 'mypassword'）
  const CORRECT_PASSWORD = process.env.BASIC_AUTH_PASSWORD || 'mypassword';

  if (basicAuth) {
    try {
      const authValue = basicAuth.split(' ')[1];
      const decoded = atob(authValue);
      const [user, pwd] = decoded.split(':');

      // 【条件判定】IDが空欄、かつパスワードが一致
      if (user === '' && pwd === CORRECT_PASSWORD) {
        return; // 認証成功：ページを表示
      }
    } catch (e) {
      // エラー対策
    }

    // 条件を満たさない（ID入力あり or パスワード間違い）ならGoogleへ転送
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

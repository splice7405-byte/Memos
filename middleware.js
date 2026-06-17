// middleware.js

export default function middleware(request) {
  const url = new URL(request.url);

  // 画像やCSSなどの静的ファイル（ドットを含むパス）は認証をスルーして表示崩れを防ぐ
  if (url.pathname.includes('.')) {
    return;
  }

  const basicAuth = request.headers.get('authorization');
  // 環境変数からパスワードを取得（未設定ならデフォルト値 'mypassword'）
  const CORRECT_PASSWORD = process.env.BASIC_AUTH_PASSWORD || 'mypassword';

  if (basicAuth) {
    try {
      const authValue = basicAuth.split(' ')[1];
      const decoded = atob(authValue);
      const [user, pwd] = decoded.split(':');

      // 【条件判定】IDが空欄、かつパスワードが一致
      if (user === '' && pwd === CORRECT_PASSWORD) {
        return; // 認証成功：そのままページを表示
      }
    } catch (e) {
      // デコードエラー時などのフェイルセーフ
    }

    // IDが入力された、またはパスワード間違いの場合はGoogleへ強制転送
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

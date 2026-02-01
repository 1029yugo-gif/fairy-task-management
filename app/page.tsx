'use client';

export default function Home() {
      // middlewareがリダイレクトを処理するため、このページは表示されない
      return (
              <div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="text-gray-600">読み込み中...</div>
              </div>
            );</div>
}

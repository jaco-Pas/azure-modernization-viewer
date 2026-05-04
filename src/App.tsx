import './App.css'

function App() {
  return (
    <div className="app">
      <header>
        <h1>Azure Modernization Viewer</h1>
      </header>
      <section className="overview">
        <div className="card">
          <h2>概要</h2>
          <p>EBS周辺機能をAzureへ移行する設計ポートフォリオ。データフローの最適化とクラウドネイティブアーキテクチャの実現を目指す。</p>
        </div>
      </section>
      <section className="architecture">
        <h2>アーキテクチャフロー</h2>
        <div className="flow">
          <div className="step">上流システム</div>
          <div className="arrow">→</div>
          <div className="step">HULFT</div>
          <div className="arrow">→</div>
          <div className="step">Azure VM一時受信サーバ</div>
          <div className="arrow">→</div>
          <div className="step">ADLS Gen2</div>
          <div className="arrow">→</div>
          <div className="step">ADF</div>
          <div className="arrow">→</div>
          <div className="step">Azure Functions</div>
          <div className="arrow">→</div>
          <div className="step">Dataverse</div>
          <div className="arrow">→</div>
          <div className="step">承認</div>
          <div className="arrow">→</div>
          <div className="step">GL_INTERFACE</div>
          <div className="arrow">→</div>
          <div className="step">EBS GL</div>
        </div>
      </section>
      <section className="decisions">
        <h2>決定事項・未定事項</h2>
        <table>
          <thead>
            <tr>
              <th>項目</th>
              <th>決定事項</th>
              <th>未定事項</th>
              <th>理由</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>データ転送</td>
              <td>HULFTを使用</td>
              <td>セキュリティ設定</td>
              <td>既存システムとの互換性</td>
            </tr>
            <tr>
              <td>ストレージ</td>
              <td>ADLS Gen2</td>
              <td>データ保持期間</td>
              <td>コストとパフォーマンス</td>
            </tr>
            <tr>
              <td>処理</td>
              <td>Azure Functions</td>
              <td>スケーリング</td>
              <td>サーバーレスアーキテクチャ</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default App

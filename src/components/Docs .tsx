
function Docs() {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Documentation</h1>
        <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Start</h2>
            <div className="bg-black rounded-lg p-4">
              <pre className="text-zinc-300"><code>{`const client = new ColdEmailPro({
  apiKey: 'your-api-key'
});

const email = await client.generate({
  url: 'job-posting-url'
});`}</code></pre>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">API Reference</h2>
            <div className="space-y-4">
              <div className="border-b border-zinc-800 pb-4">
                <h3 className="font-medium mb-2">Generate Email</h3>
                <p className="text-zinc-400 mb-2">POST /api/generate-email</p>
                <p className="text-zinc-400">Generate a personalized cold email based on a job posting URL.</p>
              </div>
              <div className="border-b border-zinc-800 pb-4">
                <h3 className="font-medium mb-2">List Templates</h3>
                <p className="text-zinc-400 mb-2">GET /api/templates</p>
                <p className="text-zinc-400">Retrieve a list of available email templates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Docs;
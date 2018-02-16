window.fetch(`${BASE_URL}/api`)
.then(r => r.text())
.then(data => document.write(data))

$port = 8000
Write-Host "Launching static server on http://localhost:$port"
Write-Host "Press Ctrl+C to stop."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "python -m http.server $port"

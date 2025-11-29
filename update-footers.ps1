# PowerShell script to update footers in all HTML files

$files = @(
    "programs.html",
    "impact.html",
    "get-involved.html",
    "privacy.html",
    "terms.html"
)

$oldFooterPattern = '(?s)<div class="footer-bottom">.*?</div>\s*</div>\s*</footer>'

$newFooter = '<div class="footer-bottom">
        <div class="container" style="text-align: center;">
          <p class="footer-note">
            &copy; <span id="year"></span> AGEBETTER INITIATIVE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>'

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Processing $file..."
        $content = Get-Content $file -Raw -Encoding UTF8
        
        $content = $content -replace $oldFooterPattern, $newFooter
        $content = $content -replace '\+234\s*\(0\)\s*\d{3}\s*\d{3}\s*\d{4}', 'agebetter@agebetterinitiative.name.ng'
        $content = $content -replace '12B Adeola Odeku (Street|St)[,\s]*Victoria Island[,\s]*Lagos,?\s*Nigeria', 'Nigeria'
        
        $content | Set-Content $file -Encoding UTF8
        Write-Host "Updated $file" -ForegroundColor Green
    } else {
        Write-Host "File not found: $file" -ForegroundColor Red
    }
}

Write-Host "Completed" -ForegroundColor Cyan

# PowerShell script to REMOVE Careers link from navigation in all HTML files

$htmlFiles = Get-ChildItem -Path "c:\Users\hp\Desktop\instaura\static_export" -Filter "*.html" -File

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Remove Careers link from desktop/mobile navigation
    # Matches the specific block we extended or similar variations
    
    # Pattern 1: Desktop/Mobile link removal
    $content = $content -replace '<a href="careers\.html"[^>]*>Careers</a>\s*', ''
    
    # Pattern 2: Footer link removal (li format)
    $content = $content -replace '<li><a href="careers\.html"[^>]*>Careers</a></li>\s*', ''
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "Cleaned: $($file.Name)"
}

Write-Host "`nCompleted! Careers link removed from all HTML files."

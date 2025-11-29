#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script to update organization information across all HTML files
"""

import os
import re
from pathlib import Path

# Organization information
ORG_NAME = "AGEBETTER INITIATIVE"
RC_NUMBER = "8977104"
EMAIL = "agebetter@agebetterinitiative.name.ng"

# Files to update
html_files = [
    "index.html", "about.html", "programs.html", "impact.html",
    "get-involved.html", "contact.html", "privacy.html", "terms.html"
]

def remove_phone_sections(content):
    """Remove phone number sections"""
    # Remove phone article in contact page
    content = re.sub(
        r'<article class="contact-detail">[\s\S]*?<h3>Phone</h3>[\s\S]*?</article>\s*',
        '',
        content,
        flags=re.MULTILINE
    )
    
    # Remove phone mentions in text
    content = re.sub(r'\+234\s*\(\d\)\s*\d{3}\s*\d{3}\s*\d{4}', 'Email: ' + EMAIL, content)
    content = re.sub(r'phone:|Phone:', 'Email:', content, flags=re.IGNORECASE)
    content = re.sub(r'call our.*?office.*?directly', 'contact us via email', content, flags=re.IGNORECASE)
    
    return content

def remove_social_media(content):
    """Remove social media links"""
    # Remove social links sections
    content = re.sub(
        r'<div class="socials">[\s\S]*?</div>\s*<p class="footer-note">',
        '<p class="footer-note" style="text-align: center; margin: 0;">',
        content,
        flags=re.MULTILINE
    )
    
    content = re.sub(
        r'<div class="social-connect">[\s\S]*?</div>\s*</div>',
        '</div>',
        content,
        flags=re.MULTILINE
    )
    
    # Fix footer structure
    content = re.sub(
        r'<div class="footer-bottom">[\s\S]*?<div class="container">[\s\S]*?</div>[\s\S]*?</div>',
        '''<div class="footer-bottom">
        <div class="container" style="text-align: center;">
          <p class="footer-note">
            © <span id="year"></span> AGEBETTER INITIATIVE. All rights reserved.
          </p>
        </div>
      </div>''',
        content,
        flags=re.MULTILINE
    )
    
    return content

def update_address(content):
    """Update address to generic"""
    content = re.sub(
        r'12B Adeola Odeku Street<br>\s*Victoria Island<br>\s*Lagos, Nigeria',
        'Nigeria',
        content
    )
    content = re.sub(
        r'12B Adeola Odeku St, Victoria Island, Lagos',
        'Nigeria',
        content
    )
    return content

def update_faq(content):
    """Update FAQ to remove phone questions"""
    # Remove phone-related FAQ
    content = re.sub(
        r'<article class="faq-item">[\s\S]*?phone[\s\S]*?</article>',
        '',
        content,
        flags=re.IGNORECASE
    )
    return content

def process_file(filepath):
    """Process a single HTML file"""
    print(f"Processing {filepath}...")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Apply all transformations
        content = remove_phone_sections(content)
        content = remove_social_media(content)
        content = update_address(content)
        content = update_faq(content)
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ Updated {filepath}")
        return True
    except Exception as e:
        print(f"✗ Error processing {filepath}: {e}")
        return False

def main():
    """Main function"""
    print(f"Updating files with organization info:")
    print(f"  Name: {ORG_NAME}")
    print(f"  RC: {RC_NUMBER}")
    print(f"  Email: {EMAIL}")
    print()
    
    success_count = 0
    for filename in html_files:
        if os.path.exists(filename):
            if process_file(filename):
                success_count += 1
        else:
            print(f"⚠ File not found: {filename}")
    
    print()
    print(f"Completed: {success_count}/{len(html_files)} files updated")

if __name__ == "__main__":
    main()


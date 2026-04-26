from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.enums import TA_LEFT, TA_CENTER

NAVY = colors.HexColor('#1a2744')
GOLD = colors.HexColor('#B8960C')
LIGHT_GRAY = colors.HexColor('#f8f9fa')
MID_GRAY = colors.HexColor('#6c757d')
WHITE = colors.white

OUTPUT_PATH = "C:/Users/kenls/marias-website-project/Maria-Website-Directory.pdf"

doc = SimpleDocTemplate(
    OUTPUT_PATH,
    pagesize=letter,
    rightMargin=0.75 * inch,
    leftMargin=0.75 * inch,
    topMargin=0.75 * inch,
    bottomMargin=0.75 * inch,
)

styles = getSampleStyleSheet()

title_style = ParagraphStyle('CustomTitle', parent=styles['Title'], fontSize=22, textColor=WHITE, alignment=TA_CENTER, spaceAfter=4, fontName='Helvetica-Bold')
subtitle_style = ParagraphStyle('Subtitle', parent=styles['Normal'], fontSize=10, textColor=GOLD, alignment=TA_CENTER, spaceAfter=0, fontName='Helvetica')
section_title_style = ParagraphStyle('SectionTitle', parent=styles['Normal'], fontSize=13, textColor=WHITE, fontName='Helvetica-Bold', spaceAfter=0, spaceBefore=0)
label_style = ParagraphStyle('Label', parent=styles['Normal'], fontSize=9, textColor=GOLD, fontName='Helvetica-Bold', spaceAfter=1)
value_style = ParagraphStyle('Value', parent=styles['Normal'], fontSize=10, textColor=NAVY, fontName='Helvetica', spaceAfter=6)
note_style = ParagraphStyle('Note', parent=styles['Normal'], fontSize=9, textColor=MID_GRAY, fontName='Helvetica-Oblique', spaceAfter=4)
footer_style = ParagraphStyle('Footer', parent=styles['Normal'], fontSize=8, textColor=MID_GRAY, alignment=TA_CENTER, fontName='Helvetica')
intro_style = ParagraphStyle('intro', parent=styles['Normal'], fontSize=10, textColor=MID_GRAY, alignment=TA_CENTER, fontName='Helvetica-Oblique')

def make_header():
    header_data = [
        [Paragraph("Maria's Website", title_style)],
        [Paragraph("Account &amp; Service Directory", title_style)],
        [Paragraph("Maria Navin-Lassiter | Century 21 Real Estate | Denver, CO", subtitle_style)]
    ]
    t = Table(header_data, colWidths=[7 * inch])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), NAVY),
        ('TOPPADDING', (0, 0), (-1, 0), 18),
        ('BOTTOMPADDING', (0, -1), (-1, -1), 18),
        ('LEFTPADDING', (0, 0), (-1, -1), 12),
        ('RIGHTPADDING', (0, 0), (-1, -1), 12),
    ]))
    return t

def make_section(number, title, rows, note=None):
    elements = []
    header_data = [[Paragraph(f"{number}   {title}", section_title_style)]]
    header = Table(header_data, colWidths=[7 * inch])
    header.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), NAVY),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('LEFTPADDING', (0, 0), (-1, -1), 12),
        ('RIGHTPADDING', (0, 0), (-1, -1), 12),
    ]))
    elements.append(header)

    content_rows = []
    for label, value in rows:
        content_rows.append([Paragraph(label.upper(), label_style), Paragraph(value, value_style)])
    if note:
        content_rows.append([Paragraph('', label_style), Paragraph(f"* {note}", note_style)])

    content = Table(content_rows, colWidths=[1.6 * inch, 5.4 * inch])
    content.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), LIGHT_GRAY),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('LEFTPADDING', (0, 0), (0, -1), 12),
        ('LEFTPADDING', (1, 0), (1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 12),
        ('LINEBELOW', (0, 0), (-1, -2), 0.3, colors.HexColor('#dee2e6')),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    elements.append(content)
    elements.append(Spacer(1, 10))
    return elements

story = []
story.append(make_header())
story.append(Spacer(1, 16))
story.append(Paragraph("Keep this document somewhere safe — it has everything you need to manage Maria's website.", intro_style))
story.append(Spacer(1, 16))

# ── Sections ──
story += make_section("🐙", "GitHub — Code Storage", [
    ("What it is", "Stores all the website code"),
    ("Website", "github.com"),
    ("Username", "eugenekenny"),
    ("Email", "kenlssiter@gmail.com"),
    ("Your Repo", "github.com/eugenekenny/marias-website-project"),
])

story += make_section("🚀", "Vercel — Website Hosting", [
    ("What it is", "Hosts Maria's live website — auto-updates when you push to GitHub"),
    ("Website", "vercel.com/dashboard"),
    ("Login", "Sign in with GitHub (eugenekenny)"),
    ("Project", "marias-website-project"),
    ("Live Site (Vercel)", "marias-website-project.vercel.app"),
    ("Live Site (Domain)", "www.mariacoloradorealty.com"),
])

story += make_section("🌐", "Domain — mariacoloradorealty.com", [
    ("What it is", "Maria's professional domain name"),
    ("Registrar", "Namecheap.com"),
    ("Login Email", "kenlssiter@gmail.com"),
    ("Domain", "mariacoloradorealty.com"),
    ("Expires", "April 26, 2027"),
    ("Auto-Renew", "ON"),
    ("Privacy", "Domain Privacy Protection is ON"),
])

story += make_section("📧", "Email — maria@mariacoloradorealty.com", [
    ("What it is", "Maria's professional email address"),
    ("Provider", "Namecheap Private Email (Starter plan)"),
    ("Email Address", "maria@mariacoloradorealty.com"),
    ("Password", "vrdLs/8_EE2wY6_"),
    ("Webmail Login", "privateemail.com"),
    ("Plan", "Starter — $14.88/yr after free trial (trial ends May 26, 2026)"),
    ("Storage", "5 GB"),
])

story += make_section("📨", "Email Forwarding — contact@mariacoloradorealty.com", [
    ("What it is", "Professional contact email that forwards leads to your Gmail"),
    ("Email Address", "contact@mariacoloradorealty.com"),
    ("Forwards To", "kenlssiter@gmail.com"),
    ("Set Up Via", "Namecheap Private Email — Alias/Forwarder"),
    ("Purpose", "Used by the website contact form — you review leads before Maria sees them"),
])

story += make_section("📬", "Formspree — Contact Form", [
    ("What it is", "Powers the contact form — sends leads to your email"),
    ("Website", "formspree.io"),
    ("Login Email", "kenlssiter@gmail.com"),
    ("Form Name", "Maria's Contact Form"),
    ("Form ID", "xpqkezor"),
    ("Leads Go To", "contact@mariacoloradorealty.com → kenlssiter@gmail.com"),
])

story += make_section("📧", "Gmail — Your Lead Management", [
    ("What it is", "Where all contact form submissions land for you to review"),
    ("Website", "gmail.com"),
    ("Email", "kenlssiter@gmail.com"),
    ("Labels Set Up", "Maria's Leads  (Hot / Warm / Cold / Passed to Maria)"),
    ("Forward Good Leads To", "marianavinlassiter1966@gmail.com"),
])

story += make_section("📧", "Gmail — Maria's Personal Email", [
    ("What it is", "Maria's existing Gmail — for forwarding approved leads"),
    ("Email", "marianavinlassiter1966@gmail.com"),
], note="Do not share her login — just forward emails to this address.")

story += make_section("💻", "GitHub CLI (gh) — Computer Tool", [
    ("What it is", "Connects Claude Code on your computer to GitHub"),
    ("Installed On", "Your Windows PC"),
    ("Logged In As", "eugenekenny"),
    ("How to Check", "Open PowerShell  →  type:  gh auth status"),
])

story += make_section("📁", "Project Files — On Your Computer", [
    ("Location", "C:/Users/kenls/marias-website-project"),
    ("Tech Stack", "Next.js + Tailwind CSS"),
    ("Pages Built", "Homepage, Listings, Mortgage Calculator"),
    ("GitHub Repo", "github.com/eugenekenny/marias-website-project"),
    ("Auto-Deploy", "Every push to GitHub goes live on Vercel automatically"),
])

story += make_section("🌐", "Website Pages", [
    ("Homepage", "mariacoloradorealty.com"),
    ("Listings", "mariacoloradorealty.com/listings"),
    ("Mortgage Calculator", "mariacoloradorealty.com/mortgage-calculator"),
    ("Contact Form", "Bottom of homepage — sends to contact@mariacoloradorealty.com"),
])

story.append(HRFlowable(width="100%", thickness=1, color=GOLD, spaceAfter=8))
story.append(Paragraph("Maria Navin-Lassiter | Century 21 Real Estate | Denver, CO  ·  Generated by Claude Code", footer_style))

doc.build(story)
print(f"PDF saved to: {OUTPUT_PATH}")

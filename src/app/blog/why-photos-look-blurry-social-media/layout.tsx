import type { Metadata } from 'next'

const SITE_URL = 'https://compressimg.pro'
const PAGE_URL = `${SITE_URL}/blog/why-photos-look-blurry-social-media/`
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  title: 'Why Do Exported Images Look Blurry on Social Media? (2026 Fix)',
  description:
    'Your exported photos look blurry on Instagram, Facebook, or LinkedIn? Learn exactly why platforms compress images and 5 proven ways to keep them sharp.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Why Do Exported Images Look Blurry on Social Media? (2026 Fix)',
    description:
      'Your exported photos look blurry on Instagram, Facebook, or LinkedIn? Learn exactly why platforms compress images and 5 proven ways to keep them sharp.',
    url: PAGE_URL,
    siteName: 'CompressImg',
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: 'Why Photos Look Blurry on Social Media' },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Do Photos Look Blurry on Social Media?',
    description: 'Why Instagram, Facebook, and LinkedIn blur your photos — and 5 fixes.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Why Do Exported Images Look Blurry on Social Media? (2026 Fix)',
      description:
        'Why social media platforms compress and blur photos — and 5 proven ways to keep images sharp.',
      url: PAGE_URL,
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Organization', name: 'CompressImg', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'CompressImg',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: OG_IMAGE },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Why Photos Look Blurry on Social Media',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Will pre-compressing really make a visible difference?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, in most cases. The effect is most noticeable on photos with fine detail — hair, fabric, foliage, skin texture. Pre-compressing a 5MB photo to 400KB at quality 80, then uploading to Instagram, typically produces a noticeably sharper result than uploading the 5MB original and letting Instagram compress it to 400KB on its own.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this work on iPhone photos (HEIC)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'iPhone photos saved in HEIC format need to be converted to JPG before most social platforms accept them. Use the HEIC to JPG converter, then compress at quality 80 before uploading. Alternatively, you can set your iPhone camera to shoot in "Most Compatible" mode (JPG) under Settings → Camera → Formats.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does my photo look fine on my phone but blurry on the platform?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Your phone shows the local original file, which has not been compressed. The platform shows the recompressed version it stored. This is normal — the gap between the two is the effect of the platform's compression. After you upload a pre-compressed version, compare the platform result to the original again and you will see a smaller quality gap.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does image format matter (JPG vs PNG vs WebP)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. For social media, JPG is the safest format. Platforms are optimized for JPG input and handle it predictably. PNG uploads are converted to JPG internally by most platforms, adding an extra encoding step. WebP is not accepted by Instagram and TikTok. For photos: use JPG.',
          },
        },
        {
          '@type': 'Question',
          name: 'What resolution should I upload for the best quality?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Upload at the platform's maximum display resolution — not higher. For Instagram feed photos: 1080px wide. For Facebook timeline photos: 2048px wide. For Twitter: 1200×675px. For WhatsApp: 1280px on the longest side. Uploading higher resolution forces the platform to downscale then compress — two operations that both reduce quality.",
          },
        },
        {
          '@type': 'Question',
          name: 'Why do photos look blurry after uploading to Instagram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Instagram recompresses every uploaded image to its own target file size. If you upload a large uncompressed original, Instagram applies heavy compression to reduce it, which introduces visible quality loss. Pre-compressing to quality 80 at 1080px wide gives Instagram less to degrade, resulting in a sharper final image.',
          },
        },
      ],
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}

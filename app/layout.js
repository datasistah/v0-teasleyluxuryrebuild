
import './globals.css'

export const metadata = {
  title: 'Teasley Lawn Care Services',
  description: 'Luxury lawn care and landscaping in Raleigh, NC'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

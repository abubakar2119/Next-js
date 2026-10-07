export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <header style={{
          backgroundColor:"lightblue",
          padding:"1rem"
        }}>
          <p>header</p>
        </header>
        {children}
        
        </body>
    </html>
  )
}
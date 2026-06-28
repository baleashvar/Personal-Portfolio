export default function Footer() {
  return (
    <footer
      className="text-center py-6 text-sm"
      style={{ color: 'var(--muted)', borderTop: '1px solid var(--border)' }}
    >
      {new Date().getFullYear()} Baleashvar Kasiviswanathan — Built with React and TypeScript
    </footer>
  )
}

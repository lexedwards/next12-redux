export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

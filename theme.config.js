const YEAR = new Date().getFullYear()
// <a href="/feed.xml">RSS</a>

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Brody Uehara.
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
}

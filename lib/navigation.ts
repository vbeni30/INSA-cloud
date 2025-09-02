export const navigateWithScrollToTop = (router: any, href: string) => {
  router.push(href)
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, 100)
}

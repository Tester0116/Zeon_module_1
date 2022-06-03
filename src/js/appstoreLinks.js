export const appStoreLinks = (DATA) => {
  const getAppLinks = document.querySelectorAll('.get-app_link')
  getAppLinks.forEach((app) => (app.href = DATA.appStoreLink))
}

module.exports = function() {
  this.Given(/^I open home page$/, function() {
    var homepageFooter = this.page.homepageFooter();
    homepageFooter.footerAboutClick()

  })

  this.Then(/^Then I click About on footer$/, function() {
    var homepageFooter = this.page.homepageFooter();
    homepageFooter.footerPress()

  })
};

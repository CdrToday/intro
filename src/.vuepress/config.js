module.exports = {
  base: '/intro/',
  title: 'cdr.today',
  description: 'Louder than words.',
  themeConfig: {
    sidebar: [
      '/', 
      '/download',
      `/test`,
      '/faq',
      {
	title: '版本',
	children: [
	  '/versions/v0.1.x',
	  '/versions/v0.2.x',
	  '/versions/v0.3.x',
	  '/versions/v0.4.x',
	  '/versions/v0.5.x',
	]
      }, {
	title: '路线图',
	path: '/roadmap',
	sidebarDepth: 0,
      }, {
	title: '开源依赖',
	path: '/deps',
	sidebarDepth: 0,
      }, {
	title: '隐私政策',
	path: '/privacy/',
        sidebarDepth: 0,
	children: [
	  '/privacy/zh',
	  '/privacy/en'
	]
      }, {
	title: '项目周志',
	path: '/journal/',
      }
    ],
    displayAllHeaders: false,
    lastUpdated: 'Last Updated'
  }
}

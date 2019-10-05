module.exports = {
  base: '/intro/',
  title: 'cdr.today',
  description: 'Louder than words.',
  themeConfig: {
    sidebar: [
      '/', 
      '/download',
      {
	title: '版本',
	// path: '/versions/',
	children: [
	  '/versions/v0.1.x',
	  '/versions/v0.2.x',
	]
      }, {
	title: '路线图',
	path: '/roadmap',
	sidebarDepth: 0,
      }, {
	title: '隐私政策',
	// path: '/privacy/',
        sidebarDepth: 0,
	children: [
	  '/privacy/zh',
	  '/privacy/en'
	]
      }, {
	title: '开源依赖',
	path: '/deps',
	sidebarDepth: 0,
      }, {
	title: '项目博客',
	path: '/journal/',
	sidebarDepth: 0,
      }
    ],
    displayAllHeaders: false,
    lastUpdated: 'Last Updated'
  }
}

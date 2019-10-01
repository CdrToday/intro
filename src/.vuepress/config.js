module.exports = {
  base: '/intro/',
  title: 'cdr.today',
  description: 'Louder than words.',
  themeConfig: {
    sidebar: [
      '/', 
      '/download',
      {
	title: '隐私',
	// path: '/privacy/',
	collapsable: false,
        sidebarDepth: 0,
	children: [
	  '/privacy/zh',
	  '/privacy/en'
	]
      },
      {
	title: '版本',
	// path: '/versions/',
	collapsable: false,
	children: [
	  '/versions/v0.1.x',
	  '/versions/v0.2.x',
	]
      },
    ],
    displayAllHeaders: false
  }
}

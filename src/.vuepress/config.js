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
	sidebarDepth: 0,
	children: [
	  '/journal/38.5',
	  '/journal/38',
	  '/journal/37',
	  '/journal/36',
	  '/journal/35',
	  '/journal/34',
	  '/journal/33',
	  '/journal/32',
	  '/journal/31',
	  '/journal/30',
	  '/journal/29',
	  '/journal/28',
	  '/journal/27',
	  '/journal/26',
	  '/journal/25',
	  '/journal/24',
	  '/journal/23',
	  '/journal/22',
	  '/journal/21',
	  '/journal/19',
	  '/journal/18',
	  '/journal/17',
	  '/journal/16',
	  '/journal/15',
	  '/journal/14',
	  '/journal/13',
	  '/journal/12',
	  '/journal/11',
	  '/journal/10',
	  '/journal/09',
	  '/journal/08',
	  '/journal/07',
	  '/journal/06',
	  '/journal/05',
	  '/journal/04',
	  '/journal/03',
	  '/journal/02',
	  '/journal/01',
	  '/journal/00',
	]
      }
    ],
    displayAllHeaders: false,
    lastUpdated: 'Last Updated'
  }
}

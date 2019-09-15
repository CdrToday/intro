module.exports = {
  base: '/intro/',
  title: 'cdr.today',
  description: 'Louder than words.',
  themeConfig: {
    sidebar: [
      '/', 
      {
	title: '设计',
	path: '/arch/',
	children: [
	  '/arch/funcs',
	  '/arch/status'
	],
      },{
	title: '版本',
	path: '/versions/',
	children: [
	  '/versions/v0.1.x',
	]
      },
      '/download'
    ],
    
    displayAllHeaders: true
  }
}

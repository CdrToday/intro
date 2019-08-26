module.exports = {
  base: '/intro/',
  title: 'cdr.today',
  description: 'Louder than words.',
  themeConfig: {
    sidebar: [
      '/', 
      '/download',
    {
      title: '日志',
      children: [
	'/versions/v0.1.x',
	'/versions/v0.2.x',
	'/versions/v0.3.x'
      ]
    }],
    displayAllHeaders: true
  }
}

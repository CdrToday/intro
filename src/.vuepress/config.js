module.exports = {
  title: 'cdr.today',
  description: 'Louder than words.',
  themeConfig: {
    sidebar: [
      '/', 
      '/download',
    {
      title: '版本',
      children: [
	'/versions/',
	'/versions/v0.1.x'
      ]
    }],
    displayAllHeaders: true
  }
}
